import styled from "styled-components";

import seta from "./img/seta.svg"
import { Link } from "react-router-dom";

const VejaMaisEstilo = styled.div`
    margin: 1em 0;
    display: inline-flexbox;
    justify-content: center;

    border: 2px solid var(--cor-texto-oculto);
    border-radius: 12.5px;
    padding: 0.5em;
    gap: 0.5em;
    color: var(--cor-texto-oculto);

    :hover {
        border: 2px solid var(--cor-texto);
        color: var(--cor-texto);
    }
`

const VejaMais = (props) => {
    return (
        <Link to={props.link}>
            <VejaMaisEstilo>
                <p>Veja mais</p>
                <img src={seta} alt="Aqui" />
            </VejaMaisEstilo>
        </Link>
    )
}

export default VejaMais;