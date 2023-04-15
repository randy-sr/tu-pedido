import { useEffect } from 'react'
import axiosCliente from "../config/axios" // Importamos nuestra instancia de axios con las configuraciones
import useSWR from 'swr' // Importamos el hook useSWR de la librería SWR
import { useNavigate } from 'react-router-dom' // Importamos el hook useNavigate de react-router-dom

// Creamos nuestro hook personalizado "useAuth" y lo recibimos como parámetro "middleware" y "url"
const useAuth = ({ middleware, url }) => {

    // Obtenemos el token de autenticación del local storage
    const token = localStorage.getItem('AUTH_TOKEN')

    // Usamos el hook useNavigate para manejar la navegación en la app
    const navigate = useNavigate()
    
    // Usamos el hook useSWR para hacer una llamada a la API y obtener los datos del usuario autenticado
    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axiosCliente('/api/user', {
            headers: { 
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    // Función para iniciar sesión
    const login = async(datos, setErrores) => {
        try {
            // Enviamos una petición POST a nuestra API para iniciar sesión
            const { data } = await axiosCliente.post('/api/login', datos)
            // Guardamos el token de autenticación en el local storage
            localStorage.setItem('AUTH_TOKEN', data.token)
            // Borramos cualquier error previo
            setErrores([])
            // Hacemos una nueva llamada a la API para obtener los datos actualizados del usuario
            await mutate() // revalidar la informacion
        } catch (error) {
            // Mostramos los errores en caso de que haya alguno
            setErrores(Object.values(error.response.data.errors))
        }
    }

    // Función para registrar un nuevo usuario
    const registro = async (datos, setErrores) => {
        try {
            // Enviamos una petición POST a nuestra API para registrar un nuevo usuario
            const { data } = await axiosCliente.post('/api/registro', datos)
            // Guardamos el token de autenticación en el local storage
            localStorage.setItem('AUTH_TOKEN', data.token)
            // Borramos cualquier error previo
            setErrores([])
            // Hacemos una nueva llamada a la API para obtener los datos actualizados del usuario
            await mutate()
        } catch (error) {
            // Mostramos los errores en caso de que haya alguno
            setErrores(Object.values(error.response.data.errors))
        }
    }

    // Función para cerrar sesión
    const logout = async () => {
        try {
            // Enviamos una petición POST a nuestra API para cerrar sesión
            await axiosCliente.post('/api/logout', null, {
                headers: { 
                    Authorization: `Bearer ${token}`
                }
            })
            // Borramos el token de autenticación del local storage
            localStorage.removeItem('AUTH_TOKEN')
            // Hacemos una nueva llamada a la API para obtener los datos actualizados del usuario
            await mutate(undefined)
        } catch (error) {
            // Mostramos los errores en caso de que haya alguno
            throw Error(error?.response?.data?.errors)
        }
    }

    // Hook useEffect para redirigir al usuario según el middleware que tenga
    useEffect(() => {
      
        if(middleware === 'guest' && url && user) {
            navigate(url)
        }
        if(middleware === 'guest' && user && user.admin) {
            navigate('/admin')
        }
        if(middleware === 'admin' && user && !user.admin) {
            navigate('/')
        }
        if(middleware === 'auth' && error) {
            navigate('/auth/login')
        }

    }, [user, error])

    return {
        login,
        registro,
        logout,
        user,
        error
    }
    
}

export default useAuth