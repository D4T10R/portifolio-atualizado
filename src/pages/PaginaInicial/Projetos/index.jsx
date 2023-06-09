import styled from "styled-components"
import ProjetosFeitos from "../../../componentes/Projetos-feitos"
import VejaMais from "../../../componentes/VejaMais"

const ProjetosEstilo = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;

    .projetos__titulo {
        margin: 1.5em 0;
    }

    .projetos__div {
        flex-wrap: wrap;
        display: flex;
    }

    @media screen and (max-width: 720px) {
        .projetos__div a {
            width: 100%;
        }
    }

    @media screen and (min-width: 720px) {
        .projeto__texto-descritivo {
            display: block;
        }

        .projetos__div {
            display: flex;
            justify-content: space-evenly;
        }
    }

    @media screen and (min-width: 1220px) {
        .projetos__div {
            justify-content: center;
            gap: 4em 4em;
        }
    }
`

const Projetos = () => {
    return (
        <ProjetosEstilo>
            <h2 className="projetos__titulo titulos">Projetos</h2>
        
            <div className="projetos__div">
                <ProjetosFeitos 
                    href="/projetos/Calculadora"
                    src="/img/Img-projetos/calculadora-print.svg"
                    alt="Imagem da minha Calculadora"
                    titulo="Calculadora"
                    frase="Projetetinho basico"
                    descricao="fiz esse projeto para me divertir e exercitar sobre table e JS. Possivelmente posso no futuro fazer alterações."
                />
                <ProjetosFeitos 
                    href="https://www.linkedin.com/posts/leonardo-weder-veiga-duca-a1bb531b6_projeto-ecopoint-centro-universit%C3%A1rio-newton-activity-7001693033763115008-E14u?utm_source=share&utm_medium=member_desktop"
                    src="/img/Img-projetos/ecopoint-img.svg"
                    alt="imagem-ecopoint"
                    titulo="ecopoint"
                    frase="Projeto completo no linkedin"
                    descricao="Trabalho que fiz para minha faculdade utilizando, trello, figma, diagramas UML e muitos outros conhecimentos."
                />
                <ProjetosFeitos 
                    href="https://www.tiktok.com/@d4t10r"
                    src="/img/Img-projetos/tiktok-img.svg"
                    alt="imagem-tik-tok"
                    titulo="tik-tok"
                    frase="Primeiro projeto que fiz em HTML"
                    descricao="Esse foi meu primeiro projeto em html que fiz, achei bem simples HTML e CSS e em pouco tempo fiz outros projetos mais elaborados."
                />
            </div>
            <VejaMais link="projetos/"/>
        </ProjetosEstilo>
    )
}

export default Projetos