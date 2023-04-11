import styled from "styled-components";

const ImagenModal = styled.img`
    width: 300px;
    height: 400px;

    @media only screen and (max-width: 450px) {
        /* Estilos a aplicar en pantallas de hasta 450px de ancho */
        width: 200px;
        height: 300px;
    }
`

export default ImagenModal