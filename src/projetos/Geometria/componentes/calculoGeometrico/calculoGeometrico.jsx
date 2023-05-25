import { useRef, useState } from "react";
import styled from "styled-components";
import CampoCalculo from "../campoCalculo/campoCalculo";
import CamposCalculo from "../campoCalculo/campoCalculo";

const CalculoEstilo = styled.li`
    display: inline-block;

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
        left: 25%;
        top: 30%;
        display: flex;
        width: 50%;
        height: 50%;
        background: #080959;
        border-radius: 30px;
        border: 2px solid black;
    }

    .campo-texto p {
        font-size: 30px; 
        width: 10%;
        margin: 10px 0 0 auto;
    }

    .formulario {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .formulario button {
        margin-top: 1em;
        width: 150px;
        height: 40px;
        background: #700565;
        box-shadow: 10px 10px 30px #700565b3;
        border-radius: 20px;
        border: 1px solid black;        
        color: white;
        font-size: 20px;
    }

    .formulario button:hover {
        background: #8a0f7e;
        font-weight: 600;
    }
`

function CalculoGeometrico(props) {

    const QuadradoCalculoRef = useRef(null);
    const [calculo, setCalculo] = useState(0)
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)
    const [valor3, setValor3] = useState(0)

    function atualizarValor1(valor) {
        setValor1(valor)
    }
    function atualizarValor2(valor) {
        setValor2(valor)
    }
   
    function atualizarValor3(valor) {
        setValor3(valor)
    }

    function calcular(event) {
        event.preventDefault();
        if (props.forma == 'quadrado' || props.forma == 'triangulo-equilatero') {
            setCalculo(valor1 * valor2)
        } else if (props.forma == 'triangulo-escaleno') {
            let semiPerimeto = valor1 + valor2 + valor3 / 2
            setCalculo(Math.trunc(Math.sqrt(semiPerimeto * (semiPerimeto - valor1) * (semiPerimeto - valor2) * (semiPerimeto - valor3))))
        } else if (props.forma == 'pentagono') {
            setCalculo(valor1 * 5 / 2 * valor2)
        } else if (props.forma == 'hexagono') {
            let valor = 6 * (valor1 * valor1) / 4
            setCalculo(valor.toString() + '.√3')
        } else {
            setCalculo(0); // caso forma não seja 'quadrado'
        }
    }

    function calcularArea() {
        console.log(QuadradoCalculoRef.current.style.display)
        if (QuadradoCalculoRef.current.style.display != 'block') {
            QuadradoCalculoRef.current.style.display = 'block'
        }
    }

    function someCalcularArea() {
        QuadradoCalculoRef.current.style.display = 'none'
    }

    return (
        <CalculoEstilo>
            <button className="escolha-calculo" onClick={calcularArea}>
                {props.titulo}
            </button>
            <div 
                className="campo-texto" 
                ref={QuadradoCalculoRef} 
                style={{display: 'none'}}
            >
                <p onClick={someCalcularArea}>X</p>
                
                <form 
                    action="" 
                    onSubmit={calcular} 
                    className="formulario"
                >
                    { props.valor1 != null && props.valor2 != null && props.valor3 != null ? 
                        (
                            <CamposCalculo 
                                valor1={props.valor1}
                                valor2={props.valor2}
                                valor3={props.valor3}
                                atualizarValor1={atualizarValor1}
                                atualizarValor2={atualizarValor2}
                                atualizarValor3={atualizarValor3}

                            />
                        ) : ''
                    }

                    { props.valor2 != null && props.valor1 != null && props.valor3 == null ? 
                        (
                            <CamposCalculo 
                                valor1={props.valor1}
                                valor2={props.valor2}
                                atualizarValor1={atualizarValor1}
                                atualizarValor2={atualizarValor2}
                            />
                        ) : ''
                    }
                    
                    { props.valor1 != null && props.valor2 == null && props.valor3 == null ? 
                        (
                            <CamposCalculo 
                                valor1={props.valor1}
                                valor2={props.valor2}
                                atualizarValor1={atualizarValor1}
                            />
                        ) : ''
                    }
                
                    <button type="submit">Enviar</button>
                </form>

                {
                    calculo ? <h2 className="resultado">{calculo}mº</h2> : ''
                }
                
            </div>
        </CalculoEstilo>
    )
}

export default CalculoGeometrico;