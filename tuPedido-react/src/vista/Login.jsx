import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'


const Login = () => {
    // Crear referencias a los campos de formulario de correo electrónico y contraseña
    const emailRef = createRef()
    const passwordRef = createRef()

    // Crear un estado para almacenar los errores que se mostrarán al usuario
    const [ errores, setErrores ] = useState([])

    // Obtener la función `login` del hook `useAuth` que manejará el inicio de sesión del usuario
    const { login } = useAuth({
        middleware: 'guest', // Definir el middleware para el componente
        url: '/'// URL a la que se redirigirá al usuario después de iniciar sesión
    })

    // Manejar el envío del formulario
    const handleSubmit = async e => {
        e.preventDefault()

        // Obtener los valores de los campos de formulario
        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        // Llamar a la función `login` del hook `useAuth` para iniciar sesión con los datos proporcionados
        login(datos, setErrores)
    }

    return (
        <>
          {/* Título */}
          <h1 className="fs-1 fw-bold text-dark text-center">Iniciar Sesión</h1>
          <p className="text-center">Entra y pide un room service</p>

          {/* Contenedor del formulario */}
          <div className="shadow p-3 mb-2 bg-body rounded mt-3">
            {/* Formulario de inicio de sesión */}
              <form
                    onSubmit={ handleSubmit }
                    noValidate
              >
                    {/* Mostrar errores al usuario, si existen */}
                    { errores ? errores.map( (error, index) => <Alerta key={ index }>{error}</Alerta> ) : null}
                
                {/* Campo de correo electrónico */}
                <div className="mb-4 input-group">
                    <label className="fs-6" htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control mt-2 w-100 p-2" name="email" placeholder="Tu Email" ref={emailRef}/>
                </div>
                {/* Campo de contraseña */}
                <div className="mb-4 input-group">
                    <label className="fs-6" htmlFor="password">Password:</label>
                    <input type="password" id="password" className="form-control mt-2 w-100 p-2" name="password" placeholder="Tu Password" ref={passwordRef}/>
                </div>
                {/* Botón de inicio de sesión */}
                <input type="submit" value="Inicia Sesión" className="btn btn-primary w-100 mt-2 p-2 text-white fs-5 fw-bold border-0"/>
              </form>
              <nav className="mt-2 p-2 text-center">
                {/* Enlace al formulario de registro */}
                <Link to="/auth/registro">
                    ¿Aun no te has registrado? Registrate
                </Link>
              </nav>
          </div>

          
        </>
    )
}


export default Login