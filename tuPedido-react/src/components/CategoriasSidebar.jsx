import useTienda from "../hooks/useTienda"
import Aside from "../styled-components/aside"
import Categoria from "./Categoria"
import useAuth from "../hooks/useAuth"

const CategoriasSidebar = () => {

    const logo = "logo-nuevo.png"
    const { categorias } = useTienda()
    const { logout, user } = useAuth({middleware: 'auth'})

    return (
        <Aside>
                <div className="p-4 d-flex justify-content-center">
                    <img
                        className="w-50" 
                        src={logo} 
                        alt="Imagen Logo" 
                    />
                </div>

                <p className="d-flex justify-content-center">Hola  {user?.name}</p>

                <div className="mt-5">
                    {
                        categorias.map( categoria => (
                            <Categoria key={categoria.id} categoria={categoria}/>
                        ))
                    }
                </div>

                <div className="my-4 px-4">
                    <button
                        type="button"
                        className="btn btn-danger text-center w-100 p-3 fw-bold"
                        onClick={logout}
                    >
                        Cancelar Pedido
                    </button>
                </div>
        </Aside>
    )
}

export default CategoriasSidebar