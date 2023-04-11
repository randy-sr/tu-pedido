import useTienda from "../hooks/useTienda"
import Aside from "../styled-components/aside"
import Categoria from "./Categoria"

const CategoriasSidebarEdition = () => {

    const logo = "logo-nuevo.png"
    const { categorias } = useTienda()

    return (
        <Aside>
                <div className="p-4 d-flex justify-content-center">
                    <img
                        className="w-50" 
                        src={logo} 
                        alt="Imagen Logo" 
                    />
                </div>

                <div className="mt-5 d-flex flex-column flex-sm-row">
                    {
                        categorias.map( categoria => (
                            <Categoria key={categoria.id} categoria={categoria}/>
                        ))
                    }
                </div>
        </Aside>
    )
}

export default CategoriasSidebarEdition