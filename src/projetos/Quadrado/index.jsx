import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const JogoEstilo = styled.section`


    background-color: var(--cor-fundo);

    .caixa {
        width: 900px;
        height: 450px;
        margin: 0 auto;
        position: relative;
        background-color: var(--cor-caixa);
    }

    .quadradinho {
        position: absolute;
        z-index: 1;
        height: 45px;
        width: 45px;
        background-color: var(--cor-quadradinho);
    }

    .bolinha {
        position: absolute;
        z-index: 0;
        height: 45px;
        width: 45px;
        background-color: var(--cor-bolinha);
        border-radius: 200px;
    }

    .pontos {
        font-size: 60px;
        text-align: center;
    }

    .pontos strong {
        color: rgb(153, 51, 51);
        font-size: 70px;
    }

    .caixa {
        width: 900px;
        height: 450px;
    }

    .controle {
        display: none;
        position: relative;
        text-align: center;
        width: 300px;
        height: 300px;
        margin: 0 auto;
    }

    .base-controle {
        width: 300px;
        height: 300px;
    }

    .botao-controle {
        position: absolute;
        width: 70px;
        height: 70px;
    }

`

export default function Quadrado() {

    
    const caixaRef = useRef(null)
    const bolaRef = useRef(null)
    const pontoRef = useRef(null)
    const botoesRef = useRef(null)
    const quadradoRef = useRef(null)

    const [pontos, setPontos] = useState(-1);
    const [posicaoLeftQuadrado, setPosicaoLeftQuadrado] = useState(0);
    const [posicaoTopQuadrado, setPosicaoTopQuadrado] = useState(0);

    const [posicaoLeftBola, setPosicaoLeftBola] = useState(0);
    const [posicaoTopBola, setPosicaoTopBola] = useState(0);
    
    
    useEffect(() => {
    
        function teclaPresionada(evento) {
            if (evento.code === "ArrowRight") {
                setPosicaoLeftQuadrado((posicaoAtual) => posicaoAtual + 45)
                posicaoLeftQuadrado >= caixaRef.current.offsetWidth && perdeu();
            }

            else if (evento.code === "ArrowLeft") {
                setPosicaoLeftQuadrado((posicaoAtual) => posicaoAtual - 45)
                posicaoLeftQuadrado < 0 && perdeu()
            }


            else if (evento.code === "ArrowDown") {
                setPosicaoTopQuadrado((posicaoAtual) => posicaoAtual + 45)
                posicaoTopQuadrado >=
                 caixaRef.current.offsetHeight && perdeu()

                
            }

            else if (evento.code === "ArrowUp") {
                setPosicaoTopQuadrado((posicaoAtual) => posicaoAtual - 45)
                posicaoTopQuadrado < 
                0 && perdeu()
            
                
            }           

            if(quadradoRef.current.style.left === bolaRef.current.style.left && quadradoRef.current.style.top === bolaRef.current.style.top) {
                bolinhaAleatorio()
            }   

        }

        document.addEventListener('keydown', teclaPresionada);

        return () => {
            document.removeEventListener('keydown', teclaPresionada);
        };

    }, [])

   /* function movimenta() {
        quadradoRef.style.top = `${posicaoTopQuadrado}px`
        quadradoRef.style.left = `${posicaoLeftQuadra
            do}px`;
    } */

    function perdeu() {
        posicaoTopQuadrado = 0
        posicaoLeftQuadrado = 0
        pontos = 0
        pontoRef.textContent = `pontos: ${pontos}`
        // movimenta()
        alert('perdeu')
    }

    function bolinhaAleatorio() {
        const left = `${Math.floor(Math.random() * (caixaRef.current.offsetWidth / 45)) * 45}px`;
        const top = `${Math.abs(Math.floor(Math.random() * (caixaRef.current.offsetHeight / 45))) * 45}px`;
        setPosicaoTopBola(left);
        setPosicaoLeftBola(top);
        console.log(left, top)
        setPontos(pontos + 1)
        pontoRef.textContent = `pontos: ${pontos}`
    }

    useEffect(() => {
        if (bolaRef.current) {
          bolaRef.current.style.top = posicaoTopBola;
          bolaRef.current.style.left = posicaoLeftBola;
        }
      }, [posicaoTopBola, posicaoLeftBola]);
    

    return (
    
        <JogoEstilo>
             <div className="caixa" ref={caixaRef}>
                <div className="quadradinho" ref={quadradoRef} style={{ top: `${posicaoTopQuadrado}px`, left: `${posicaoLeftQuadrado}px` }}></div>
                <div className="bolinha" ref={bolaRef} style={{top: `${posicaoTopBola}px`,left: `${posicaoLeftBola}px`}}></div>
            </div>

            <p className="pontos" ref={pontoRef}><strong>pontos:</strong> 0</p>

            <div className="controle">
                <img src="../../../img/quadradinho/botao-controle.svg" alt="bt" ref={botoesRef} className="botao-controle botao-cima" style={{left: '115px', top: '30px'}}/>
                <img src="../../../img/quadradinho/botao-controle.svg" alt="bt" ref={botoesRef} className="botao-controle botao-direita" style={{left: '215px', top: '115px'}}/>
                <img src="../../../img/quadradinho/botao-controle.svg" alt="bt" ref={botoesRef} className="botao-controle botao-esquerda" style={{left: '20px;', top: '115px'}}/>
                <img src="../../../img/quadradinho/botao-controle.svg" alt="bt" ref={botoesRef} className="botao-controle botao-direita" style={{left: '115px', top: '200px'}}/>
                <img src="../../../img/quadradinho/base-controle.svg" alt="bt" ref={botoesRef} className="base-controle"/>
                
            </div>

        </JogoEstilo>
    
    )


}
   

   

