<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * The public marketplace listing. Only approved ads are visible here —
     * a seller's own pending/rejected ads show up on their profile instead.
     */
    public function index(Request $request): JsonResponse
    {
        $search = trim((string) $request->query('search', ''));

        $products = Product::query()
            ->with('owner:id,name')
            ->where('status', Product::STATUS_APPROVED)
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('description', 'like', "%{$search}%");
                });
            })
            ->latest('id')
            ->get();

        return response()->json([
            'products' => $this->decorate($products, $request),
        ]);
    }

    /**
     * Every ad belonging to the signed in user, whatever its status.
     */
    public function mine(Request $request): JsonResponse
    {
        $products = $request->user()
            ->products()
            ->with('owner:id,name')
            ->latest('id')
            ->get();

        return response()->json([
            'products' => $this->decorate($products, $request),
        ]);
    }

    /**
     * Counts behind the Pending / Approved / Rejected cards on the profile.
     */
    public function stats(Request $request): JsonResponse
    {
        $counts = $request->user()
            ->products()
            ->select('status', DB::raw('count(*) as total'))
            ->groupBy('status')
            ->pluck('total', 'status');

        return response()->json([
            'stats' => [
                'pending' => (int) $counts->get(Product::STATUS_PENDING, 0),
                'approved' => (int) $counts->get(Product::STATUS_APPROVED, 0),
                'rejected' => (int) $counts->get(Product::STATUS_REJECTED, 0),
            ],
        ]);
    }

    public function show(Request $request, Product $product): JsonResponse
    {
        $product->load('owner:id,name,email,image');

        return response()->json([
            'product' => $this->decorate(collect([$product]), $request)->first(),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'price' => ['required', 'integer', 'min:0'],
            'description' => ['nullable', 'string', 'max:2000'],
            'image' => ['nullable', 'url', 'max:2000'],
        ]);

        $product = $request->user()->products()->create([
            ...$data,
            'status' => Product::STATUS_PENDING,
        ]);

        $product->load('owner:id,name');

        return response()->json([
            'product' => $this->decorate(collect([$product]), $request)->first(),
        ], 201);
    }

    public function destroy(Request $request, Product $product): JsonResponse
    {
        if ($product->user_id !== $request->user()->id) {
            return response()->json(['message' => 'This ad is not yours.'], 403);
        }

        $product->delete();

        return response()->json(['message' => 'Ad deleted.']);
    }

    /**
     * Attaches per-user flags so the client can render a filled heart or a
     * disabled "Add" button without a second round trip.
     */
    private function decorate($products, Request $request)
    {
        // index/show are public routes, so resolve the token guard explicitly
        // rather than relying on the default one.
        $user = $request->user('sanctum');

        if (! $user) {
            return $products->map(fn (Product $product) => $this->toArray($product, false, false));
        }

        $favorited = $user->favorites()->pluck('product_id')->flip();
        $inCart = $user->cartItems()->pluck('product_id')->flip();

        return $products->map(fn (Product $product) => $this->toArray(
            $product,
            $favorited->has($product->id),
            $inCart->has($product->id),
        ));
    }

    private function toArray(Product $product, bool $isFavorite, bool $inCart): array
    {
        return [
            ...$product->toArray(),
            'is_favorite' => $isFavorite,
            'in_cart' => $inCart,
        ];
    }
}
