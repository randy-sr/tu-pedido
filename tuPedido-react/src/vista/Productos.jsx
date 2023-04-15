import useSWR from 'swr'
import axiosCliente from '../config/axios'
import Producto from '../components/Producto'
import Grid from '../styled-components/grid'

const Productos = () => {

    const token = localStorage.getItem('AUTH_TOKEN')

    // Definimos la función fetcher que se encargará de hacer la petición al endpoint /api/productos
    // Pasamos el token en los headers de la petición
    const fetcher = () => axiosCliente('/api/productos', {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    }).then(datos => datos.data)

    // Usamos SWR para hacer el fetch y cachear los resultados
    // Pasamos la función fetcher y la ruta del endpoint como parámetros
    // También configuramos un refreshInterval de 10 segundos
    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {refreshInterval: 10000})

    // Si isLoading es true, mostramos un mensaje de "Cargando..."
    if (isLoading) return 'Cargando...'

    return (
      <div>
          <h1 className="fs-2 fw-5">Productos</h1>
          <p className="fs-4 my-5">
              Maneja la disponibilidad de los productos
          </p>
          
          {/* Mostramos los productos usando el componente Producto y el Grid */}
          <Grid>
            {
             data.data.map( producto => (
                <Producto 
                  key={producto.id}
                  producto={producto}
                  botonDisponible={true}
                />
              ))
            }
          </Grid>
      </div>
    )
}

export default Productos