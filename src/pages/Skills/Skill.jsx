import React from 'react'

import Skill from '../../componentes/Skill'

import styled from "styled-components"

const SkillsEstilos = styled.section`
    text-align: center;
    background: var(--cor-fundo);

    .skills__titulo {
        margin: 0 0 0.5em 0;
        padding: 1em 0;
    }

    .skills__listas {
        display: flex;
        justify-content: space-evenly;
        align-items: baseline;
        flex-wrap: wrap;
        list-style: none;
        padding-bottom: 1.5em;
    }

    @media screen and (min-width: 720px) {
        .skills__listas img {
            width: 40%;
        }
    }

    @media screen and (min-width: 1220px) {
        .skills__listas img {
            width: 35%;
        }
    }
`

export default function Skills( { funcEsconderOpcoes } ) {

    function escoderOpcoes() {
        funcEsconderOpcoes()
    }

    return (
        <>
            <SkillsEstilos onClick={escoderOpcoes}>
                <h2 className="skills__titulo titulos">Hard-Skills</h2>
                <div>
                    <ul className="skills__listas">
                        <Skill 
                            src="/img/Icones-skills/icone-html.svg"
                            alt="Icone HTML"
                            texto="HTML5"
                        />
                        <Skill 
                            src="/img/Icones-skills/icone-css.svg" 
                            alt="Icone CSS3"
                            texto="CSS3"
                        />
                        <Skill 
                            src="/img/Icones-skills/icone-js.svg" 
                            alt="Icone JS"
                            texto="JavaScript"
                        />
                    </ul>
                    <ul className="skills__listas">
                        <Skill 
                        src="/img/Icones-skills/icone-git.svg" 
                        alt="Icone GIT"
                        texto="GIT" 
                        />
                        <Skill 
                        src="/img/Icones-skills/icone-sql.svg" 
                        alt="Icone SQL"
                        texto="SQL" 
                        />
                        <Skill 
                            src="/img/Icones-skills/icone-react.svg"
                            alt="Icone REACT"
                            texto="REACT"
                        />
                       
                    </ul>
                    <ul className="skills__listas">
                        <Skill 
                        src="/img/Icones-skills/icone-vegas.svg" 
                        alt="Icone Sony Vegas"
                        texto="Edição video" 
                        />
                        <Skill 
                        src="/img/Icones-skills/icone-linux.svg" 
                        alt="Icone Linux"
                        texto="LINUX" 
                        /> 
                        <Skill 
                            src="/img/Icones-skills/icone-java.svg" 
                            alt="Icone JAVA"
                            texto="JAVA"
                        />
                    </ul>
                </div>
            </SkillsEstilos>

            <SkillsEstilos onClick={escoderOpcoes}>
                <h2 className="skills__titulo titulos">Soft-Skills</h2>
                <ul className="skills__listas">
                        <Skill 
                            src="/img/Icones-skills/icone-colaboracao.svg"
                            alt="Icone Colaboração"
                            texto="Colaboração"
                        />
                        <Skill 
                            src="/img/Icones-skills/icone-organizacao.svg" 
                            alt="Icone Organização"
                            texto="Organização"
                        />
                        <Skill 
                            src="/img/Icones-skills/icone-comunicacao.svg" 
                            alt="Icone Comunicação"
                            texto="Comunicação"
                        />
                </ul>
            </SkillsEstilos>
        </>
    )
}
