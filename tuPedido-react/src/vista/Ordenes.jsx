import useSWR from 'swr'
import axiosCliente from '../config/axios'
import { formatearDinero } from '../helpers'
import useTienda from '../hooks/useTienda'

const Ordenes = () => {

    // Obtenemos el token almacenado en el localStorage
    const token = localStorage.getItem('AUTH_TOKEN')
     // Función que se encarga de hacer la petición al endpoint '/api/pedidos' con el token de autenticación en los headers
    const fetcher = () => axiosCliente('/api/pedidos', { 
        headers: { 
          Authorization: `Bearer ${token}`
        }
    })

    // Usamos useSWR para manejar el estado de la petición al endpoint '/api/pedidos'
    const { data, error, isLoading } = useSWR('/api/pedidos', fetcher,{refreshInterval: 1000})

    // Obtenemos la función handleClickCompletarPedido del hook useTienda
    const { handleClickCompletarPedido } = useTienda()

    // Si isLoading es true, retornamos un mensaje de carga
    if( isLoading )  return 'Cargando...'
    

    return (
        <div className="container">
            <h1 className="fs-2 fw-5">Ordenes</h1>
            <p className="fs-4 my-5">
                Administra las ordenes desde aqui
            </p>

            <div className="row gap-3">
                {/* Recorremos los datos obtenidos de la petición y creamos una card por cada pedido */}
                {data.data.data.map( pedido => (
                    <div key={pedido.id} className="card p-3 col">
                        <p className=" card-title fs-4 fw-bold text-muted">
                            Contenido del Pedido
                        </p>
                        {/* Recorremos los productos de cada pedido y mostramos su información */}
                        {pedido.productos.map( producto => (
                            <div key={producto.id} className="card-body border-bottom">
                                <p className="fs-6">ID:{producto.id}</p>
                                <p className="fs-6">{producto.nombre}</p>
                                <p>
                                    Cantidad: {''}
                                    <span className="fw-bold">{producto.pivot.cantidad}</span>
                                </p>
                                
                            </div>
                        ))}
                        
                        <div className=""> 
                            {/* Si la cantidad de propina es diferente de cero, la mostramos */}
                            {
                                pedido.cantidad_propina !== 0 ? (
                                    <p>
                                        Propina: {''}
                                        <span className="text-success fw-bold">{formatearDinero(pedido.cantidad_propina)}</span>
                                    </p>
                                ): null
                            }
                        </div> 
                        
                        {/* Mostramos el nombre del cliente y el total a pagar */}
                        <p className="card-text text-muted fw-bold">
                                Cliente : {''}
                                <span className="">{pedido.user.name}</span>
                        </p>

                        <p className="card-text text-primary fw-bold">
                                Total a Pagar : {''}
                                <span className="">{formatearDinero(pedido.total + pedido.cantidad_propina)}</span>
                        </p>
                        
                        {/* Botón para completar el pedido */}
                        <button
                            type="button" 
                            className="btn btn-success text-uppercase fw-bold w-100"
                            onClick={() => handleClickCompletarPedido(pedido.id)}
                        >Completar</button>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default Ordenes
