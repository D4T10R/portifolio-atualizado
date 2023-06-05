import styled from "styled-components";


const CertificadoEstilo = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2em;
    width: 60%;
    height: 250px;
    background: rgba(0, 15, 149, 0.5);;

    a {
        text-align: center;
        overflow-wrap: break-word;  // Faer o <p> quebrar de linha quando ficar maior que a largura da div
        padding: 0em 1.2em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 1em;
        
        img {
            height: 45%;
            width: 100%;
        }
   
        p {
            font-size: 14px;
            min-height: 25%;
            color: var(--cor-titulo-projeto);
        }
    }
    
    


`

const Certificado = ({img, titulo, href}) => {
    return (
        <CertificadoEstilo>
            <a href={href} target="_blank" rel="noreferrer">
                <img src={img} alt="teste"/>
                <p>{titulo}</p>
            </a>
        </CertificadoEstilo>

    )

}

export default Certificado;