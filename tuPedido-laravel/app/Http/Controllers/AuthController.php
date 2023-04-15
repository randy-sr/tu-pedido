<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    
    // Método para registrar un nuevo usuario
    public function register(RegistroRequest $request) {
        // validar registro
        $data = $request->validated();

        // Crear un nuevo usuario en la base de datos
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            // bycript cachea el password
            'password' => bcrypt($data['password'])
        ]);

        // Retornar respuesta con el token y el usuario registrado
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    // Método para iniciar sesión
    public function login(LoginRequest $request) {
        $data = $request->validated();    
    
        // Verificar que las credenciales son correctas
        if(!Auth::attempt($data)) {
            return response([
                'errors' => ['El email o el password son incorrectos']
            ], 422);
        }

        // Si las credenciales son correctas, autenticar al usuario 
        // y retornar respuesta con el token y el usuario
        $user = Auth::user();
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];

    }

    // Método para cerrar sesión
    public function logout(Request $request) {
        // Obtener el usuario actual
        $user = $request->user();
        // Eliminar el token de acceso actual del usuario
        $user->currentAccessToken()->delete();
        
        // Retornar respuesta con el usuario como null
        return [
            'user' => null
        ];
    }
}
