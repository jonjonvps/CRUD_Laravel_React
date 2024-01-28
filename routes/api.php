<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route to get the list of all users
Route::get('users', [UsersController::class, 'index']);

// Route to create a new user 
Route::post('users', [UsersController::class, 'create']);

// Route to get information from a specific user based on ID
Route::get('users/{id}', [UsersController::class, 'singlePerson']);

Route::get('users/edit/{id}', [UsersController::class, 'edit']);

// Route to update the information of a specific user based on ID 
Route::put('users/edit/{id}', [UsersController::class, 'update']);

// Route to delete a specific user based on ID 
Route::delete('users/delete/{id}', [UsersController::class, 'delete']);