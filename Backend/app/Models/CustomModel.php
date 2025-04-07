<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomModel extends Model
{
    use HasFactory;

    protected $table = 'home_page'; // Define the table name

    protected $fillable = ['name', 'category', 'price', 'description']; // Use 'description' instead of 'desc'
}
