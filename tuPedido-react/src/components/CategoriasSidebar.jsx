import useTienda from "../hooks/useTienda"
import Aside from "../styled-components/aside"
import Categoria from "./Categoria"

const CategoriasSidebar = () => {

    const logo = "logo-nuevo.png"
   
    // Obtener la lista de categorías de la tienda desde el estado global
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
                
                {/* Mostrar la lista de categorías */}
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

export default CategoriasSidebar