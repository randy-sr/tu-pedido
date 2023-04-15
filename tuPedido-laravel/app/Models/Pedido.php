<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;
    // Relación uno a muchos inversa con el modelo User
    public function user() {
        return $this->belongsTo(User::class);
    }

    // Relación muchos a muchos con el modelo Producto a través de la tabla intermedia 'pedido_productos'
    // También se obtiene la cantidad de productos asociados a cada pedido a través de 'withPivot'
    public function productos() {
        return $this->belongsToMany(Producto::class, 'pedido_productos')->withPivot('cantidad');
    }
}
