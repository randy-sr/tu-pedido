<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProductoController;
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

// Agrupar rutas que necesitan autenticación
Route::middleware('auth:sanctum')->group(function() {
    // Ruta para obtener información del usuario autenticado
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    // Ruta para cerrar sesión
    Route::post('/logout', [AuthController::class, 'logout']);
    // Rutas para almacenar y mostrar pedidos
    Route::apiResource('/pedidos', PedidoController::class);

    // Rutas para almacenar y mostrar categorías de productos
    // Con apiResource no tengo que ir asociando cada metodo(get,post) sino que este ya asocia dependiendo del metodo
    Route::apiResource('/categorias', CategoriaController::class);
    // Rutas para almacenar y mostrar productos
    Route::apiResource('/productos', ProductoController::class);
});



// Rutas para autenticación (registro e inicio de sesión)
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);