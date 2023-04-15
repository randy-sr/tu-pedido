import { Outlet } from "react-router-dom"
import 'animate.css';
import { Link } from "react-router-dom";

const logo = "/logo-nuevo.png"

// El componente AuthLayouts es el encargado de renderizar la estructura de la página de autenticación,
// la cual incluye una barra de navegación y el contenido principal de la página.
export const AuthLayout = () => {
    return (
      <>
        {/*Barra de navegación*/}
        <nav className="navbar navbar-white bg-white sticky-top d-flex justify-content-between mx-3 align-items-center">
            <div className="w-25">
                {/*Logo*/}
                <img 
                    src="/burrito.png" 
                    alt="Logo" 
                    className="w-25"
                />
            </div>
            {/*Botones de acción*/}
            <div className="d-flex justify-content-around  w-25 align-items-center">
                {/* Enlace para registrarse */}
                <Link to="/auth/registro" className="text-decoration-none fs-5">
                    Registrarse
                </Link>
                {/* Botón de demo */}
                <button type="button" className="btn btn-secondary p-3">Prueba el Demo</button>
            </div>
        </nav>
        {/* Contenido principal */}
        <main className="mw-100 m-auto mt-5 m-3 d-flex align-items-center justify-content-center">
            <img 
                src={logo}
                alt="imagen logotipo"
                className="animate__animated animate__backInLeft animate__slow"
            />
            {/* Rutas hijas */}
            <div className="w-100% p-3">
                <Outlet />
            </div>
        </main>
      </>  
    )
}