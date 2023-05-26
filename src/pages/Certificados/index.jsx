import styled from "styled-components"
import Certificado from "../../componentes/Certificado"

// imagens 
import htmlCssRed from "./img/html-css-red.svg"
import HtmlCssPink from "./img/html-css-pink.svg"
import htmlCssPratica from "./img/html-css-pratica.svg"
import htmlCssResponsivo from "./img/html-css-responsivo.svg" 
import jsOrdenacao from "./img/js-yellow.svg"
import jsObjeto from "./img/js-green.svg"
import jsArrays from "./img/js-purple.svg"
import jsBasico from "./img/js-baby-blue.svg"
import jsOrientadoObjeto from "./img/js-orientado-objeto.svg"
import jsManipula from "./img/js-manipula.svg"
import jsPaginas from "./img/js-paginas.svg"
import jsTrataDadosApi from "./img/js-api.svg" 
import jsMetodosArrays from "./img/js-metodos-arrays.svg"

const CertificadosEstilo = styled.section`
    background: var(--cor-fundo);
    display: flex;
    flex-direction: column;

    .certificados-titulos {
        text-transform: lowercase;
        margin: 0.5em 0;
    }

    h2 {
        text-align: center;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        list-style: none;
    }

    li {
        display: flex;
        width: 48%;
        justify-content: center;
    }

    @media screen and (min-width: 720px) {
        li {
            width: 33%;
        }
    }

    @media screen and (min-width: 1220px){
        li {
            width: 20%;
        }
    }
`

export default function Certificados( {funcEsconderOpcoes} ) {

    function esconderOpcoes() {
        funcEsconderOpcoes()
    }

    return (
        <CertificadosEstilo onClick={esconderOpcoes}>
            <h2 className="certificados-titulos titulos">Certificados</h2>
            <ul>
                <li>
                    <Certificado
                        img={htmlCssRed}
                        titulo="HTML5 e CSS3 parte 1: crie uma página da Web"
                    />
                </li>
                <li>
                    <Certificado
                        img={HtmlCssPink}
                        titulo="HTML5 e CSS3 parte 2: posicionamento, listas e navegação"
                    />
                </li>
                <li>
                    <Certificado
                        img={htmlCssRed}
                        titulo="HTML5 e CSS3 parte 3: trabalhando com formulários"
                    />
                </li>
                <li>
                    <Certificado
                        img={HtmlCssPink}
                        titulo="HTML5 e CSS3 parte 4: avançando no CSS"
                    />
                </li>
                <li>
                    <Certificado
                        img={htmlCssPratica}
                        titulo="HTML e CSS: praticando HTML e CSS"
                    />
                </li>
                <li>
                    <Certificado
                        img={htmlCssRed}
                        titulo="HTML e CSS: cabeçalho, footer e variáveis CSS"
                    />
                </li>
                <li>
                    <Certificado
                        img={htmlCssRed}
                        titulo="HTML e CSS: estrutura de arquivos e tags"
                    />
                </li>
                <li>
                    <Certificado
                        img={HtmlCssPink}
                        titulo="HTML e CSS: Classes, posicionamento e Flexbox"
                    />
                </li>
                <li>
                    <Certificado
                        img={htmlCssResponsivo}
                        titulo="HTML e CSS: responsividade com mobile-first"
                    />
                </li>
                <li>
                   <Certificado
                        img={HtmlCssPink}
                        titulo="HTML e CSS: Classes, posicionamento e Flexbox"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsOrdenacao}
                        titulo="JavaScript I: algoritmos de ordenação"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsObjeto}
                        titulo="Algoritmos com JavaScript: Ordenação e busca"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsArrays}
                        titulo="JavaScript: Arrays"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsMetodosArrays}
                        titulo="JavaScript: métodos de array"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsBasico}
                        titulo="JavaScript: tipos, variáveis e funções"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsObjeto}
                        titulo="JavaScript: objeto"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsOrientadoObjeto}
                        titulo="JavaScript: programação orientada a objetos"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsManipula}
                        titulo="JavaScript: manipulando o DOM"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsPaginas}
                        titulo="JavaScript para Web: Crie páginas dinâmicas"
                    />
                </li>
                <li>
                   <Certificado
                        img={jsTrataDadosApi}
                        titulo="JavaScript: consumindo e tratando dados de uma API"
                    />
                </li>
            </ul>            
        </CertificadosEstilo>
    )

}