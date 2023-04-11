import styled from "styled-components"

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media only screen and (max-width: 420px) {
        /* Estilos a aplicar en pantallas de hasta 420px de ancho */
        
        grid-template-columns: 1fr;

    }

    @media only screen and (max-width: 850px) {
        /* Estilos a aplicar en pantallas de hasta 850px de ancho */
        
        grid-template-columns: repeat(2, 1fr);

    }
`

export default Grid