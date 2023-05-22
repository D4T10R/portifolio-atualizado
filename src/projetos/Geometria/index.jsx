import React, { useRef, useState } from "react"
import styled from "styled-components"
import CalculoGeometrico from "./componentes/calculoGeometrico/calculoGeometrico";

const GeometriaEstilo = styled.div`
    background-color: var(--cor-fundo);
    padding: 2em 0;

    section {
        text-align: center;
    }

    .conjuto-calculos {
        display: flex;
        padding: 2em 0;
        justify-content: space-evenly;
        list-style: none;
    }

    .escolha-calculo {
        background: none;
        border: none;
        text-transform: uppercase;
        color: white;
        font-size: 24px;
        font-weight: 600;
    }
    
`

function Geometria() {
    
    return (
        <GeometriaEstilo>
            <section>
                <h2>Calcular área</h2>

                <ul className="conjuto-calculos">
                    
                    <CalculoGeometrico 
                        titulo="TRIANGULO EQUILÁTERO"
                        valor1="BASE"
                        valor2="ALTURA"
                        forma="triangulo-equilatero"
                    />

                    <CalculoGeometrico 
                        titulo="TRIANGULO ESCALENO"
                        valor1="LADO 1"
                        valor2="LADO 2"
                        valor3="LADO 3"
                        forma="triangulo"
                    />

                    <CalculoGeometrico 
                        titulo="QUADRADO"
                        valor1="BASE"
                        valor2="ALTURA"
                        forma="quadrado"
                    />

                    <CalculoGeometrico 
                        titulo="PENTÁGONO"
                        valor1="TAMANHO LADOS"
                        valor2="APÓTEMA"
                        forma="pentagono"
                    />
                   
                    <CalculoGeometrico 
                        titulo="HEXÁGONO"
                        valor1="TAMANHO DOS LADOs"
                        forma="hexagono"
                    />

                </ul>

          
            </section>


        
        </GeometriaEstilo>
    )

}

export default Geometria