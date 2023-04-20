import React from 'react'

import styled from 'styled-components'

const StyledPaginaErro = styled.section`
    background: var(--cor-fundo);
    text-align: center;

    div {
        background: white;
    }

    .imagem-404{
        width: 80%;
    }

    h1 {
        color: black;
    }

    .imagem-choro{
        width: 100%;
    }

`

export default function PaginaErro({funcEsconderOpcoes}) {

    function esconderOpcoes() {
        funcEsconderOpcoes()
    }

    return (
        <StyledPaginaErro onClick={esconderOpcoes}>
            <div>
                <img src='/img/Erro/404.png' alt='Erro 404' className='imagem-404'></img>
                <h1>Página não encontrada</h1>
                <img src='/img/Erro/erro.gif' alt='DESCULPAAAAAAA :(' className='imagem-choro'/>
            </div>
        </StyledPaginaErro>
    )
}
