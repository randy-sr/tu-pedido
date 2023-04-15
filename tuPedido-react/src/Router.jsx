import { createBrowserRouter } from "react-router-dom";
import AdminLayouts from "./layouts/AdminLayouts";
import { AuthLayout } from "./layouts/AuthLayouts";
import Inicio from "./vista/Inicio";
import Login from "./vista/Login";
import Ordenes from "./vista/Ordenes";
import Productos from "./vista/Productos";
import Registro from "./vista/Registro";
import Layout from "./layouts/Layout";

// Se crea el router utilizando la función `createBrowserRouter`
const router = createBrowserRouter([
    { 
        // Ruta principal de la aplicación. Al visitar la ruta principal se visualizará el componente <Layout />
        path: '/',
        element: <Layout />,
        children: [
            {
                // Indica que este es el componente por defecto a visualizar
                index: true,
                element: <Inicio />
            }
        ]

    },
    { 
        // Ruta de autenticación. Al visitar la ruta '/auth' se visualizará el componente <AuthLayout />
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { 
                // Ruta para visualizar el componente <Login />
                path: '/auth/login',
                element: <Login />
            },
            { 
                // Ruta para visualizar el componente <Registro />
                path: '/auth/registro',
                element: <Registro />
            },
        ]
    },
    {
        // Ruta para administración. Al visitar la ruta '/admin' se visualizará el componente <AdminLayouts />
        path: '/admin',
        element: <AdminLayouts />,
        children: [
            {
                // Indica que este es el componente por defecto a visualizar
                index: true,
                element: <Ordenes />
            },
            {
                // Ruta para visualizar el componente <Productos />
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    }
])


export default router