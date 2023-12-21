<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Status;

class StatusController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);
        
        $statuses=Status::all();
        return response()->json($statuses,200);
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
        Status::create($data);
        
        $statuses=Status::all();
        return response()->json($statuses,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $statuses=Status::find($id);
        return response()->json($statuses,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $statuses=Status::find($id);
        
        return response()->json($statuses,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
        ]);

        $edit=Status::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $statuses=Status::all();
        return response()->json($statuses,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $statuses=Status::find($id);
        $statuses->delete();
        $statuses=Status::all();
        return response()->json($statuses,200);
    }
}
