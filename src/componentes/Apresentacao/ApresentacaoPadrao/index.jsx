import React from 'react'
import styled from 'styled-components'

const Inicio = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--cor-fundo);

    .inicio__titulo {
        font-family: var(--font-titulos);
        font-size: 32px;
        font-weight: 800;
        color: var(--cor-titulos);
    }

    img {
        width: 35%
    }

    @media screen and (min-width: 720px) {

        img {
            width: 20%;
        }
    }

    @media screen and (min-width: 1220px) {
        img {
            width: 10%;
        }
    }

`

const ApresentacaoPadrao = ({funcEsconderOpcoes}) => {

    function esconderOpcoes() {
        funcEsconderOpcoes()
    }

    return (
        <Inicio onClick={esconderOpcoes}>
            <h1 className="inicio__titulo">DATIOR</h1>
            <img src="../img/rosto.svg" alt="Desenho do Datior no pc"></img>
        </Inicio>
    )
}

export default ApresentacaoPadrao
