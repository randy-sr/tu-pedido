import { formatearDinero } from "../helpers"
import useTienda from "../hooks/useTienda"
import useAuth from "../hooks/useAuth"
import Aside2 from "../styled-components/aside2"
import ResumenProductos from "./ResumenProductos"
import styled from "styled-components"


const ProductosResumen = () => {


    const { pedido, total, cantidadPropina, handleSumbitNuevaOrden , display} = useTienda()
    const { logout, user } = useAuth({middleware: 'auth'})
    // const comprobarPedido = () => pedido.length === 0
    const comprobarPedido = () => pedido.length === 0 && cantidadPropina === 0

    const handleSubmit = e => {
      e.preventDefault()
      handleSumbitNuevaOrden(logout)
    }

    console.log(display)

    return (
      <Aside2 display={display}>
        <div className="fs-3 text-center mt-2 fw-bold">
          Mi Pedido
        </div>
        
        <p className="d-flex justify-content-center">Hola  {user?.name}</p>
        <p className="fs-5 my-4 fw-light">Aqui podrás ver el resumen y total de tu pedido</p>
        
        <div>
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