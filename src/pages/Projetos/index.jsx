import React from 'react'

import styled from 'styled-components'
import ProjetosFeitos from '../../componentes/Projetos-feitos'

import imgComboloAlura from './Img-projetos/img-combo-alura.svg'
import imgEcopoint from './Img-projetos/ecopoint-img.svg'
import imgTikTok from './Img-projetos/tiktok-img.svg'
import imgCalculadora from './Img-projetos/calculadora-print.svg'
import imgQuadradinho from './Img-projetos/quadradinho-print.svg'

const StyledProjetos = styled.section`


    background: var(--cor-fundo);
    text-align: center;

    .projeto-titulo {
        padding: 0.5em 0;
    }

    @media screen and (min-width: 720px) {
        ul {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            list-style: none;
            gap: 5em;
        }

    }

`

export default function Projetos( { funcEsconderOpcoes } ) {

    function esconderOpcoes() {
        funcEsconderOpcoes()
    }

    return (

        <StyledProjetos onClick={esconderOpcoes}>
            <h2 className="projeto-titulo titulos">Projetos</h2>
            <ul>
                <li>
                    <ProjetosFeitos 
                        href="https://github.com/D4T10R/combo_plus"
                        src={imgComboloAlura}
                        alt="Imagem calculadora"
                        titulo="Combo"
                        frase="Primeiro projeto que fiz em HTML"
                        descricao="Esse foi meu primeiro projeto em html que fiz, achei bem simples HTML e CSS e em pouco tempo fiz outros projetos mais elaborados."
                    />
                </li>
                <li>
                    <ProjetosFeitos 
                        href="https://www.linkedin.com/posts/leonardo-weder-veiga-duca-a1bb531b6_projeto-ecopoint-centro-universit%C3%A1rio-newton-activity-7001693033763115008-E14u?utm_source=share&utm_medium=member_desktop"
                        src={imgEcopoint}
                        alt="Imagem do projeto Ecopoint"
                        titulo="Ecopoint"
                        frase="Projeto completo no linkedin"
                        descricao="Trabalho que fiz para minha faculdade utilizando, trello, figma, diagramas UML e muitos outros conhecimentos."
                    />
                </li>
                <li>
                    <ProjetosFeitos 
                        href="https://www.tiktok.com/@d4t10r?lang=pt-BR"
                        src={imgTikTok}
                        alt="Imagem do meu Tik-Tok"
                        titulo="tik-tok"
                        frase="Projeto pessoal no tiktok"
                        descricao="Projeto pessoal, onde faço vídeos sobre curiosidades no mundo da tecnologia. Focando mais no sistema operacional linux "
                    />
                </li>
                <li>
                    <ProjetosFeitos 
                        href="/projetos/Calculadora"
                        src={imgCalculadora}
                        alt="Imagem da minha Calculadora"
                        titulo="Calculadora"
                        frase="Projetetinho basico"
                        descricao="fiz esse projeto para me divertir e exercitar sobre table e JS. Possivelmente posso no futuro fazer alterações."
                    />
                </li>
                <li>
                    <ProjetosFeitos 
                        href="#"
                        src={imgQuadradinho}
                        alt="Imagem do jogo do quadradinho"
                        titulo="Quadradinho"
                        frase="Projetetinho para se divertir"
                        descricao="fiz esse projeto para me divertir e exercitar lógica de programação. Possivelmente posso no futuro fazer alterações."
                    />
                </li>
            </ul>
        </StyledProjetos>

    )
}
