<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $products = $request->user()
            ->favorites()
            ->with('product.owner:id,name')
            ->latest('id')
            ->get()
            ->map(fn (Favorite $favorite) => $favorite->product)
            ->filter()
            ->values()
            ->map(fn ($product) => [
                ...$product->toArray(),
                'is_favorite' => true,
            ]);

        return response()->json(['products' => $products]);
    }

    /**
     * The heart button is a toggle, so one endpoint handles both directions.
     */
    public function toggle(Request $request): JsonResponse
    {
        $data = $request->validate([
            'product_id' => ['required', 'integer', 'exists:products,id'],
        ]);

        $existing = $request->user()
            ->favorites()
            ->where('product_id', $data['product_id'])
            ->first();

        if ($existing) {
            $existing->delete();

            return response()->json(['favorited' => false]);
        }

        $request->user()->favorites()->create($data);

        return response()->json(['favorited' => true], 201);
    }

    public function destroy(Request $request, int $productId): JsonResponse
    {
        $request->user()->favorites()->where('product_id', $productId)->delete();

        return response()->json(['favorited' => false]);
    }
}
