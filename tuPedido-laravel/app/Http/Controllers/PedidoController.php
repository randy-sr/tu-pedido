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
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new PedidoCollection(Pedido::with('user')->with('productos')->where('estado', 0)->get());
    }

    /**
     * Store a newly created resource in storage.
     */
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


        return [
            'message' => 'Pedido realizado correctamente, estará listo en unos minutos'
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(Pedido $pedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pedido $pedido)
    {
        //

        $pedido->estado = 1;
        $pedido->save();

        return [
            'pedido' => $pedido
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pedido $pedido)
    {
        //
    }
}
