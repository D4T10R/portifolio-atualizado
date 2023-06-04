import styled from "styled-components"
import Certificado from "../../componentes/Certificado"

// curriculos
import htmlCssParte1 from "./pdf/Leonardo Weder Veiga Duca - Curso HTML5 e CSS3 parte 1_ crie uma página da Web - Alura.pdf"
import htmlCssParte2 from "./pdf/Leonardo Weder Veiga Duca - Curso HTML5 e CSS3 parte 2_ posicionamento, listas e navegação - Alura.pdf"
import htmlCssParte3 from "./pdf/Leonardo Weder Veiga Duca - Curso HTML5 e CSS3 parte 3_ trabalhando com formulários e tabelas - Alura.pdf"
import htmlCssParte4 from "./pdf/Leonardo Weder Veiga Duca - Curso HTML5 e CSS3 parte 4_ avançando no CSS - Alura.pdf"
import htmlCssPraticando from "./pdf/Leonardo Weder Veiga Duca - Curso HTML e CSS_ praticando HTML_CSS - Alura.pdf"
import htmlCssCabecalho from "./pdf/Leonardo Weder Veiga Duca - Curso HTML e CSS_ cabeçalho, footer e variáveis CSS - Alura.pdf"
import htmlCssArquivosTags from "./pdf/Leonardo Weder Veiga Duca - Curso HTML e CSS_ ambientes de desenvolvimento, estrutura de arquivos e tags - Alura.pdf"
import htmlCssClassPosicao from "./pdf/Leonardo Weder Veiga Duca - Curso HTML e CSS_ Classes, posicionamento e Flexbox - Alura.pdf"
import javaScriptOrdenacao from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript I_ algoritmos de ordenação - Alura.pdf"
import javaScriptBusca from "./pdf/Leonardo Weder Veiga Duca - Curso Algoritmos com JavaScript II_ aprofundando em algoritmos de ordenação e busca - Alura.pdf"
import javaScriptArrays from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript_ Arrays - Alura.pdf"
import javaScriptMetodos from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript_ métodos de array - Alura.pdf"
import javaScriptVariaveis from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript_ tipos, variáveis e funções - Alura.pdf"
import javaScriptObjetos from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript_ objetos - Alura.pdf"
import javaScriptPOO from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript_ programação orientada a objetos - Alura.pdf"
import javaScriptDOM from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript_ manipulando o DOM - Alura.pdf"
import javaScriptDinamico from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript para Web_ Crie páginas dinâmicas - Alura.pdf"
import javaScriptDadosApi from "./pdf/Leonardo Weder Veiga Duca - Curso JavaScript_ consumindo e tratando dados de uma API - Alura.pdf"
import reactComponentes from "./pdf/Leonardo Weder Veiga Duca - Curso React_ como os componentes funcionam - Alura.pdf"
import reactPraticaJs from "./pdf/Leonardo Weder Veiga Duca - Curso React_ praticando React com Js - Alura.pdf"
import reactDesenvolvimentoJs from "./pdf/Leonardo Weder Veiga Duca - Curso React_ desenvolvendo com JavaScript - Alura.pdf"


