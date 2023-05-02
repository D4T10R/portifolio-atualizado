import React, { useRef, useState } from "react"
import styled from "styled-components"

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

    .conjunto-calculos  li {
        display: inline-block;
    }

    .escolha-calculo {
        background: none;
        border: none;
        text-transform: uppercase;
        color: white;
        font-size: 24px;
        font-weight: 600;
    }
    
    .campo-texto {
        position: absolute;
        left: 30%;
        top: 30%;
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 30%;
        background: #080959;
        border-radius: 30px;
        border: 2px solid black;
    }

    .campo-inserir-dados {
        display: inline-block;
        margin-top: 3em;
        width: 40%;
    }

    .campo-inserir-dados input {
        margin: 0 2%;
        width: 70%;
        text-align: center;
        font-size: 20px;
        color: white;
        outline: none; /* remove a borda de seleção */
        background: none;
        border: none;
        border-bottom: 2px solid white;
    }

    .formulario {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .formulario button {
        margin-top: 1em;
        background: none;
        border: none;        
        color: white;
        font-size: 20px;
    }

    .formulario button:hover {
        color: green;
    }

    .resultado {
        margin-top: 1em;
    }

`

function Geometria() {

    const QuadradoCalculoRef = useRef(null);
    const [calculo, setCalculo] = useState(0)
    const [base, setBase] = useState(0)
    const [altura, setAltura] = useState(0)

    function calcular(event) {
        event.preventDefault()
        setCalculo(base * altura)
    }

    function calcularArea() {

        QuadradoCalculoRef.current.style.display = 'block'

    }

    function someCalcularArea() {
        QuadradoCalculoRef.current.style.display = 'none'
    }

    return (
        <GeometriaEstilo>
            <section>
                <h2>Calcular área</h2>

                <ul className="conjuto-calculos">
                    
                    <li>
                        <button className="escolha-calculo" onClick={calcularArea}>
                            Quadrado
                        </button>
                        <div className="campo-texto" ref={QuadradoCalculoRef} style={{display: 'none'}}>
                            <p onClick={someCalcularArea} style={{fontSize: '30px', width: '10%', margin: '10px 0 0 auto'}}>X</p>
                            
                            <form action="" onSubmit={calcular} className="formulario">
                                <div className="campo-inserir-dados">
                                    <label htmlFor="base">Base:</label>
                                    <input name="base" type="number" onChange={(event) => setBase(event.target.value)} />
                                </div>
                                <div className="campo-inserir-dados" >
                                    <label htmlFor="altura">Altura:</label>
                                    <input name="altura" type="number" onChange={(event) => setAltura(event.target.value)}/>
                                </div>
                                <button type="submit">Enviar</button>
                            </form>

                            {
                                calculo && <h2 className="resultado">{calculo}mº</h2>
                            }
                            
                        </div>
                    </li>

                    <li>
                        <button className="escolha-calculo">Quadrado</button>
                    </li>
                    <li>
                        <button className="escolha-calculo">Quadrado</button>
                    </li>
                    <li>
                        <button className="escolha-calculo">Quadrado</button>
                    </li>
                </ul>

          
            </section>


        
        </GeometriaEstilo>
    )

}

export default Geometria