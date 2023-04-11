import useSWR from 'swr'
import axiosCliente from '../config/axios'
import Producto from '../components/Producto'
import Grid from '../styled-components/grid'

const Productos = () => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => axiosCliente('/api/productos', {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    }).then(datos => datos.data)

    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {refreshInterval: 10000})

    if (isLoading) return 'Cargando...'

    console.log(data.data)

    return (
      <div>
          <h1 className="fs-2 fw-5">Productos</h1>
          <p className="fs-4 my-5">
              Maneja la disponibilidad de los productos
          </p>

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