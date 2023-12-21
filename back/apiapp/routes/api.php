<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\OrderItemsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\FeedbackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/user',[HomeController::class,'getUser']);

Route::get('/books',[BookController::class,'index']);
Route::get('/books/{id}',[BookController::class,'show']);
Route::post('/books',[BookController::class,'store']);
Route::put('/books/{id}',[BookController::class,'update']);
Route::delete('/books/{id}',[BookController::class,'destroy']);

Route::get('category', [CategoryController::class,'index']);
Route::get('category/create', [CategoryController::class,'create']);
Route::post('category', [CategoryController::class,'store']);
Route::get('category/{id}', [CategoryController::class,'show']);
Route::get('category/{id}/edit', [CategoryController::class,'edit']);
Route::put('category/{id}', [CategoryController::class,'update']);
Route::delete('category/{id}', [CategoryController::class,'destroy']);

Route::get('admin', [AdminController::class,'index']);
Route::get('admin/create', [AdminController::class,'create']);
Route::post('admin', [AdminController::class,'store']);
Route::get('admin/{username}', [AdminController::class,'show']);
Route::get('admin/{id}/edit', [AdminController::class,'edit']);
Route::put('admin/{id}', [AdminController::class,'update']);
Route::delete('admin/{id}', [AdminController::class,'destroy']);

Route::get('product', [ProductController::class,'index']);
Route::get('product/create', [ProductController::class,'create']);
Route::post('product', [ProductController::class,'store']);
Route::get('product/{id}', [ProductController::class,'show']);
Route::get('product/{id}/edit', [ProductController::class,'edit']);
Route::put('product/{id}', [ProductController::class,'update']);
Route::delete('product/{id}', [ProductController::class,'destroy']);

Route::get('review', [ReviewController::class,'index']);
Route::get('review/create', [ReviewController::class,'create']);
Route::post('review', [ReviewController::class,'store']);
Route::get('review/{id}', [ReviewController::class,'show']);
Route::get('review/{id}/edit', [ReviewController::class,'edit']);
Route::put('review/{id}', [ReviewController::class,'update']);
Route::delete('review/{id}', [ReviewController::class,'destroy']);

Route::get('status', [StatusController::class,'index']);
Route::get('status/create', [StatusController::class,'create']);
Route::post('status', [StatusController::class,'store']);
Route::get('status/{id}', [StatusController::class,'show']);
Route::get('status/{id}/edit', [StatusController::class,'edit']);
Route::put('status/{id}', [StatusController::class,'update']);
Route::delete('status/{id}', [StatusController::class,'destroy']);

Route::get('type', [CategoryController::class,'index']);
Route::get('type/create', [CategoryController::class,'create']);
Route::post('type', [CategoryController::class,'store']);
Route::get('type/{id}', [CategoryController::class,'show']);
Route::get('type/{id}/edit', [CategoryController::class,'edit']);
Route::put('type/{id}', [CategoryController::class,'update']);
Route::delete('type/{id}', [CategoryController::class,'destroy']);

Route::get('orderitem', [OrderItemsController::class,'index']);
Route::get('orderitem/create', [OrderItemsController::class,'create']);
Route::post('orderitem', [OrderItemsController::class,'store']);
Route::get('orderitem/{id}', [OrderItemsController::class,'show']);
Route::get('orderitem/{id}/edit', [OrderItemsController::class,'edit']);
Route::put('orderitem/{id}', [OrderItemsController::class,'update']);
Route::delete('orderitem/{id}', [OrderItemsController::class,'destroy']);

Route::get('order', [OrderController::class,'index']);
Route::get('order/create', [OrderController::class,'create']);
Route::post('order', [OrderController::class,'store']);
Route::get('order/{id}', [OrderController::class,'show']);
Route::get('order/{id}/edit', [OrderController::class,'edit']);
Route::put('order/{id}', [OrderController::class,'update']);
Route::delete('order/{id}', [OrderController::class,'destroy']);


Route::get('feedback', [FeedbackController::class,'index']);
Route::get('feedback/create', [FeedbackController::class,'create']);
Route::post('feedback', [FeedbackController::class,'store']);


Route::get('/cart', [CartController::class, 'showCart']);
Route::post('/cart/add/{productId}', [CartController::class, 'addToCart']);
Route::post('/cart/updateQuantity/{productId}', [CartController::class, 'updateQuantity']);
Route::delete('/cart/removeItem/{productId}', [CartController::class, 'removeItem']);
Route::post('/cart/placeOrder', [CartController::class, 'placeOrder']);




