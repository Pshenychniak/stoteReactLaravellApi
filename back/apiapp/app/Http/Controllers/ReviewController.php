<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);
        
        $reviews=Review::all();
        return response()->json($reviews,200);
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
        Review::create($data);
        
        $reviews=Review::all();
        return response()->json($reviews,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reviews=Review::find($id);
        return response()->json($reviews,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $reviews=Review::find($id);
        
        return response()->json($reviews,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
        ]);

        $edit=Review::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $reviews=Review::all();
        return response()->json($reviews,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reviews=Review::find($id);
        $reviews->delete();
        $reviews=Review::all();
        return response()->json($reviews,200);
    }
}
