<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
// use Illuminate\Support\Facades\Session;


class CartController extends Controller
{


    public function addToCart(Request $request, $productId)
{
    // Отримати ID сесії з заголовків
    $sessionId = $request->header('Authorization');

    $cartItem = Cart::where('session_id', $sessionId)
        ->where('product_id', $productId)
        ->first();

    if ($cartItem) {
        // Якщо товар вже є в корзині, збільшити кількість
        $cartItem->increment('quantity', $request->input('quantity', 1));
    } else {
        // Додати новий товар до корзини
        Cart::create([
            'session_id' => $sessionId,
            'product_id' => $productId,
            'quantity' => $request->input('quantity', 1),
        ]);
    }

    // Отримати всі елементи корзини та повернути їх у відповідь
    $carts = Cart::where('session_id', $sessionId)->get();
    return response()->json($carts, 200);
}

public function removeItem(Request $request, $productId)
{
    $sessionId = $request->header('Authorization');

    // Видалення товару з бази даних
    Cart::where('session_id', $sessionId)
        ->where('product_id', $productId)
        ->delete();

    // Повернення успішного відгуку без вмісту (204)
    return response()->json([], 204);
}

    public function showCart(Request $request)
{
    // Отримати ID сесії з заголовка Authorization
    $sessionId = $request->header('Authorization');

    $carts = Cart::where('session_id', $sessionId)->with('product')->get();

    // Інші обчислення можливі відповідно до ваших потреб
    
    return response()->json($carts, 200);
}


public function updateQuantity(Request $request, $productId)
{
    $sessionId = $request->header('Authorization');
    $newQuantity = $request->input('quantity');

    // Отримайте об'єкт товару з бази даних
    $cartItem = Cart::where('session_id', $sessionId)
        ->where('product_id', $productId)
        ->first();

    if ($cartItem) {
        // Оновіть кількість товару
        $cartItem->update(['quantity' => $newQuantity]);

        // Поверніть оновлену корзину
        $carts = Cart::where('session_id', $sessionId)->with('product')->get();
        return response()->json($carts, 200);
    } else {
        // Товар не знайдено в корзині
        return response()->json(['error' => 'Product not found in the cart'], 404);
    }
}

public function placeOrder(Request $request)
{
    $sessionId = $request->header('Authorization');
    $cartItems = Cart::where('session_id', $sessionId)->with('product')->get();

    // Створюємо нове замовлення без прив'язки до користувача
    $order = Order::create([]);

    // Додаємо товари з корзини до замовлення
    foreach ($cartItems as $cartItem) {
        OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $cartItem->product->id,
            'quantity' => $cartItem->quantity,
            'price' => $cartItem->product->price,
        ]);
    }

    // Очищаємо корзину після оформлення замовлення
    Cart::where('session_id', $sessionId)->delete();

    return response()->json(['message' => 'Order placed successfully'], 200);
}





    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);

        $carts = Cart::all();
        return response()->json($carts, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        // return view('laravel-examples/testpost/testpost-create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
        ]);
        Cart::create($data);

        $carts = Cart::all();
        return response()->json($carts, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $carts = Cart::find($id);
        return response()->json($carts, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $carts = Cart::find($id);

        return response()->json($carts, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = request()->validate([
            'name' => 'required|string',
        ]);

        $edit = Cart::find($id);

        $edit->name = $data['name'] ?? $edit->name;
        $edit->save();

        $carts = Cart::all();
        return response()->json($carts, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $carts = Cart::find($id);
        $carts->delete();
        $carts = Cart::all();
        return response()->json($carts, 200);
    }
}
