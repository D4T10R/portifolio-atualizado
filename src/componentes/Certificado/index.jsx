import styled from "styled-components";


const CertificadoEstilo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 1em;
    padding: 0em 1.2em;
    text-align: center;
    overflow-wrap: break-word;  // Faer o <p> quebrar de linha quando ficar maior que a largura da div
    width: 60%;
    height: 250px;
    background: rgba(0, 15, 149, 0.5);;

    img {
        height: 60%;
        width: 100%;
    }

    p {
        font-size: 14px;
        color: var(--cor-titulo-projeto);
    }

`

const Certificado = ({img, titulo}) => {
    return (
        <CertificadoEstilo>
            <img src={img} alt="teste"/>
            <p>{titulo}</p>
        </CertificadoEstilo>

    )

}

export default Certificado;