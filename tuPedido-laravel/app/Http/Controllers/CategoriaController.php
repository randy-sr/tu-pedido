<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaCollection;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index() {
        
        // ENTREGAR RESPUESTAS TIPO JSON DE LAS CATEGORIAS
        //return response()->json(['categorias' => Categoria::all()]);

        // Con la clase CategoriaCollection me devuelve directamente la respuesta tipo json
        return new CategoriaCollection(Categoria::all());
    } 
}
