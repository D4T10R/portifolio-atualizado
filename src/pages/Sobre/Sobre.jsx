import React, { useRef } from 'react';
import styled from 'styled-components';

//Componentes


const StyledSobre = styled.section`
    background: var(--cor-fundo);
    text-align: center;

    .sobre__titulo {
    }

    .sobre__titulo {
    font-family: var(--font-titulos);
    font-size: 32px; 
    font-weight: 400;
    margin-bottom: 0.5em;
    }

    .sobre__texto {
        width: 90%;
        margin: auto;
        text-align: left;
        font-family: var(--font-texto-apresentacao);
        font-weight: 700;
    }

    .sobre__sub-titulo {
        margin: 1.5em 0 0 0;
    }

    .sobre__video {
        
        width: 90%;
    }

    @media (min-width: 720px) {

        padding: 0 10%;

        .sobre__texto {
            font-size: 18px; 
        }

        .sobre h3 {
            margin-top: 6em;
        }

        iframe {
            margin-top: 5px;
            width: 515px;
            height: 290px;
            border-radius: 50px;
        }


    }

    @media (min-width: 1220px) {

        padding: 0 15%;

        .sobre {
            width: 60%;
            margin: 0 auto;
        }

        .sobre__titulo {
            padding: 0.5em 0 1em 0;
        }

        .sobre__texto {
            font-size: 28px;
        }

        iframe {
            margin-top: 30px;
            width: 850px;
            height: 610px;
            border-radius: 50px;
        }

    }

`




export default function Sobre({funcEsconderOpcoes}) {
    
    function esconderOpcoes () {
        funcEsconderOpcoes()
    }


    return (

        <StyledSobre onClick={ esconderOpcoes}>
            <h2 className="sobre__titulo">Leonardo Weder</h2>
            <p className="sobre__texto">    Olá, sou Leonardo Weder datior. Nasci em Belo Horizonte, mas durante minha infância mudei-me para algumas outras cidades e bairros. Porém, acabei voltando para minha cidade natal aos 16 anos.</p>
            <br/>
            <p className="sobre__texto">Sempre amei tecnologia, mas foi aos 16 anos que comecei a aprender programação de verdade. Minha primeira linguagem foi Python, mas acabei mudando para Java quando descobri aos 17 anos que a faculdade para a qual eu estava me preparando ensinaria Java. Então comecei a estudar Java, SQL, diagramas com UML, prototipação, Scrum e outras coisas que aprendi tanto na faculdade quanto lendo livros.</p>
            <br/>
            <p className="sobre__texto">Ao longo do tempo, adquiri conhecimento em outras áreas da tecnologia, como HTML, CSS e JavaScript. Com essas ferramentas, fui capaz de criar projetos profissionais em várias áreas, incluindo o desenvolvimento web. Recentemente, comecei a me aventurar em projetos de React, o que me permite criar aplicativos web altamente interativos e escaláveis.</p>
            <br/>
            <p className="sobre__texto">Por isso, atualmente tenho vários projetos na área de TI, como meu projeto pessoal no TikTok e uma comunidade no Discord.</p>
        
            <h3 className="sobre__sub-titulo">Apresentação em vídeo</h3>
            <div >
                <iframe  width="350" height="315" src="https://www.youtube.com/embed/6HF-1of_5zQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; " allowFullScreen ></iframe>
            </div>
        </StyledSobre>

    )
}
