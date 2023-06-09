import { useState, useEffect } from "react";
import useTienda from "../hooks/useTienda"
import ImagenModal from "../styled-components/imagenModal"
import Modal from "../styled-components/modal";
import ModalImg from "../styled-components/modalImg";
import ModalInfo from "../styled-components/modalInfo";
import { formatearDinero } from "../helpers";
import {  BsDash,BsPlusLg, BsXCircle } from "react-icons/bs";

const ModalProducto = () => {

    const { producto, handleClickModal, handleAgregarPedido, pedido } = useTienda()
    const [ cantidad , setCantidad ]  = useState(1)
    const [ edicion, setEdicion ] = useState(false)

    useEffect(() => {
        if( pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const productoEdicion = pedido.filter( pedidoState => pedidoState.id === producto.id)[0]

            setCantidad(productoEdicion.cantidad)
            setEdicion(true)
        }
    }, [pedido])
    

    return (
        <Modal>
            <ModalImg>
                <ImagenModal src={
                        `/img/${
                            producto.imagen
                        }.jpg`
                    }
                    alt={
                        `Imagen Producto ${
                            producto.nombre
                        }`
                    }
                />
                
            </ModalImg>
            
            <ModalInfo>
                <div className="d-flex justify-content-end" type="button">
                    <button className="btn btn-primary" onClick={ handleClickModal }>
                        <BsXCircle />
                    </button>
                </div>
                
                <h3 className="mt-3">
                    {producto.nombre}
                </h3>

                <p className="mt-3 text-danger fw-bold fs-3">
                    {formatearDinero(producto.precio)}
                </p>

                <div className="d-flex gap-3 mt-3">
                    <button 
                        type="button"
                        className="btn btn-secondary h-75"
                        onClick={ () => {
                            if ( cantidad <= 1 ) return
                            setCantidad( cantidad - 1)
                        }}
                    >
                        <BsDash/>
                    </button>

                    <p className="fs-2 text-dark">{cantidad}</p>

                    <button 
                        type="button"
                        className="btn btn-secondary h-75"
                        onClick={ () => {
                            if ( cantidad >= 5 ) return
                            setCantidad( cantidad + 1)
                        }}
                    >
                        <BsPlusLg />
                    </button>
                </div>

                <button 
                    type="button" 
                    className="btn btn-primary mt-5"
                    onClick={ () => {
                        handleAgregarPedido( {...producto, cantidad} ) 
                        handleClickModal()
                    } }
                >
                    { edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
                </button>
            </ModalInfo>
        </Modal>
    )
}

export default ModalProducto
