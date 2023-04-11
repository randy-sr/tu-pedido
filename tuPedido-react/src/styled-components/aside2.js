import styled from "styled-components";

const Aside2 = styled.aside`
    width: 300px;
    height: 100vh;
    overflow-y: scroll;
    padding: 1.25rem;

    @media only screen and (max-width: 450px) {
        /* Estilos a aplicar en pantallas de hasta 450px de ancho */
        display: ${props => props.display || 'none'};
        position: ${props => props.position || 'absolute'};
        margin-top: ${props => props.marginTop || '60px'};
        background-color: ${props => props.backgroundColor || '#ff6961'};
        width: ${props => props.width || '100%'};
    }

   

`

export default Aside2