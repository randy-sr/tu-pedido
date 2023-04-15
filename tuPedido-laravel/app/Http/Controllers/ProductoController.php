<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductoCollection;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
   
    public function index()
    {
        return new ProductoCollection(Producto::where('disponible', 1)->get());
    }

    
    public function store(Request $request)
    {
        
    }

    
    public function show(Producto $producto)
    {
        
    }

    
    public function update(Request $request, Producto $producto)
    {
        // Actualizar el valor del atributo 'disponible' del producto a 0 (no disponible)
        $producto->disponible = 0;
        // Guardar el producto actualizado en la base de datos
        $producto->save();
        // Devolver una respuesta JSON con el producto actualizado
        return [
            'producto' => $producto
        ];
    }

    
    public function destroy(Producto $producto)
    {
        
    }
}
