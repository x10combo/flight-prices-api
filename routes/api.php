<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FlightController;

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


// Defines a route to handle POST requests for retrieving flight prices
Route::post('/flights',  [FlightController::class, 'getFlightPrices']);

// Define a route that requires authentication using the Sanctum middleware to retrieve user information
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

// Return the requested authenticated user's information
    return $request->user();
});
