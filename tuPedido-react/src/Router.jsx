import { createBrowserRouter } from "react-router-dom";
import AdminLayouts from "./layouts/AdminLayouts";
import { AuthLayout } from "./layouts/AuthLayouts";
//import Layout from "./layouts/Layout";
import LayoutEdition from "./layouts/LayoutEdition";
import Inicio from "./vista/Inicio";
import Login from "./vista/Login";
import Ordenes from "./vista/Ordenes";
import Productos from "./vista/Productos";
import Registro from "./vista/Registro";

const Router = createBrowserRouter([
    { 
        path: '/',
        // element: <Layout />,
        element: <LayoutEdition />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]

    },
    { 
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { 
                path: '/auth/login',
                element: <Login />
            },
            { 
                path: '/auth/registro',
                element: <Registro />
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayouts />,
        children: [
            {
                index: true,
                element: <Ordenes />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    }
])


export default Router