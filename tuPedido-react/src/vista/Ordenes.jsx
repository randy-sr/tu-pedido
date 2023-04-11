import useSWR from 'swr'
import axiosCliente from '../config/axios'
import { formatearDinero } from '../helpers'
import useTienda from '../hooks/useTienda'

const Ordenes = () => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => axiosCliente('/api/pedidos', { 
        headers: { 
          Authorization: `Bearer ${token}`
        }
    })

    const { data, error, isLoading } = useSWR('/api/pedidos', fetcher,{refreshInterval: 1000})
    const { handleClickCompletarPedido } = useTienda()

    if( isLoading )  return 'Cargando...'
    
    console.log(data?.data?.data)

    return (
        <div className="container">
            <h1 className="fs-2 fw-5">Ordenes</h1>
            <p className="fs-4 my-5">
                Administra las ordenes desde aqui
            </p>

            <div className="row gap-3">
                {data.data.data.map( pedido => (
                    <div key={pedido.id} className="card p-3 col">
                      <p className=" card-title fs-4 fw-bold text-muted">
                        Contenido del Pedido
                      </p>
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
                        {
                            pedido.cantidad_propina !== 0 ? (
                                <p>
                                    Propina: {''}
                                    <span className="text-success fw-bold">{formatearDinero(pedido.cantidad_propina)}</span>
                                </p>
                            ): null
                        }
                      </div> 

                      <p className="card-text text-muted fw-bold">
                            Cliente : {''}
                            <span className="">{pedido.user.name}</span>
                      </p>

                      <p className="card-text text-primary fw-bold">
                            Total a Pagar : {''}
                            <span className="">{formatearDinero(pedido.total + pedido.cantidad_propina)}</span>
                      </p>

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
