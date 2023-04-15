import { Outlet } from "react-router-dom"
import ProductosResumen from "../components/ProductosResumen"
import Main from "../styled-components/main"
import useTienda from "../hooks/useTienda"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import useAuth from "../hooks/useAuth"

import ModalProducto from "../components/ModalProducto"
import ModalPropina from "../components/ModalPropina"

import { BsBasket } from "react-icons/bs";
import CategoriasSidebar from "../components/CategoriasSidebar"


// Estilos personalizados para el modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Le decimos a React que el elemento base de nuestra aplicación es el #root
Modal.setAppElement('#root')

const Layout = () => {

    // Verificamos si el usuario está autenticado
    useAuth({middleware: 'auth'})
    
    // Obtenemos variables y funciones desde nuestro hook personalizado
    const { modal, modal2, setDisplay, display} = useTienda()
  
    // Función para mostrar/ocultar el menú lateral
    const handleToggle = () => {
      setDisplay(!display)
    }

    return (
      <>
        <div className="d-flex">
          {/* Componente para la parte principal de la página */}
          <Main className="w-50 flex-grow-1 p-3">
             {/* Botón para mostrar/ocultar el menú lateral en pantallas pequeñas */}
            <div className="d-flex justify-content-end d-xl-none">
                <button 
                  className="btn btn-warning"
                  onClick={ handleToggle }
                >
                   <BsBasket />
                </button>
            </div>
            
            {/* Componente para el menú lateral */}
            <CategoriasSidebar />
            
            {/* Componente para mostrar el contenido de la página */}
            <Outlet />
          </Main>

          {/* Componente para mostrar los productos seleccionados */}
          <ProductosResumen/>

        </div>

        {/* Modal para mostrar los detalles de un producto */}
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProducto/>
        </Modal>

        {/* Modal para mostrar la propina */}
        <Modal
          isOpen={modal2}
          style={customStyles}
        >
          <ModalPropina/>
        </Modal>

        {/* Componente para mostrar las notificaciones */}
        <ToastContainer />
        
      </>
    )
}

export default Layout