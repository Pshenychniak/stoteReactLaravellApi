<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderItem;

class OrderItemsController extends Controller
{
        // Перегляд всіх замовлень
        public function index()
        {
            $order_items = OrderItem::with('product')->get();
            return response()->json($order_items, 200);
        }
    
        // Перегляд конкретного замовлення
        public function show($id)
        {
            $order_item = OrderItem::findOrFail($id);
            return response()->json($order_item, 200);
        }
    
        // Створення нового замовлення
        public function store(Request $request)
        {
            $order_item = OrderItem::create($request->all());
            return response()->json($order_item, 201);
        }
    
        // Оновлення існуючого замовлення
        public function update(Request $request, $id)
        {
            $order_item = OrderItem::findOrFail($id);
            $order_item->update($request->all());
            return response()->json($order_item, 200);
        }
    
        // Видалення замовлення
        public function destroy($id)
        {
            $order_item = OrderItem::findOrFail($id);
            $order_item->delete();
            $order_items = OrderItem::all();
        return response()->json($order_items, 200);
        }
}
