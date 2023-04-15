// Importa el componente Icono y el hook useTienda
import Icono from "../styled-components/icono";
import useTienda from "../hooks/useTienda";

const Categoria = ( { categoria } ) => {
    
    // Extrae las propiedades necesarias de la categoría
    const { icono, id, nombre } = categoria;

    // Extrae la función handleClickCategoria y la categoría actual del hook useTienda
    const { handleClickCategoria , categoriaActual } = useTienda();

    return (
        
        <div   
            // Utiliza operador ternario para asignar clases CSS condicionalmente según si la categoría actual coincide con la categoría
            className={`${categoriaActual.id === id ? 'bg-warning text-dark' : 'bg-white'} d-flex align-items-center border w-100 p-1 btn btn-outline-warning border`}
            key={id}
            // Asigna la función handleClickCategoria al evento onClick del elemento <div> para manejar los clics en la categoría
            onClick={()=> handleClickCategoria(id)}
        >
            {/* Renderiza el componente Icono con la imagen de icono correspondiente a la categoría */}
            <Icono 
                src={`/icono_${icono}.png`} 
                alt="Imagen de Icono" 
            />

            <p className="mx-4 my-2 fs-5 fw-bold text-center">{nombre}</p>
        </div>
        
    )
}

export default Categoria