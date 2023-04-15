import { Link } from 'react-router-dom'
// Importa el hook personalizado useAuth
import useAuth from '../hooks/useAuth'


const AdminSidebar = () => {
    
  // Usa el hook useAuth para obtener la función logout
    const { logout } = useAuth({middleware: 'auth'})
    
    // Retorna el HTML que define la barra lateral del admin
    return (
      <aside className="w-25">
          {/*logo de la aplicación */}
          <div className="p-4 d-flex justify-content-center">
            <img src="/logo-nuevo.png" alt="Imagen Logo" className="w-50" />
          </div>

          {/* Navegación con enlaces a diferentes secciones de la aplicación */}
          <nav className='d-flex flex-column p-5'>
            <Link to="/admin" className="fw-bold fs-3 text-decoration-none">Ordenes</Link>
            <Link to="/admin/productos" className="fw-bold fs-3 text-decoration-none">Productos</Link>
          </nav>

          {/* Botón "Cerrar Sesión" */}
          <div className="my-4 px-4">
              <button
                  type="button"
                  className="btn btn-danger text-center w-100 p-3 fw-bold"
                  onClick={logout}
              >
                  Cerrar Sesión
              </button>
          </div>
      </aside>
    )
}

export default AdminSidebar