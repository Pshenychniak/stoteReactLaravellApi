<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    public function index()
    {
        // dd(666);
        
        $feedbacks=Feedback::all();
        return response()->json($feedbacks,200);
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
            'email'=> 'required|string',
            'message'=> 'required|string',
        ]);
        Feedback::create($data);

        $feedbacks=Feedback::all();
        return response()->json($feedbacks,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $feedbacks=Feedback::find($id);
        return response()->json($feedbacks,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $feedbacks=Feedback::find($id);
        
        return response()->json($feedbacks,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
        ]);

        $edit=Feedback::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $feedbacks=Feedback::all();
        return response()->json($feedbacks,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $feedbacks=Feedback::find($id);
        $feedbacks->delete();
        $feedbacks=Feedback::all();
        return response()->json($feedbacks,200);
    }
}
