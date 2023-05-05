import React, { useState } from 'react';
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

    const [alerta, setAlerta] = useState(false);

    function mostrarAlerta(mensagem) {
        if (alerta === false) {
            alert(mensagem)
            setAlerta(true)
        }
    }

    return (
    
        <StyledContatos>
            <h2 className="contato-titulo titulos">QUER QUE TE CHAME?</h2>
            <form action="" id="form" className="formulario">
                <CampoFormulario lacoFor="email" titulo="Email" tipo="email" requerid='required'/>
                <CampoFormulario lacoFor="celular" titulo="Celular" tipo="number" requerid='required'/>
                <input 
                    type="submit" 
                    placeholder="Enviar" 
                    className="enviar" 
                    onClick={ () => {
                        mostrarAlerta('Estou trabalhando no formulário, favor entrar em contato pelo email: leonardowederveiga@yahoo.com')

                    }}
                />
            </form>
        </StyledContatos>
    
    )
}
