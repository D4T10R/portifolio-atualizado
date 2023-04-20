import { Link } from "react-router-dom"
import styled from "styled-components"


const LinkProjeto = styled(Link)`
    text-decoration: none;

    .projeto-feito {
        display: flex;
        border-radius: 10px;
        border: 2px solid black;
        box-shadow: 5px 3px 10px black;
        text-align: center;
        gap: 2em;
        background: var(--cor-fundo-projeto);
        height: 7em;
        width: 80%;
        margin: 5% 0 0% 10%;
    }

    .projetos-img{
        display: flex;
        align-items: center;  
        margin-left: 2em;
    }

    .projeto-feito-texto h3 {
        margin-top: 0.5em;
        font-size: 20px;
        color: var(--cor-titulo-projeto);
    }

    .projeto-feito-texto p {
        margin: 0.5em;
        color: var(--cor-texto);
    }

    .projeto__texto-descritivo {
        display: none;
    }

    .projeto-combo__home{
        display: none;
    }

    @media screen and (min-width: 720px) {

        display: block;

        .projeto__texto-descritivo {
            display: block;
        }

        .projetos__div {
            display: flex;
            justify-content: space-evenly;
        }

        .projeto-feito {
            flex-direction: column;
            padding: 2.5em 1em 0 1em;
            margin: 1em;
            gap: 0;
            width: 300px;
            height: 430px;
            
        }   

        .projeto-feito h3 {
            top: -188%;
        }
        
        .projetos-img {
            margin: 0;
            border: 2px solid black;
        }

        .projetos-img img {
            width: 120%;
        }

        .projeto-feito-texto h3 {
            position: relative;
            margin: 0.3em 0 0 0;
            top: -190%;
            font-size: 24px;
        }


        .projeto-feito-texto p {
            position: relative;
            top: -15%;
        }

        .projeto-feito-texto p:nth-of-type(1) {
            color: var(--cor-titulos);
        }

        .projeto-texto__explicativo {
            font-size: 18px;
        }


    }



    @media screen and (min-width: 1220px) {

        width: 350px;

        a:last-child {
            display: block;
        }

        .projetos__div {
            justify-content: center;
            gap: 5em;
        }
    
        .projeto-feito {
            width: 300px;
            height: 430px;
        }   

    }


`

const ProjetosFeitos = ({href, src, alt, titulo, frase, descricao}) => {

    return (
    
    <LinkProjeto to={href} >
            <div className="projeto-feito projeto-um">
                <div className="projetos-img">
                    <img src={src} alt={alt} />
                </div>
                <div className="projeto-feito-texto">
                    <h3 id="titulo-projeto-combo">{titulo}</h3>
                    <p>{frase}</p>
                    <p className="projeto__texto-descritivo">{descricao}</p>
                </div>
            </div>
        </LinkProjeto>
    )
}

export default ProjetosFeitos