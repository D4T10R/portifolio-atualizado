import { Link, useLocation } from "react-router-dom";
import styled from "styled-components"

import curriculo from '../../pages/PaginaInicial/curriculo/Leonardo-Weder-CV.pdf'

import iconeGit from './ApresentacaoPadrao/img/icone-git.svg'
import iconeLinkedin from './ApresentacaoPadrao/img/icone-linkedin.svg'
import iconeEmail from './ApresentacaoPadrao/img/icones-email.svg'


const ApresentacaoSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30vh;
    background: var(--cor-fundo);

    .icones {
        display: flex;
        justify-content: space-evenly;
        width: 150px;
        margin-bottom: 1.5em;
    }

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

        .icone {
            width: 125%;
        }

        .apresentacao__descricao__texto {
            display: none;
        }


    }

    @media screen and (min-width: 1220px) {

        padding-top: 3em;
        flex-direction: row;
        align-items: center;

        .rosto {
            width: 200px;
        }

        .icones {
            width: 240px;
        }

        .icone {
            width: 155%;
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
                    <img src="/img/rosto.svg" alt="" className="rosto"/>
                    <div className='icones'>
                        <Link to="https://mail.yahoo.com/d/compose/6779046311?.intl=br&.lang=pt-BR" target="_blank">
                            <img src={iconeEmail} alt="" className='icone' />
                        </Link>
                        <Link to="https://www.linkedin.com/in/leonardo-weder-veiga-duca-a1bb531b6/" target="_blank">
                            <img src={iconeLinkedin} alt="" className='icone' />
                        </Link>
                        <Link to="https://github.com/D4T10R" target="_blank">
                            <img src={iconeGit} alt="GIT-HUB" className='icone' />
                        </Link>
                    </div>
                </div>
                <div className="apresentacao__descricao">
                    <h1 className="apresentacao__descricao__titulo-principal">DATIOR</h1>
                    <h2 className="apresentacao__descricao__titulo-secundario">Leonardo Weder</h2>
                    <p className="apresentacao__descricao__texto">Olá, sou um front-end. Buscando inovação e evolução.</p>
                    <a
                        className="meu-curriculo"
                        href={curriculo} 
                        target="_blank" rel="noreferrer"
                    >
                        Meu curriculo
                    </a>

                </div>
            </ApresentacaoSection>
        </>
    )
}

export default Apresentacao