//JavaScript: Arrays


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
                    <a href={htmlCssParte1} target="_blank">
                    <Certificado
                        img={htmlCssRed}
                        titulo="HTML5 e CSS3 parte 1: crie uma página da Web"
                    />
                    </a>
                </li>
                <li>
                    <a href={htmlCssParte2} target="_blank">
                    <Certificado
                        img={HtmlCssPink}
                        titulo="HTML5 e CSS3 parte 2: posicionamento, listas e navegação"
                    />
                    </a>
                </li>
                <li>
                    <a href={htmlCssParte3} target="_blank">
                    <Certificado
                        img={htmlCssRed}
                        titulo="HTML5 e CSS3 parte 3: trabalhando com formulários"
                    />
                    </a>
                </li>
                <li>
                    <a href={htmlCssParte4} target="_blank">
                    <Certificado
                        img={HtmlCssPink}
                        titulo="HTML5 e CSS3 parte 4: avançando no CSS"
                    />
                    </a>
                </li>
                <li>
                    <a href={htmlCssPraticando} target="_blank">
                    <Certificado
                        img={htmlCssPratica}
                        titulo="HTML e CSS: praticando HTML e CSS"
                    />
                    </a>
                </li>
                <li>
                    <a href={htmlCssCabecalho} target="_blank">
                    <Certificado
                        img={htmlCssRed}
                        titulo="HTML e CSS: cabeçalho, footer e variáveis CSS"
                    />
                    </a>
                </li>
                <li>
                    <a href={htmlCssArquivosTags} target="_blank">
                    <Certificado
                        img={htmlCssRed}
                        titulo="HTML e CSS: estrutura de arquivos e tags"
                    />
                    </a>
                </li>
                <li>
                    <a href={htmlCssClassPosicao} target="_blank">
                    <Certificado
                        img={HtmlCssPink}
                        titulo="HTML e CSS: Classes, posicionamento e Flexbox"
                    />
                    </a>
                </li>
                <li>
                    <a>
                    <Certificado
                        img={htmlCssResponsivo}
                        titulo="HTML e CSS: responsividade com mobile-first"
                    />
                    </a>
                </li>
                <li>
                    <a href={htmlCssClassPosicao} target="_blank">
                   <Certificado
                        img={HtmlCssPink}
                        titulo="HTML e CSS: Classes, posicionamento e Flexbox"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptOrdenacao} target="_blank">
                   <Certificado
                        img={jsOrdenacao}
                        titulo="JavaScript I: algoritmos de ordenação"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptBusca} target="_blank">
                   <Certificado
                        img={jsObjeto}
                        titulo="Algoritmos com JavaScript: Ordenação e busca"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptArrays} target="_blank">
                   <Certificado
                        img={jsArrays}
                        titulo="JavaScript: Arrays"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptMetodos} target="_blank">
                   <Certificado
                        img={jsMetodosArrays}
                        titulo="JavaScript: métodos de array"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptVariaveis} target="_blank">
                   <Certificado
                        img={jsBasico}
                        titulo="JavaScript: tipos, variáveis e funções"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptObjetos} target="_blank">
                   <Certificado
                        img={jsObjeto}
                        titulo="JavaScript: objeto"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptPOO} target="_blank">
                   <Certificado
                        img={jsOrientadoObjeto}
                        titulo="JavaScript: programação orientada a objetos"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptDOM} target="_blank">
                   <Certificado
                        img={jsManipula}
                        titulo="JavaScript: manipulando o DOM"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptDinamico} target="_blank">
                   <Certificado
                        img={jsPaginas}
                        titulo="JavaScript para Web: Crie páginas dinâmicas"
                    />
                    </a>
                </li>
                <li>
                    <a href={javaScriptDadosApi} target="_blank">
                   <Certificado
                        img={jsTrataDadosApi}
                        titulo="JavaScript: consumindo e tratando dados de uma API"
                    />
                    </a>
                </li>
                <li>
                    <a href={reactComponentes} target="_blank">
                   <Certificado
                        img={reactComponents}
                        titulo="React: como os componentes funcionam"
                    />
                    </a>
                </li>
                <li>
                    <a href={reactPraticaJs} target="_blank">
                   <Certificado
                        img={reactPraticando}
                        titulo="React: praticando React com Js"
                    />
                    </a>
                </li>
                <li>
                    <a href={reactDesenvolvimentoJs} target="_blank">
                   <Certificado
                        img={reactDesenvolvendo}
                        titulo="React: desenvolvendo com JavaScript"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={reactEmotion}
                        titulo="React: desenvolvendo com JavaScript"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={reactArquivosEstaticos}
                        titulo="React com JavaScript: arquivos estáticos"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={reactRouter}
                        titulo="React: desenvolvendo em React Router com JavaScript"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={reactFullStack}
                        titulo="React: comece seu projeto full stack"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={reactTypeScript}
                        titulo="React: migrando para TypeScript"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={pythonMundo1}
                        titulo="Python 3 – Mundo 1"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={pythonMundo2}
                        titulo="Python 3 – Mundo 2"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={pythonMundo3}
                        titulo="Python 3 – Mundo 3"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={http}
                        titulo="HTTP: entendendo a web por baixo dos panos - 1"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={http}
                        titulo="HTTP: entendendo a web por baixo dos panos - 2"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={etl}
                        titulo="ETL com Integration Services: modelo de dados"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={nodeJsBiblioteca}
                        titulo="Node.js: criando sua primeira biblioteca"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={nodeJsApiRest}
                        titulo="Node.js: API Rest com Express e MongoDB"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={nodeJsBusca}
                        titulo="Node.js: buscas, filtros, paginação e erros na API"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={mysqlCursoEmVideo}
                        titulo="MySQL"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={bancoDeDadosSql}
                        titulo="Banco de Dados SQL do Zero ao Avançado + Projetos Reais"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={agilidade}
                        titulo="Agilidade: promovendo a transformação ágil"
                    />
                    </a>
                </li>
                <li>
                    <a>
                   <Certificado
                        img={scrumAgilidade}
                        titulo="Scrum: agilidade em seu projeto"
                    />
                    </a>
                </li>

            </ul>            
        </CertificadosEstilo>
    )

}