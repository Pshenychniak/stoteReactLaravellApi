<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return response()->json($orders, 200);
    }

    // Перегляд конкретного замовлення
    public function show($id)
    {
        $order = Order::findOrFail($id);
        return response()->json($order, 200);
    }

    // Створення нового замовлення
    public function store(Request $request)
    {
        $order = Order::create($request->all());
        return response()->json($order, 201);
    }

    // Оновлення існуючого замовлення
    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->update($request->all());
        return response()->json($order, 200);
    }

    // Видалення замовлення
    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json([], 204);
    }
}
