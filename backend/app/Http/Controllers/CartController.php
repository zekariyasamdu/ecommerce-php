<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        return response()->json($this->payload($request));
    }

    /**
     * Adding a product that is already in the cart bumps its quantity rather
     * than creating a duplicate row.
     */
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'product_id' => ['required', 'integer', 'exists:products,id'],
            'quantity' => ['nullable', 'integer', 'min:1', 'max:99'],
        ]);

        $item = $request->user()->cartItems()->firstOrNew([
            'product_id' => $data['product_id'],
        ]);

        $item->quantity = ($item->exists ? $item->quantity : 0) + ($data['quantity'] ?? 1);
        $item->save();

        return response()->json($this->payload($request), $item->wasRecentlyCreated ? 201 : 200);
    }

    public function update(Request $request, CartItem $cartItem): JsonResponse
    {
        if ($cartItem->user_id !== $request->user()->id) {
            return response()->json(['message' => 'This cart item is not yours.'], 403);
        }

        $data = $request->validate([
            'quantity' => ['required', 'integer', 'min:1', 'max:99'],
        ]);

        $cartItem->update($data);

        return response()->json($this->payload($request));
    }

    public function destroy(Request $request, CartItem $cartItem): JsonResponse
    {
        if ($cartItem->user_id !== $request->user()->id) {
            return response()->json(['message' => 'This cart item is not yours.'], 403);
        }

        $cartItem->delete();

        return response()->json($this->payload($request));
    }

    public function clear(Request $request): JsonResponse
    {
        $request->user()->cartItems()->delete();

        return response()->json($this->payload($request));
    }

    /**
     * Every cart write returns the whole cart so the client never has to guess
     * at the new totals.
     */
    private function payload(Request $request): array
    {
        $items = $request->user()
            ->cartItems()
            ->with('product.owner:id,name')
            ->latest('id')
            ->get()
            ->map(fn (CartItem $item) => [
                'id' => $item->id,
                'quantity' => $item->quantity,
                'product' => $item->product,
                'subtotal' => $item->quantity * ($item->product?->price ?? 0),
            ]);

        return [
            'items' => $items,
            'count' => $items->sum('quantity'),
            'total' => $items->sum('subtotal'),
        ];
    }
}
