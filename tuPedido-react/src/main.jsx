
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { TiendaProvider } from './context/TiendaProvider'
import Router from './Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <TiendaProvider>
    <HelmetProvider>
      <RouterProvider router={Router}/>
    </HelmetProvider>  
  </TiendaProvider>  
)
