<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);

        $products = Product::with('status', 'category')->get();

        return response()->json($products, 200);
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
            'title'  => 'required|string',
            'price' => 'required|integer',
            'main_img' => 'required|string',
            'second_img' => 'required|string',
            'description' => 'required|string',
            'category_id' => 'required|integer',
            'status_id' => 'required|integer',
        ]);
        Product::create($data);

        $products = Product::all();
        return response()->json($products, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $products = Product::with('status', 'category')->findOrFail($id);
        return response()->json($products, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $products = Product::find($id);

        return response()->json($products, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = request()->validate([            
            'title'  => 'required|string',
            'price' => 'required|integer',
            'main_img' => 'required|string',
            'second_img' => 'required|string',
            'description' => 'required|string',
            'category_id' => 'required|integer',
            'status_id' => 'required|integer',
        ]);

        $edit = Product::find($id);

        $edit->title = $data['title'] ?? $edit->title;
        $edit->price = $data['price'] ?? $edit->price;
        $edit->main_img = $data['main_img'] ?? $edit->main_img;
        $edit->second_img = $data['second_img'] ?? $edit->second_img;
        $edit->description = $data['description'] ?? $edit->description;
        $edit->category_id = $data['category_id'] ?? $edit->category_id;
        $edit->status_id = $data['status_id'] ?? $edit->status_id;
        $edit->save();

        $products = Product::all();
        return response()->json($products, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $products = Product::find($id);
        $products->delete();
        $products = Product::all();
        return response()->json($products, 200);
    }
}
