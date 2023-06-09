import Skill from "../../../componentes/Skill"

import styled from "styled-components"
import VejaMais from "../../../componentes/VejaMais"

const SkillsEstilos = styled.section`
    text-align: center;

    .skills__titulo {
        margin: 0 0 0.5em 0;
    }

    .skills__listas {
        display: flex;
        justify-content: space-evenly;
        align-items: baseline;
        flex-wrap: wrap;
        list-style: none;
        margin-bottom: 1.5em;
    }

    .skills__listas li {
        width: 30%;
    }

    @media screen and (min-width: 720px) {

        .skills__listas li {
            width: 30%;
            justify-content: center;
        }

        .skills__listas img {
            width: 50%;
        }

    }

    @media screen and (min-width: 1220px) {

        .skills__listas li {
            width: 20%;
        }

        .skills__listas img {
            width: 40%;
        }

    }


`

function Skills () {
    return (
        <SkillsEstilos>
            <h2 className="skills__titulo titulos">Skills</h2>
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
                        src="/img/Icones-skills/icone-java.svg" 
                        alt="Icone JAVA"
                        texto="JAVA"
                    />
                </ul>
            </div>

            <VejaMais link="skills/"/>
        </SkillsEstilos>
    )
}

export default Skills