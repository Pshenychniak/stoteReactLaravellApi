<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);
        
        $admins=Admin::all();
        return response()->json($admins,200);
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
            'login'=> 'required|string',
            'password'=> 'required|string',
        ]);
        Admin::create($data);

        $admins=Admin::all();
        return response()->json($admins,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $username)
    {
        $admins=Admin::where('login', $username)->first();
        return response()->json($admins,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $admins=Admin::find($id);
        
        return response()->json($admins,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'login'=> 'required|string',
            'password'=> 'required|string',
        ]);

        $edit=Admin::find($id);

        $edit->name=$data['login'] ?? $edit->name;
        $edit->password=$data['password'] ?? $edit->password;
        $edit->save();

        $admins=Admin::all();
        return response()->json($admins,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $admins=Admin::find($id);
        $admins->delete();
        $admins=Admin::all();
        return response()->json($admins,200);
    }
}
