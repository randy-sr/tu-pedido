import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'

const Registro = () => {
    
    // Crear las referencias a los campos del formulario
    const nameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()

    // Estado para almacenar los errores que puedan surgir al hacer el registro
    const [ errores, setErrores ] = useState([])

    // Función que se encargará de hacer la petición al servidor para registrar al usuario
    const { registro } = useAuth({middleware: 'guest', url: '/'})

    // Obtener los datos del formulario
    const handleSubmit = async e => {
        e.preventDefault()

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        // Llamar a la función "registro" para enviar los datos y actualizar los errores si los hay
        registro(datos, setErrores)
    }
    
    return (
        <>
          <h1 className="fs-1 fw-bold text-dark text-center">Crea tu Cuenta</h1>
          <p className="text-center">Crea tu cuenta, completa el formulario</p>
           
           {/* Mostrar las alertas de errores si existen */}
          <div className="shadow p-3 mb-2 bg-body rounded mt-3">
              <form
                onSubmit={ handleSubmit }
                noValidate
              >

                {/* Iterar sobre los errores y mostrar una alerta para cada uno */}
                { errores ? errores.map( (error, index) => <Alerta key={ index }>{error}</Alerta> ) : null}

                {/* Campos del formulario */}
                <div className="mb-4 input-group">
                    <label className="fs-6" htmlFor="name">Nombre:</label>
                    <input type="text" id="name" className="form-control mt-2 w-100 p-2" name="name" placeholder="Tu Nombre" ref={nameRef}/>
                </div>

                <div className="mb-4 input-group">
                    <label className="fs-6" htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control mt-2 w-100 p-2" name="email" placeholder="Tu Email" ref={emailRef}/>
                </div>

                <div className="mb-4 input-group">
                    <label className="fs-6" htmlFor="password">Password:</label>
                    <input type="password" id="password" className="form-control mt-2 w-100 p-2" name="password" placeholder="Tu Password" ref={passwordRef}/>
                </div>

                <div className="mb-4 input-group">
                    <label className="fs-6" htmlFor="password_confirmation">Repetir Password:</label>
                    <input type="password" id="password_confirmation" className="form-control mt-2 w-100 p-2" name="password_confirmation" placeholder="Repetir Password" ref={passwordConfirmationRef}/>
                </div>
                
                {/* Botón para enviar el formulario */}
                <input type="submit" value="Crear Cuenta" className="btn btn-primary w-100 mt-2 p-2 text-white fs-5 fw-bold border-0"/>
              </form>

              {/* Enlace para iniciar sesión */}
              <nav className="mt-2 p-2 text-center">
                <Link to="/auth/login">
                    ¿Ya tienes cuenta? Inicia Sesión
                </Link>
              </nav>
          </div>

          
        </>
    )
}

export default Registro
