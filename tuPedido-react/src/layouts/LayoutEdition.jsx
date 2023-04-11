import { Outlet } from "react-router-dom"
import { useState } from 'react'
//import CategoriasSidebar from "../components/CategoriasSidebar"
import ProductosResumen from "../components/ProductosResumen"
import Main from "../styled-components/main"
import useTienda from "../hooks/useTienda"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import useAuth from "../hooks/useAuth"

import ModalProducto from "../components/ModalProducto"
import ModalPropina from "../components/ModalPropina"
import CategoriasSidebarEdition from "../components/CategoriasSidebarEdition"

import { BsBasket } from "react-icons/bs";



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


Modal.setAppElement('#root')

const LayoutEdition = () => {


    useAuth({middleware: 'auth'})

    const { modal, modal2, setDisplay, display} = useTienda()
  

    const handleToggle = () => {
      setDisplay(!display)
    }

    return (
      <>
        <div className="d-flex">

          <Main className="w-50 flex-grow-1 p-3">
            <div className="d-flex justify-content-end d-xl-none">
                <button 
                  className="btn btn-warning"
                  onClick={ handleToggle }
                >
                   <BsBasket />
                </button>
            </div>
            
            <CategoriasSidebarEdition />

            <Outlet />
          </Main>
          
          
          <ProductosResumen/>
           
          
        </div>

        
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProducto/>
        </Modal>

        <Modal
          isOpen={modal2}
          style={customStyles}
        >
          <ModalPropina/>
        </Modal>

        <ToastContainer />
        
      </>
    )
}

export default LayoutEdition