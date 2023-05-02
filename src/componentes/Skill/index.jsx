import styled from "styled-components"

const SkillEstilo = styled.li`

    @media screen and (max-width: 380px) {
        width: 51%;
    }

    width: 30%;
    margin: 10px 0;

    p {
        font-size: 20px;
    }

    @media screen and (min-width: 720px) {
        justify-content: center;
        width: 28%;

        .skills__listas img {
            width: 20%;
        }
    }

    @media screen and (min-width: 1220px) {
        width: 30%;
        .skills__listas img {
            width: 100%;
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