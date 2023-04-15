import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { TiendaProvider } from './context/TiendaProvider'
import router from './router'

// Se utiliza la función `createRoot` de `ReactDOM` para crear el punto de entrada de la aplicación en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Se envuelve la aplicación en los contextos `TiendaProvider` y `HelmetProvider`
  <TiendaProvider>
    {/* Envolvemos la aplicación en el contexto `HelmetProvider`, que provee información de los encabezados */}
    <HelmetProvider>
      {/* Utilizamos el componente `RouterProvider` de react-router-dom, que contiene el router con todas las rutas */}
      <RouterProvider router={router}/>
    </HelmetProvider>  
  </TiendaProvider>  
)
