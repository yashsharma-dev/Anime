<?php
use App\Http\Middleware\MyAuth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AnimeController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::get('show_random_product', 'App\Http\Controllers\Api@show_random_product')->name('show_random_product');

Route::get('home','App\Http\Controllers\Api@home')->name('home');
Route::get('home_list','App\Http\Controllers\Api@home_list')->name('home_list');

Route::get('trending','App\Http\Controllers\Api@trending')->name('trending');


Route::get('single_product/{id}','App\Http\Controllers\Api@single_product')->name('single_product');

Route::post('register','App\Http\Controllers\Api@register')->name('register');

Route::post('login','App\Http\Controllers\Api@login')->name('login');

Route::get('search','App\Http\Controllers\Api@search')->name('search');

Route::get('genres','App\Http\Controllers\Api@genres')->name('genres');

Route::get('products_with_gonres/{id}','App\Http\Controllers\Api@products_with_gonres')->name('products_with_gonres');

Route::delete('remove/{id}','App\Http\Controllers\Api@remove')->name('remove');
Route::get('users','App\Http\Controllers\Api@users')->name('users');



Route::middleware([MyAuth::class])->group(function () {

    Route::post("add_product", "App\Http\Controllers\Api@add_product")->name("add_product");

    
    Route::post("update_products/{id}", "App\Http\Controllers\Api@update_products")->name("update_products");
    
});