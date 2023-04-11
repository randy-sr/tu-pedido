import { Outlet } from "react-router-dom"
import AdminSidebar from "../components/AdminSidebar"
import Main from "../styled-components/main"
import useAuth from "../hooks/useAuth"

const AdminLayouts = () => {
    
    useAuth({middleware: 'admin'})
    
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