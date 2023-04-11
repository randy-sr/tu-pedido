import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'


const Login = () => {

    const emailRef = createRef()
    const passwordRef = createRef()

    const [ errores, setErrores ] = useState([])
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    const handleSubmit = async e => {
        e.preventDefault()

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        login(datos, setErrores)
    }

    return (
        <>
          <h1 className="fs-1 fw-bold text-dark text-center">Iniciar Sesión</h1>
          <p className="text-center">Entra y pide un room service</p>

          <div className="shadow p-3 mb-2 bg-body rounded mt-3">
              <form
                    onSubmit={ handleSubmit }
                    noValidate
              >

                    { errores ? errores.map( (error, index) => <Alerta key={ index }>{error}</Alerta> ) : null}

                <div className="mb-4 input-group">
                    <label className="fs-6" htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control mt-2 w-100 p-2" name="email" placeholder="Tu Email" ref={emailRef}/>
                </div>

                <div className="mb-4 input-group">
                    <label className="fs-6" htmlFor="password">Password:</label>
                    <input type="password" id="password" className="form-control mt-2 w-100 p-2" name="password" placeholder="Tu Password" ref={passwordRef}/>
                </div>
                <input type="submit" value="Inicia Sesión" className="btn btn-primary w-100 mt-2 p-2 text-white fs-5 fw-bold border-0"/>
              </form>
              <nav className="mt-2 p-2 text-center">
                <Link to="/auth/registro">
                    ¿Aun no te has registrado? Registrate
                </Link>
              </nav>
          </div>

          
        </>
    )
}


export default Login