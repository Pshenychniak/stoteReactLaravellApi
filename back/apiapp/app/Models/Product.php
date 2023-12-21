<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table='products';
    protected $fillable = [
        'title',      
        'price',
        'main_img',
        'second_img',
        'description',
        'category_id',
        'status_id',
    ];
    public function status(){
        return $this->belongsTo(Status::class, 'status_id');
    }
    public function category(){
        return $this->belongsTo(Category::class, 'category_id');
    }
}
