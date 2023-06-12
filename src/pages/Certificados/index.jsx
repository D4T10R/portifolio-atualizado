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
import reactComponentesEmotion from "./pdf/Leonardo Weder Veiga Duca - Curso React_ desenvolvendo componentes customizados e acessíveis com Emotion - Alura.pdf"
import reactArquivoEstatico from "./pdf/Leonardo Weder Veiga Duca - Curso React com JavaScript_ lidando com arquivos estáticos - Alura.pdf"
import reactNavegacaoRouter from "./pdf/Leonardo Weder Veiga Duca - Curso React_ desenvolvendo em React Router com JavaScript - Alura.pdf"
import reactProjetoFullStack from "./pdf/Leonardo Weder Veiga Duca - Curso React_ comece seu projeto full stack - Alura.pdf"
import reactMigrandoTypeScipt from "./pdf/Leonardo Weder Veiga Duca - Curso React_ migrando para TypeScript - Alura.pdf"
import httpPorDeBaixoDosPanos from "./pdf/Leonardo Weder Veiga Duca - Curso HTTP_ entendendo a web por baixo dos panos - Alura.pdf"
import httpPorDeBaixoDosPanos2 from "./pdf/Leonardo Weder Veiga Duca - Curso HTTP_ Entendendo a web por baixo dos panos2 - Alura.pdf"
import etlComIntegrateServices from "./pdf/Leonardo Weder Veiga Duca - Curso ETL com Integration Services_ modelo de dados - Alura.pdf"
import nodeJsPrimeiraBiblioteca from "./pdf/Leonardo Weder Veiga Duca - Curso Node.js_ criando sua primeira biblioteca - Alura.pdf"
import nodeJsApiRestMongoDb from "./pdf/Leonardo Weder Veiga Duca - Curso Node.js_ API Rest com Express e MongoDB - Alura.pdf"
import nodeJsBuscaApiRest from "./pdf/Leonardo Weder Veiga Duca - Curso Node.js_ lidando com buscas, filtros, paginação e erros em uma API - Alura.pdf"
import agilidadeTransformacao from "./pdf/Leonardo Weder Veiga Duca - Curso Agilidade_ promovendo a transformação ágil - Alura.pdf"
import scrumAgilidadeProjeto from "./pdf/Leonardo Weder Veiga Duca - Curso Scrum_ agilidade em seu projeto - Alura.pdf"

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
                        href={htmlCssParte1}
                        img={htmlCssRed}
                        titulo="HTML5 e CSS3 parte 1: crie uma página da Web"
                    />
                </li>
                <li>
                    <Certificado
                        href={htmlCssParte2}
                        img={HtmlCssPink}
                        titulo="HTML5 e CSS3 parte 2: posicionamento, listas e navegação"
                    />
                </li>
                <li>
                    <Certificado
                        href={htmlCssParte3}
                        img={htmlCssRed}
                        titulo="HTML5 e CSS3 parte 3: trabalhando com formulários"
                    />
                </li>
                <li>
                    <Certificado
                        href={htmlCssParte4}
                        img={HtmlCssPink}
                        titulo="HTML5 e CSS3 parte 4: avançando no CSS"
                    />
                </li>
                <li>
                    <Certificado
                        href={htmlCssPraticando}
                        img={htmlCssPratica}
                        titulo="HTML e CSS: praticando HTML e CSS"
                    />
                </li>
                <li>
                    <Certificado
                        href={htmlCssCabecalho}
                        img={htmlCssRed}
                        titulo="HTML e CSS: cabeçalho, footer e variáveis CSS"
                    />
                </li>
                <li>
                    <Certificado
                        href={htmlCssArquivosTags}
                        img={htmlCssRed}
                        titulo="HTML e CSS: estrutura de arquivos e tags"
                    />
                </li>
                <li>
                    <Certificado
                        href={htmlCssClassPosicao}
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
                        href={htmlCssClassPosicao}
                        img={HtmlCssPink}
                        titulo="HTML e CSS: Classes, posicionamento e Flexbox"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptOrdenacao}
                        img={jsOrdenacao}
                        titulo="JavaScript I: algoritmos de ordenação"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptBusca}
                        img={jsObjeto}
                        titulo="Algoritmos com JavaScript: Ordenação e busca"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptArrays}
                        img={jsArrays}
                        titulo="JavaScript: Arrays"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptMetodos}
                        img={jsMetodosArrays}
                        titulo="JavaScript: métodos de array"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptVariaveis}
                        img={jsBasico}
                        titulo="JavaScript: tipos, variáveis e funções"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptObjetos}
                        img={jsObjeto}
                        titulo="JavaScript: objeto"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptPOO}
                        img={jsOrientadoObjeto}
                        titulo="JavaScript: programação orientada a objetos"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptDOM}
                        img={jsManipula}
                        titulo="JavaScript: manipulando o DOM"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptDinamico}
                        img={jsPaginas}
                        titulo="JavaScript para Web: Crie páginas dinâmicas"
                    />
                </li>
                <li>
                   <Certificado
                        href={javaScriptDadosApi}
                        img={jsTrataDadosApi}
                        titulo="JavaScript: consumindo e tratando dados de uma API"
                    />
                </li>
                <li>
                   <Certificado
                        href={reactComponentes}
                        img={reactComponents}
                        titulo="React: como os componentes funcionam"
                    />
                </li>
                <li>
                   <Certificado
                        href={reactPraticaJs}
                        img={reactPraticando}
                        titulo="React: praticando React com Js"
                    />
                </li>
                <li>
                    <Certificado
                        href={reactDesenvolvimentoJs}
                        img={reactDesenvolvendo}
                        titulo="React: desenvolvendo com JavaScript"
                    />
                </li>
                <li>
                    <Certificado
                        href={reactComponentesEmotion}
                        img={reactEmotion}
                        titulo="React: desenvolvendo componentes customizados Emotion"
                    />
                </li>
                <li>
                   <Certificado
                        href={reactArquivoEstatico}
                        img={reactArquivosEstaticos}
                        titulo="React com JavaScript: arquivos estáticos"
                    />
                </li>
                <li>
                   <Certificado
                        href={reactNavegacaoRouter}
                        img={reactRouter}
                        titulo="React: desenvolvendo em React Router com JavaScript"
                    />
                </li>
                <li>
                   <Certificado
                        href={reactProjetoFullStack}
                        img={reactFullStack}
                        titulo="React: comece seu projeto full stack"
                    />
                </li>
                <li>
                   <Certificado
                        href={reactMigrandoTypeScipt}
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
                        href={httpPorDeBaixoDosPanos}
                        img={http}
                        titulo="HTTP: entendendo a web por baixo dos panos - 1"
                    />
                </li>
                <li>
                   <Certificado
                        href={httpPorDeBaixoDosPanos2}
                        img={http}
                        titulo="HTTP: entendendo a web por baixo dos panos - 2"
                    />
                </li>
                <li>
                   <Certificado
                        href={etlComIntegrateServices}
                        img={etl}
                        titulo="ETL com Integration Services: modelo de dados"
                    />
                </li>
                <li>
                   <Certificado
                        href={nodeJsPrimeiraBiblioteca}
                        img={nodeJsBiblioteca}
                        titulo="Node.js: criando sua primeira biblioteca"
                    />
                </li>
                <li>
                   <Certificado
                        href={nodeJsApiRestMongoDb}
                        img={nodeJsApiRest}
                        titulo="Node.js: API Rest com Express e MongoDB"
                    />
                </li>
                <li>
                   <Certificado
                        href={nodeJsBuscaApiRest}
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
                        href={agilidadeTransformacao}
                        img={agilidade}
                        titulo="Agilidade: promovendo a transformação ágil"
                    />
                </li>
                <li>
                   <Certificado
                        href={scrumAgilidadeProjeto}
                        img={scrumAgilidade}
                        titulo="Scrum: agilidade em seu projeto"
                    />
                </li>

            </ul>            
        </CertificadosEstilo>
    )

}