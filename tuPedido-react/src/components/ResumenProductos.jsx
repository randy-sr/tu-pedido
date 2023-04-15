import useTienda from "../hooks/useTienda";
import { formatearDinero } from "../helpers";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

const ResumenProductos = ({producto}) => {
    
    // Destructura el objeto producto
    const {id, nombre, precio, cantidad} = producto

     // Usamos el hook useTienda para obtener las funciones de editar cantidad y eliminar producto del pedido
    const { handleEditarCantidad, handleEliminarProductoPedido } = useTienda()


    return(
        <div className="card shadow my-5 p-3 bg-white">
            <div className="space-y-2">
                {/* Mostramos el nombre del producto */}
                <p className="fs-4 fw-bold">{nombre}</p>
                {/* Mostramos la cantidad del producto */}
                <p className="fs-5 fw-bold">Cantidad: {cantidad}</p>
                {/* Mostramos el precio del producto */}
                <p className="fs-5 fw-bold text-warning">
                    Precio: {formatearDinero(precio)}
                </p>
                {/* Mostramos el subtotal (precio x cantidad) */}
                <p className="fs-5 text-secondary-dark">
                    Subtotal: { formatearDinero(precio * cantidad)}
                </p>
            </div>

            <div className="d-flex justify-content-between">
                <button 
                    className="btn btn-primary"
                    onClick={ () => handleEditarCantidad(id) }
                >
                    <BsFillPencilFill />
                </button>
                
                <button 
                    className="btn btn-danger"
                    onClick={() => handleEliminarProductoPedido(id)}
                >
                    <BsFillTrash3Fill />
                </button>
            </div>
        </div>
    )
}

export default ResumenProductos
