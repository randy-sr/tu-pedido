import styled from "styled-components"

const ModalInfo = styled.div`
    min-width: 20vw;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 450px) {
        /* Estilos a aplicar en pantallas de hasta 450px de ancho */
        width: 150px;
        height: 200px;
    }
`

export default ModalInfo 