import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    

    :root {
        --cor-texto-oculto: rgb(246, 255, 211, 0.3);
        --cor-fundo: #080919;
        --cor-fundo-opcoes: #2D3061;
        --cor-texto: #F6FFD3;
        --cor-titulos: #70FF00;
        --cor-fundo-projeto: rgb(0, 15, 145, 0.5);
        --cor-titulo-projeto: #05FF00;
        --cor-fundo-fundo: #13F2CA;

        --font-titulos: 'Tomorrow', sans-serif;
        --font-texto: 'Nova Round', cursive;
        --font-texto-apresentacao: 'Space Mono', monospace;
    }

    :root {
        --cor-de-fundo-calculadora: linear-gradient(to bottom, rgb(48, 82, 146), rgb(115, 155, 223)); 
        
        --cor-calculadora: linear-gradient(to bottom, rgb(172, 139, 97), rgb(222, 184, 135));
        --cor-borda-calculadora: rgb(0, 0, 0);

        --cor-teclas-calculadora: rgb(196, 190, 190);
        --cor-teclas-destacadas-calculadora: rgb(161, 156, 156);

        --cor-campo-resultado-calculadora: rgb(240, 248, 255);
    }
    :root {
        --cor-fundo-quadrado: rgb(88, 166, 255);
        --cor-quadradinho: green;
        --cor-caixa: rgb(119, 95, 175);
        --cor-bolinha: red;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .ConjuntoOpcoes {
        display: none;
    }

    .titulos {
        font-family: var(--font-titulos);
        font-size: 48px;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--cor-titulos);
    }

    body {
        margin: 0em;
        font-family: var(--font-texto);
        color: var(--cor-texto);
        background: var(--cor-fundo-fundo);
        padding: 8px;
    }


    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    @media screen and (min-width: 1220px) {
        .titulos {
            padding: 1em 0 0.5em 0;
        }
    }


`

