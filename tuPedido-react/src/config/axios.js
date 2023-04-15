// Importa la biblioteca Axios para hacer las peticiones HTTP
import axios from "axios";

// Crea una instancia de Axios con opciones específicas
const axiosCliente = axios.create({
    // Establece la URL base para todas las solicitudes a través de esta instancia
    // Utiliza una variable de entorno para obtener la URL base desde un archivo de configuración
    // Esta variable se encuentra en el archivo .env.local
    baseURL: import.meta.env.VITE_API_URL,
     // Establece las cabeceras que se deben enviar con cada solicitud
    headers: {
        'Accept': 'application/json', // Indica que el cliente espera recibir una respuesta en formato JSON
        'X-Requested-With': 'XMLHttpRequest'// Identifica la solicitud como una solicitud AJAX
    },
      // Establece si se deben enviar cookies con cada solicitud
    withCredentials: true
})

// Exporta la instancia de Axios como un módulo predeterminado para que pueda ser utilizada en otros archivos
export default axiosCliente