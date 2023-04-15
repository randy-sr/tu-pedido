import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axiosCliente from '../config/axios'

// Crear el contexto
const TiendaContext = createContext()

// Crear el proveedor
const TiendaProvider = ( { children } ) => {

    // Estados del componente
    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ modal2, setModal2 ] = useState(false)
    const [ producto, setProducto] = useState({})
    const [ pedido, setPedido] = useState([])
    const [ total, setTotal] = useState(0)
    const [ cantidadPropina, setCantidadPropina ] = useState(0)

    const [display, setDisplay] = useState('none')
 
    // Calcular el total del pedido
    useEffect(() => {
        const nuevoTotal = pedido.reduce( (total, producto) =>  (producto.precio * producto.cantidad
        ) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])

    // Obtener las categorías disponibles
    const obtenerCategorias = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await axiosCliente('/api/categorias', {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            setCategorias(data.data)
            setCategoriaActual(data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    // Llamar a la función para obtener las categorías cuando se monta el componente
    useEffect(() => {
      obtenerCategorias()
    }, [])
    
    // Manejar el click en una categoría
    const handleClickCategoria = (id) => {
        const categoria = categorias.filter( categoria => categoria.id === id)[0]
        console.log(categoria)
        setCategoriaActual(categoria)
    }

    // Manejar el estado del modal del producto
    const handleClickModal = () => {
        setModal(!modal)
    }

    // Manejar el estado del modal de la pripina
    const handleClickModal2 = () => {
        setModal2(!modal2)
    }

    // Establecer el producto actual para el modal
    const handleSetProducto = producto => {
        setProducto(producto)
    }

    // Añadir un producto al pedido o actualizar su cantidad si ya está en el pedido
    const handleAgregarPedido = ({categoria_id,...producto}) => {
        
        if( pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id 
            ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
    }

    // Añadir la cantidad de propina al pedido
    const handleAgregarPropina = (cantidadPropina) => {
        setCantidadPropina(cantidadPropina)
        console.log(cantidadPropina)
        toast.success('Propina Agregada')
    }

    // Editar la cantidad de un producto en el pedido
    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    // Función para eliminar un producto del pedido
    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.error('Eliminado del Pedido')
    }

    // Función para enviar la nueva orden al servidor
    const handleSumbitNuevaOrden = async ( logout ) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await axiosCliente.post('/api/pedidos', 
            {
                total,
                productos: pedido.map( producto => {
                    return {
                        id: producto.id,
                        cantidad: producto.cantidad,
                    }
                }),
                cantidad_propina: cantidadPropina
            }, 
            {
                headers: { 
                    Authorization: `Bearer ${token}`
                }
            })

            // Mostrar un mensaje de éxito si todo va bien
            toast.success(data.message)

            // Vaciar el pedido después de 1 segundo
            setTimeout(() => {
                setPedido([])
            }, 1000);

            // Cerrar sesion del usuario después de 3 segundos
            setTimeout(() => {
                localStorage.removeItem('AUTH_TOKEN')
                logout()
            }, 3000);

        } catch (error) {
            console.log(error)
        }
    }

    // Función para completar un pedido
    const handleClickCompletarPedido = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await axiosCliente.put(`/api/pedidos/${id}`, null, {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
        // Mostrar un mensaje de éxito si todo va bien
        toast.success('Pedido Facturado')
    }

    // Función para marcar un producto como agotado
    const handleClickProductoAgotado = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await axiosCliente.put(`/api/productos/${id}`, null, {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <TiendaContext.Provider
            value={ {
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                modal2,
                handleClickModal,
                handleClickModal2,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                handleAgregarPropina,
                cantidadPropina,
                handleSumbitNuevaOrden,
                handleClickCompletarPedido,
                handleClickProductoAgotado,
                display,
                setDisplay
            } }
        >{ children }</TiendaContext.Provider>
    )
}

export {TiendaProvider}

export default TiendaContext