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
import reactComponents from "./img/react-componentes.svg"
import reactPraticando from "./img/react-praticando.svg"
import reactDesenvolvendo from "./img/react-desenvolvendo.svg"
import reactEmotion from "./img/react-emotion.svg"
import reactArquivosEstaticos from "./img/react-estaticos.svg"
import reactRouter from "./img/react-router.svg"
import reactFullStack from "./img/react-full.svg"
import reactTypeScript from "./img/react-typeScript.svg"
import pythonMundo1 from "./img/python-mundo1.svg"
import pythonMundo2 from "./img/python-mundo2.svg"
import pythonMundo3 from "./img/python-mundo3.svg"
import http from "./img/http.svg"
import etl from "./img/etl.svg"
import nodeJsBiblioteca from "./img/nodeJs-biblioteca.svg"
import nodeJsApiRest from "./img/nodeJs-api-rest.svg"
import nodeJsBusca from "./img/nodeJs-busca-filtros.svg"
import mysqlCursoEmVideo from "./img/mysql-curso-em-video.svg"
import bancoDeDadosSql from "./img/banco-de-dados-sql.svg"
import agilidade from "./img/agilidade.svg"
import scrumAgilidade from "./img/scrum-agilidade.svg"

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
                <li>
                   <Certificado
                        img={reactComponents}
                        titulo="React: como os componentes funcionam"
                    />
                </li>
                <li>
                   <Certificado
                        img={reactPraticando}
                        titulo="React: praticando React com Js"
                    />
                </li>
                <li>
                   <Certificado
                        img={reactDesenvolvendo}
                        titulo="React: desenvolvendo com JavaScript"
                    />
                </li>
                <li>
                   <Certificado
                        img={reactEmotion}
                        titulo="React: desenvolvendo com JavaScript"
                    />
                </li>
                <li>
                   <Certificado
                        img={reactArquivosEstaticos}
                        titulo="React com JavaScript: arquivos estáticos"
                    />
                </li>
                <li>
                   <Certificado
                        img={reactRouter}
                        titulo="React: desenvolvendo em React Router com JavaScript"
                    />
                </li>
                <li>
                   <Certificado
                        img={reactFullStack}
                        titulo="React: comece seu projeto full stack"
                    />
                </li>
                <li>
                   <Certificado
                        img={reactTypeScript}
                        titulo="React: migrando para TypeScript"
                    />
                </li>
                <li>
                   <Certificado
                        img={pythonMundo1}
                        titulo="Python 3 – Mundo 1"
                    />
                </li>
                <li>
                   <Certificado
                        img={pythonMundo2}
                        titulo="Python 3 – Mundo 2"
                    />
                </li>
                <li>
                   <Certificado
                        img={pythonMundo3}
                        titulo="Python 3 – Mundo 3"
                    />
                </li>
                <li>
                   <Certificado
                        img={http}
                        titulo="HTTP: entendendo a web por baixo dos panos - 1"
                    />
                </li>
                <li>
                   <Certificado
                        img={http}
                        titulo="HTTP: entendendo a web por baixo dos panos - 2"
                    />
                </li>
                <li>
                   <Certificado
                        img={etl}
                        titulo="ETL com Integration Services: modelo de dados"
                    />
                </li>
                <li>
                   <Certificado
                        img={nodeJsBiblioteca}
                        titulo="Node.js: criando sua primeira biblioteca"
                    />
                </li>
                <li>
                   <Certificado
                        img={nodeJsApiRest}
                        titulo="Node.js: API Rest com Express e MongoDB"
                    />
                </li>
                <li>
                   <Certificado
                        img={nodeJsBusca}
                        titulo="Node.js: buscas, filtros, paginação e erros na API"
                    />
                </li>
                <li>
                   <Certificado
                        img={mysqlCursoEmVideo}
                        titulo="MySQL"
                    />
                </li>
                <li>
                   <Certificado
                        img={bancoDeDadosSql}
                        titulo="Banco de Dados SQL do Zero ao Avançado + Projetos Reais"
                    />
                </li>
                <li>
                   <Certificado
                        img={agilidade}
                        titulo="Agilidade: promovendo a transformação ágil"
                    />
                </li>
                <li>
                   <Certificado
                        img={scrumAgilidade}
                        titulo="Scrum: agilidade em seu projeto"
                    />
                </li>

            </ul>            
        </CertificadosEstilo>
    )

}