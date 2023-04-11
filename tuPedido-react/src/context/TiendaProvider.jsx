import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axiosCliente from '../config/axios'


const TiendaContext = createContext()

const TiendaProvider = ( { children } ) => {

    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ modal2, setModal2 ] = useState(false)
    const [ producto, setProducto] = useState({})
    const [ pedido, setPedido] = useState([])
    const [ total, setTotal] = useState(0)
    const [ cantidadPropina, setCantidadPropina ] = useState(0)

    const [display, setDisplay] = useState('none')
 

    useEffect(() => {
        const nuevoTotal = pedido.reduce( (total, producto) =>  (producto.precio * producto.cantidad
        ) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])

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

    useEffect(() => {
      obtenerCategorias()
    }, [])
    

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter( categoria => categoria.id === id)[0]
        console.log(categoria)
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleClickModal2 = () => {
        setModal2(!modal2)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

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

    const handleAgregarPropina = (cantidadPropina) => {
        setCantidadPropina(cantidadPropina)
        console.log(cantidadPropina)
        toast.success('Propina Agregada')
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.error('Eliminado del Pedido')
    }

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

            toast.success(data.message)
            setTimeout(() => {
                setPedido([])
            }, 1000);

            // Cerrar sesion del usuario
            setTimeout(() => {
                localStorage.removeItem('AUTH_TOKEN')
                logout()
            }, 3000);

        } catch (error) {
            console.log(error)
        }
    }

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
        toast.success('Pedido Facturado')
    }

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