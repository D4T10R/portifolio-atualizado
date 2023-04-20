import React from 'react'
import CampoFormulario from '../../componentes/CampoFormulario'
import styled from 'styled-components'

const StyledContatos = styled.section`
    text-align: center;
    background: var(--cor-fundo);
    

    .contato-titulo {
        padding: 1em 0;
    }

    .formulario {
        margin-top: 2em;
    }

    .enviar {
        width: 30%;
        padding: 0.5em;
        border-radius: 30px;
        background: none;
        border: 3px solid white;
        color: var(--cor-texto);
        font-size: 20px;
        margin-top: 3em;

    }   

`

export default function Contatos() {
    return (
    
        <StyledContatos>
            <h2 className="contato-titulo titulos">QUER QUE TE CHAME?</h2>
            <form action="" id="form" className="formulario">
                <CampoFormulario lacoFor="email" titulo="Email" tipo="email" />
                <CampoFormulario lacoFor="celular" titulo="Celular" tipo="number" />
                <input type="submit" placeholder="Enviar" className="enviar" />
            </form>
        </StyledContatos>
    
    )
}
