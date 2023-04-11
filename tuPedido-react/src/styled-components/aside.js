import styled from "styled-components";

const Aside = styled.aside`
    display: flex;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 420px) {
        /* Estilos a aplicar en pantallas de hasta 414px de ancho */
        flex-direction: column;
        justify-content: center;
    }

`

export default Aside