import { formatearDinero } from "../helpers";
import useTienda from "../hooks/useTienda";

const Producto = ( { producto, botonAgregar = false, botonDisponible = false }) => {

    const { nombre, imagen, precio} = producto;
    const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useTienda()

    return (
      <div className="card h-100">
        {/* <div className="border p-2 shadow bg-white"></div> */}
        <img 
          src={`/img/${imagen}.jpg`}
          alt={`imagen ${nombre}`} 
          className="w-100 h-75 card-img-top"
        />

        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{nombre}</h3>
          <p className="card-text fs-3 fw-bold text-danger">{formatearDinero(precio)}</p>
          { botonAgregar && (
            <button 
                type="button"
                className="btn btn-primary text-uppercase fw-bold"
                onClick={ () => {
                  handleClickModal() 
                  handleSetProducto( producto )
                }}
            >
              Agregar
            </button>
          )}

          {  botonDisponible && (
            <button 
              type="button"
              className="btn btn-primary text-uppercase fw-bold"
              onClick={() => handleClickProductoAgotado(producto.id)}
            >
              Producto Agotado
            </button>
          )}
        </div>
      </div>
    )
}

export default Producto