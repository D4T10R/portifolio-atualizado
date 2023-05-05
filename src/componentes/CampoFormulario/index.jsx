import React from 'react'
import styled from 'styled-components'

const StyledCampoFormulario = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 0.8em 0;


    label {
        text-align: left;
        width: 50%;
        padding: 0.3em 0;
    }

    .inputs__campos input {
        width: 250px;
        background: none;
        border: 0px;
        border-bottom: 2px solid white;
        color: var(--cor-texto);
        padding: 1em;
    }

    .inputs__campos input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;

    }



`

export default function CampoFormulario( { lacoFor, titulo, tipo, requerid = '' } ) {
    return (
    
        <StyledCampoFormulario>
            <label htmlFor={lacoFor}>
                {titulo}
                <div className="inputs__campos">
                    <input type={tipo} name="email" id="email" required={requerid} />
                </div>
            </label>
        </StyledCampoFormulario>
    
    )
}
