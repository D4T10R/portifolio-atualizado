import { useState } from "react";
import styled from "styled-components"


const CalculadoraEstilo = styled.section`
    
    @keyframes textoAparecendo {
        from {font-size: 0px;}
        to {font-size: 40px;}
    }
    
    background: var(--cor-de-fundo-calculadora);
    height: 100vh;

    .titulo {
        display: block;
        text-align: center;
        margin: 2em 0;
        font-size: 40px;
        animation-name: textoAparecendo;
        animation-duration: 2s;
    }
    
    .titulo.style {
        animation: 0.7s ease-in 1s 1 normal both running tracking-in-expand;
    }

    .calculadora {
        height: 600px;
        text-align: center;
        margin: 0 auto;
        padding: 1em;
        background-image: var(--cor-calculadora);
        border-radius: 30px;
        border: 0.5em solid var(--cor-borda-calculadora);
    }
    
    .calculadora h2 {
        text-transform: uppercase;
    }
    
    .calculadora p {
        display: flex;
        height: 40px;
        margin: 1em 0;
        padding-right: 0.5em;
        justify-content: right;
        align-items: center;
        background-color: var(--cor-teclas-calculadora);
        border: 2px solid;
        border-radius: 10px;
        color: black;
        font-size: 20px;
        font-weight: 900;
    }
    
    .botao {
        font-size: 35px;
        cursor: pointer;
        border: 1px solid;
        background: var(--cor-teclas-calculadora);
        transition-duration: 0.5s;
    }
    
    .botao:hover {
        background: var(--cor-teclas-destacadas-calculadora);
    }
  
    
    
    @media screen and (max-width: 430px) {
        .calculadora {
            width: 250px;
            height: 440px;
        }
        .calculadora__tabela td{
            padding: 0em;
        }
        .botao {
            width: 60px;
            height: 60px;
        }
        .botao-resultado {
            height: 120px;
        }
        
        .botao-zero {
            width: 120px;
        }
    }
    @media screen and (min-width: 430px) {
        .calculadora {
            width: 400px;
        }
        .calculadora__tabela td{
            padding: 0.5em;
        }
        .botao {
            width: 80px;
            height: 80px;
        }
        .botao-resultado {
            height: 180px;
        }
        
        .botao-zero {
            width: 180px;
        }
    }
    
    `

export default function Calculadora() {

    const [campoExibicao, setCampoExibicao] = useState("");
    
    const paraCadaClickBotao = (tecla) => {
      if (tecla === "x") {
        inserir("*");
      } else {
        inserir(tecla);
        console.log(tecla)
      }
    };
  
    const inserir = (tecla) => {
      setCampoExibicao((campoExibicao) => campoExibicao + tecla);
    };
  
    const limpa = () => {
      setCampoExibicao("");
    };
  
    const apaga = () => {
      setCampoExibicao((campoExibicao) =>
        campoExibicao.slice(0, campoExibicao.length - 1)
      );
    };
  
    const calcular = () => {
      setCampoExibicao(eval(campoExibicao).toString());
    };
  

    return (
        <CalculadoraEstilo>
            <div className="conjunto-principal">
                <a href="../../../html/projetos.html" className="voltar">←</a>
                <h1 className="titulo">DATIOR CALCULADORA</h1>
            </div>


            <div className="calculadora">
                <h2>Calculadora</h2>
                <p id="campo-impressao">{campoExibicao}</p>
            
                <table className="calculadora__tabela">
                    <tbody>
                        <tr>
                            <td><button className="botao" onClick={limpa}>c</button></td>
                            <td><button className="botao" onClick={apaga}>{'<'}</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("/")}>/</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("x")}>x</button></td>
                        </tr>

                        <tr>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("7")}>7</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("8")}>8</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("9")}>9</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("+")}>+</button></td>
                        </tr>

                        <tr>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("4")}>4</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("5")}>5</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("6")}>6</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("-")}>-</button></td>
                        </tr>

                        <tr>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("1")}>1</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("2")}>2</button></td>
                            <td><button className="botao teclado-exibicao"  onClick={() => paraCadaClickBotao("3")}>3</button></td>
                            <td rowSpan="2"><button className="botao botao-resultado" onClick={calcular}>=</button></td>
                        </tr>

                        <tr>
                            <td colSpan="2"><button className="botao botao-zero teclado-exibicao" onClick={() => paraCadaClickBotao("0")}>0</button></td>
                            <td><button className="botao teclado-exibicao" onClick={() => paraCadaClickBotao(".")}>.</button></td>
                        
                        </tr>
                    </tbody>

                </table>

            </div>

        </CalculadoraEstilo>
    )
}