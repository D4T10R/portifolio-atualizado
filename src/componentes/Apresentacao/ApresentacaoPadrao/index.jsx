import React from 'react'
import styled from 'styled-components'

import iconeGit from './img/icone-git.svg'
import iconeLinkedin from './img/icone-linkedin.svg'
import iconeEmail from './img/icones-email.svg'

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

    .rosto {
        width: 35%
    }

    .icones {
        display: flex;
        justify-content: space-evenly;
        width: 200px;
    }

    .icone {
        width: 13%;
    }

    @media screen and (min-width: 720px) {

        .rosto {
            width: 20%;
        }

        .icone {
            width: 15%;
        }
    }

    @media screen and (min-width: 1220px) {
        .rosto {
            width: 10%;
        }

        .icone {
            width: 15%;
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
            <img src="../img/rosto.svg" alt="Desenho do Datior no pc" className='rosto' />
            <div className='icones'>
                <img src={iconeEmail} alt="" className='icone' />
                <img src={iconeLinkedin} alt="" className='icone' />
                <img src={iconeGit} alt="GIT-HUB" className='icone' />
            </div>
        </Inicio>
    )
}

export default ApresentacaoPadrao
