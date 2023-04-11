import useSWR from 'swr'
import Producto from "../components/Producto"
//import { productos as data } from "../data/productos" 
import Grid from "../styled-components/grid"
import useTienda from "../hooks/useTienda"
import axiosCliente from '../config/axios'
import { Helmet } from 'react-helmet-async'
import useAuth from "../hooks/useAuth"

const Inicio = () => {

    const { categoriaActual, handleClickModal2 } = useTienda()
    const { logout } = useAuth({middleware: 'auth'})

    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => axiosCliente('/api/productos', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then( data => data.data)


    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
       refreshInterval: 1000
    })

    if( isLoading ) return 'Cargando'


    const productos = data.data.filter( producto => producto.categoria_id === categoriaActual.id)


    return (
      <>
        <Helmet>
            <title>Tienda</title>
            <meta name="description" content="Comienza a preparar tu pedido."/>
            <link rel="canonical" href="/" />
        </Helmet>

        <div className="d-flex justify-content-between my-5">
          
          <button
              type="button"
              className="btn btn-danger text-center p-3 fw-bold text-uppercase"
              onClick={logout}
          >
              Cancelar Pedido
          </button>
          

          <button 
            type="button"
            className="btn btn-success p-3 fw-bold text-uppercase"
            onClick={ handleClickModal2 }
          >
            Agregar Propina
          </button>

        </div>
        <Grid>
            {
             productos.map( producto => (
                <Producto 
                  key={producto.id}
                  producto={producto}
                  botonAgregar={true}
                />
              ))
            }
        </Grid>
      </>
    )
}

export default Inicio