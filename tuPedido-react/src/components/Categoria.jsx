import Icono from "../styled-components/icono";
import useTienda from "../hooks/useTienda";

const Categoria = ( { categoria } ) => {

    const { icono, id, nombre } = categoria;
    const { handleClickCategoria , categoriaActual } = useTienda();

    return (
        
        <div   
            className={`${categoriaActual.id === id ? 'bg-warning text-dark' : 'bg-white'} d-flex align-items-center border w-100 p-1 btn btn-outline-warning border`}
            key={id}
            onClick={()=> handleClickCategoria(id)}
        >
            <Icono 
                src={`/icono_${icono}.png`} 
                alt="Imagen de Icono" 
            />

            <p className="mx-4 my-2 fs-5 fw-bold text-center">{nombre}</p>
        </div>
        
    )
}

export default Categoria