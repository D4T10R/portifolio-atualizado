import styled from "styled-components"

const SkillEstilo = styled.li`
    width: 10%;
    margin: 10px 0;

    p {
        font-size: 20px;
    }

    @media screen and (min-width: 720px) {
        justify-content: center;

        .skills__listas img {
            width: 50%;
        }
    }

    @media screen and (min-width: 1220px) {
        .skills__listas img {
            width: 80%;
        }
    }
`

const Skill = (props) => {
    return (
        <SkillEstilo>
            <img src={props.src} alt={props.alt} />
            <p>{props.texto}</p>
        </SkillEstilo>
    )
}

export default Skill