import { useContext} from 'react'
import TiendaContext  from '../context/TiendaProvider'

// Este hook personalizado sirve para simplificar el uso del contexto 
//de Tienda en los componentes
const useTienda = () => {
     // Aquí se utiliza el hook useContext de React para acceder al contexto de Tienda
    // Esto permite acceder a las variables y funciones almacenadas en el contexto sin necesidad de pasarlas como props
    return useContext(TiendaContext)
}

export default useTienda