import styled from "styled-components";

const conjuntoCampoEstilizado = styled.div`

`


function CamposCalculo(props) {

    return (
        <div className="conjunto-campo-numeros">
            <div className="campo-inserir-dados">
                <label htmlFor="lado1">{props.valor1}</label>
                <input 
                    name="lado1" 
                    type="string" 
                    onChange={(event) => props.atualizarValor1(parseFloat(event.target.value))} 
                />
            </div>
        {props.atualizarValor2 && (
            <div className="campo-inserir-dados" >
                <label htmlFor="lado2">{props.valor2}</label>
                <input 
                    name="lado2" 
                    type="string" 
                    onChange={(event) => props.atualizarValor2(parseFloat(event.target.value))}
                />
            </div>
        )}

        {props.atualizarValor3 && (
            <div className="campo-inserir-dados" >
                <label htmlFor="lado3">{props.valor3}</label>
                <input 
                    name="lado3" 
                    type="string" 
                    onChange={(event) => props.atualizarValor3(parseFloat(event.target.value))}
                />
            </div>
        )}
 
        </div>
    
    )
    
}

export default CamposCalculo;
