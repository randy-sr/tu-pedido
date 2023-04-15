<?php

namespace App\Http\Controllers;

use App\Http\Resources\PedidoCollection;
use App\Models\Pedido;
use App\Models\PedidoProducto;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PedidoController extends Controller
{
    // Devuelve una colección de pedidos con su información de usuario y productos asociados.
    public function index()
    {
        return new PedidoCollection(Pedido::with('user')->with('productos')->where('estado', 0)->get());
    }


    public function store(Request $request)
    {
        // ALMACENAR ORDEN
        $pedido = new Pedido;
        $pedido->user_id = Auth::user()->id;
        $pedido->total = $request->total;
        $pedido->cantidad_propina = $request->cantidad_propina;
        $pedido->save();

        // OBTENER EL ID DEL PEDIDO
        $id = $pedido->id;

        $cantidad_propina = $pedido->cantidad_propina;
        // ONTENER LOS PRODUCTOS
        $productos = $request->productos;

        // FORMATEAR ARREGLO
        $pedido_producto = [];

        foreach ($productos as $producto) {
            $pedido_producto[] = [
                'pedido_id' => $id,
                'producto_id' => $producto['id'],
                'cantidad' => $producto['cantidad'],
                'cantidad_propina' => $cantidad_propina,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ];
        }

        // ALMACENAR EN LA BD
        PedidoProducto::insert($pedido_producto);

        // RETORNAR RESPUESTA
        return [
            'message' => 'Pedido realizado correctamente, estará listo en unos minutos'
        ];
    }

    
    public function show(Pedido $pedido)
    {
        //
    }

    
    public function update(Request $request, Pedido $pedido)
    {
        // Actualiza el estado del pedido a "completado"

        $pedido->estado = 1;
        $pedido->save();

        return [
            'pedido' => $pedido
        ];
    }

    
    public function destroy(Pedido $pedido)
    {
        
    }
}
