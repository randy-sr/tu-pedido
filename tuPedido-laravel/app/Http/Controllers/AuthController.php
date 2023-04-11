<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //

    public function register(RegistroRequest $request) {
        // validar registro
        $data = $request->validated();

        //crear un usuario para
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            // bycript cachea el password
            'password' => bcrypt($data['password'])
        ]);

        // retornar respuesta
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    public function login(LoginRequest $request) {
        $data = $request->validated();    
    
        // revisar password
        if(!Auth::attempt($data)) {
            return response([
                'errors' => ['El email o el password son incorrectos']
            ], 422);
        }

        // Autenticar al usuario
        $user = Auth::user();
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];

    }

    public function logout(Request $request) {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return [
            'user' => null
        ];
    }
}
