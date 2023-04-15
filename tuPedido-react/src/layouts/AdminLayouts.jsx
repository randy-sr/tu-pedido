import { Outlet } from "react-router-dom"
import AdminSidebar from "../components/AdminSidebar"
import Main from "../styled-components/main"
import useAuth from "../hooks/useAuth"

const AdminLayouts = () => {
    // Se utiliza el hook personalizado useAuth para validar la autenticación y los permisos del usuario
    useAuth({middleware: 'admin'})
    
    // El componente AdminLayouts renderiza el componente AdminSidebar y el componente Outlet,
  // que muestra el contenido dinámico de las rutas hijas del router que coincidan con la ruta padre.
    return (
      <div className="d-flex">
          <AdminSidebar />

          <Main className="w-50 flex-grow-1 p-3">
          <Outlet />
          </Main>
      </div>
    )
}

export default AdminLayouts