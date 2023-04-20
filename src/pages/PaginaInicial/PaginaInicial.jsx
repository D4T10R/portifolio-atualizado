import React, { useRef } from 'react';
import styled from 'styled-components';

//Componentes
import Apresentacao from "../../componentes/Apresentacao"
import Skills from "./Skills"
import Projetos from "./Projetos"

const StyledPaginaInicial = styled.section`
    background: var(--cor-fundo);
`


export default function PaginaInicial( {funcEsconderOpcoes} ) {

    function esconderOpcoes() {
      funcEsconderOpcoes()
    }

    return (
      <StyledPaginaInicial
        onClick={esconderOpcoes}
      >
        <Apresentacao />
        <Skills />
        <Projetos />
      </StyledPaginaInicial>
    )
}
