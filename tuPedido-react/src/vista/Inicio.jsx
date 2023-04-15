import useSWR from 'swr'
import Producto from "../components/Producto"
import Grid from "../styled-components/grid"
import useTienda from "../hooks/useTienda"
import axiosCliente from '../config/axios'
import { Helmet } from 'react-helmet-async'
import useAuth from "../hooks/useAuth"

const Inicio = () => {
    // Obtenemos la categoría actual y la función para abrir el segundo modal desde nuestro hook personalizado useTienda
    const { categoriaActual, handleClickModal2 } = useTienda()

    // Obtenemos la función logout desde nuestro hook personalizado useAuth
    const { logout } = useAuth({middleware: 'auth'})
    
    // Obtenemos el token de autenticación desde el almacenamiento local
    const token = localStorage.getItem('AUTH_TOKEN')

    // Configuramos el fetcher para obtener los productos desde nuestra API
    const fetcher = () => axiosCliente('/api/productos', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then( data => data.data)

    // Utilizamos el hook useSWR para hacer fetching de los productos cada 1 
    //segundo y mostrar un indicador de carga mientras tanto
    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
       refreshInterval: 1000
    })

    // Si se está cargando, mostramos un mensaje de carga
    if( isLoading ) return 'Cargando'

    // Filtramos los productos según la categoría actual
    const productos = data.data.filter( producto => producto.categoria_id === categoriaActual.id)

    // Renderizamos los productos y los botones para cancelar el pedido y agregar propina
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