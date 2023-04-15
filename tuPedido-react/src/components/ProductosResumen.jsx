import { formatearDinero } from "../helpers"
import useTienda from "../hooks/useTienda"
import useAuth from "../hooks/useAuth"
import Aside2 from "../styled-components/aside2"
import ResumenProductos from "./ResumenProductos"


const ProductosResumen = () => {

    // Obtiene el estado de la tienda y las funciones necesarias para manipularla
    const { pedido, total, cantidadPropina, handleSumbitNuevaOrden , display} = useTienda()
    // Obtiene el estado de autenticación y las funciones necesarias para manipularla
    const { logout, user } = useAuth({middleware: 'auth'})
    // Función que comprueba si el pedido está vacío o no
    const comprobarPedido = () => pedido.length === 0 && cantidadPropina === 0

    // Función que se ejecuta cuando se envía el formulario de confirmación del pedido
    const handleSubmit = e => {
      e.preventDefault()
      handleSumbitNuevaOrden(logout)
    }

    return (
      <Aside2 display={display}>
        <div className="fs-3 text-center mt-2 fw-bold">
          Mi Pedido
        </div>
        
        <p className="d-flex justify-content-center">Hola  {user?.name}</p>
        <p className="fs-5 my-4 fw-light">Aqui podrás ver el resumen y total de tu pedido</p>
        
        <div>
          {/* Si no hay productos en el pedido, muestra un mensaje */}
          {pedido.length === 0 ? (
            <p className="fs-3 text-center">
              No tienes pedidos aún
            </p>
          ) : (
            pedido.map( producto => (
              <ResumenProductos 
                  producto={producto}
                  key={producto.id}
              />
            ))
          )}
        </div>

        <p className="fs-4 mt-4">
          Propina: {''}
          { formatearDinero(cantidadPropina) }
        </p>

        <p className="fs-4 mt-4">
          Total: {''}
          { formatearDinero(total + cantidadPropina) }
        </p>

        
        <form 
          className="w-full"
          onSubmit={ handleSubmit }
        >
            <div className="mt-3">
              <input 
                type="submit" 
                className="btn btn-success text-uppercase fw-bold w-100"
                value="Confirmar Pedido"
                disabled={ comprobarPedido() }
              />
            </div>
        </form>

      </Aside2>
    )
}

export default ProductosResumen