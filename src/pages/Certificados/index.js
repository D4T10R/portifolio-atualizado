import styled from "styled-components"
import Certificado from "../../componentes/Certificado"

// imagens 
import htmlCssRed from "./img/html-css-red.svg"
import HtmlCssPink from "./img/html-css-pink.svg"


const CertificadosEstilo = styled.section`
    background: var(--cor-fundo);
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export default function Certificados( {funcEsconderOpcoes} ) {

    function esconderOpcoes() {
        funcEsconderOpcoes()
    }

    return (
        <CertificadosEstilo onClick={esconderOpcoes}>
            <Certificado
                img={htmlCssRed}
                titulo="HTML5 e CSS3 parte 1: crie uma página da Web"
            />
            <Certificado
                img={HtmlCssPink}
                titulo="HTML5 e CSS3 parte 2: posicionamento, listas e navegação"
            />
            <Certificado
                img={htmlCssRed}
                titulo="HTML5 e CSS3 parte 3: trabalhando com formulários"
            />
            <Certificado
                img={HtmlCssPink}
                titulo="HTML5 e CSS3 parte 4: avançando no CSS"
            />
        </CertificadosEstilo>
    )

}