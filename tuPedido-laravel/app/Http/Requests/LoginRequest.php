<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    
    public function authorize(): bool
    {
        return true;
    }

    // Definir las reglas de validación para el formulario de login
    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'exists:users,email'],
            'password' => 'required'
        ];
    }

    // Personalizar los mensajes de error para las reglas de validación
    public function messages() 
    {
        return [
            'email.required' => 'El email es obligatorio',
            'email.email' => 'El email no es válido',
            'email.exists' => 'Esa cuenta no existe',
            'password' => 'El password es obligatorio',
        ];
    }
}
