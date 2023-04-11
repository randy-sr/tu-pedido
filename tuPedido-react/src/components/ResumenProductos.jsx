import useTienda from "../hooks/useTienda";
import { formatearDinero } from "../helpers";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

const ResumenProductos = ({producto}) => {

    const {id, nombre, precio, cantidad} = producto
    const { handleEditarCantidad, handleEliminarProductoPedido } = useTienda()


    return(
        <div className="card shadow my-5 p-3 bg-white">
            <div className="space-y-2">
                <p className="fs-4 fw-bold">
                    {nombre}</p>
                <p className="fs-5 fw-bold">Cantidad: {cantidad}</p>
                <p className="fs-5 fw-bold text-warning">
                    Precio: {formatearDinero(precio)}
                </p>
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
