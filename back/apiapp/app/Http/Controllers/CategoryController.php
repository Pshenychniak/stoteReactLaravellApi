<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);
        
        $categories=Category::all();
        return response()->json($categories,200);
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
        $data=request()->validate([
            'name'=> 'required|string',
        ]);
        Category::create($data);

        $categories=Category::all();
        return response()->json($categories,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $categories=Category::find($id);
        return response()->json($categories,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $categories=Category::find($id);
        
        return response()->json($categories,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
        ]);

        $edit=Category::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $categories=Category::all();
        return response()->json($categories,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $categories=Category::find($id);
        $categories->delete();
        $categories=Category::all();
        return response()->json($categories,200);
    }
}
