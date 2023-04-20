import { useLocation } from "react-router-dom";
import styled from "styled-components"

import curriculo from '../../pages/PaginaInicial/curriculo/Leonardo-Weder-CV.pdf'

const ApresentacaoSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30vh;
    background: var(--cor-fundo);

    .apresentacao__descricao {
        text-align: center;
    }

    .apresentacao__descricao__titulo-principal {
        font-family: var(--font-titulos);
        font-size: 32px;
        font-weight: 800;
        color: var(--cor-titulos);
    }

    .apresentacao__descricao__titulo-secundario {
        font-family: var(--font-titulos);
        font-size: 32px;
        font-weight: 400;
        margin: 0.3em 0;
    }

    .apresentacao__descricao__texto {
        font-family: var(--font-texto-apresentacao);
        font-weight: 700;

    }

    .meu-curriculo {
        display: none
    }

    @media screen and (min-width: 720px) {
    
        flex-direction: column;
        text-align: center;
        padding-bottom: 2em;

        .apresentacao__descricao__texto {
            display: none;
        }

    }

    @media screen and (min-width: 1220px) {

        padding-top: 3em;
        flex-direction: row;
        align-items: center;

        .apresentacao__imagem img {
            width: 200px;
        }

        .apresentacao__descricao {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .apresentacao__descricao__titulo-principal {
            font-size: 64px;
        }

        .apresentacao__descricao__texto {
            display: block;
            font-size: 24px;
            width: 60%;
        }

        .meu-curriculo {
            display: block;
            margin-top: 2em;
            background-color: var(--cor-fundo-fundo);
            padding: 1em;
            width: 40%;
            border-radius: 50px;
            font-size: 20px;
            font-weight: 600;
            color: var(--cor-fundo);
            text-decoration: none;
            text-transform: uppercase;
        }
        
    }

`

const Apresentacao = () => {

    const localAtual = useLocation();

    if (localAtual === '/sobre') {
        
    }


    return (
        <>
            <ApresentacaoSection>

                <div className="apresentacao__imagem">
                    <img src="/img/rosto.svg" alt="" />
                </div>
                <div className="apresentacao__descricao">
                    <h1 className="apresentacao__descricao__titulo-principal">DATIOR</h1>
                    <h2 className="apresentacao__descricao__titulo-secundario">Leonardo Weder</h2>
                    <p className="apresentacao__descricao__texto">Olá, sou um front-end. Buscando inovação e evolução.</p>
                    <a 
                        className="meu-curriculo"
                        href={curriculo} 
                        download='Leonardo-Weder-CV.pdf'                
                    >
                        Meu curriculo
                    </a>
                </div>
            </ApresentacaoSection>
        </>
    )
}

export default Apresentacao