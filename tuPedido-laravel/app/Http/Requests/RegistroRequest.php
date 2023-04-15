<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRules;

class RegistroRequest extends FormRequest
{
     // Método que verifica si el usuario tiene acceso para realizar la solicitud
    public function authorize(): bool
    {
        return true;
    }

    // Reglas de validación que deben cumplir los campos de la solicitud
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                PasswordRules::min(8)->letters()->symbols()->numbers()
            ]
        ];
    }
    
    // Mensajes de error personalizados para cada regla de validación
    public function messages() {
        return [
            'name' => 'El nombre es obligatorio',
            'email.required' => 'EL email es obligatorio',
            'email.email' => 'El email no es válido',
            'email.unique' => 'El usuario esta registrado',
            'password' => 'El password debe contener al menos 8 caracteres, un simbolo y un número'
        ];
    }
}
