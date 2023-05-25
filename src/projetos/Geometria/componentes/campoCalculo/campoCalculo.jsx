import styled from "styled-components";

const ConjuntoCampoEstilizado = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2em;

    .campo-inserir-dados {
        display: inline-block;
        margin-top: 3em;
        width: 40%;
    }
    .campo-inserir-dados input {
        margin: 0 2%;
        width: 65%;
        text-align: center;
        font-size: 20px;
        color: white;
        outline: none; /* remove a borda de seleção */
        background: none;
        border: none;
        border-bottom: 2px solid white;
    }
    .resultado {
        margin-top: 1em;
    }
`
function CamposCalculo(props) {
    return (
        <ConjuntoCampoEstilizado>
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
 
        </ConjuntoCampoEstilizado>
    
    )
    
}

export default CamposCalculo;
