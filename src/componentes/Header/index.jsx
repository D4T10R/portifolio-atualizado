import styled from "styled-components"

import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import MenuLink from "../MenuLink";


const ConjuntoOpcoes = styled.div`

        display: none;
        position: fixed;
        background: #2D3061;
        border: 5px solid black;
        padding: 1em 0 0 1em    ;
        width: 50%;
        top: 1%;
        border-radius: 10px;
        
        li:hover {
                color: red;
        }

        ul {
                list-style-type: none;
        }

        li {
                display: flex;
                flex-direction: column;
                font-family: 'Nova Round', cursive;
                font-size: 32px;
                margin-bottom: 0.3em;
                text-align: center;
        }

        @media screen and (min-width: 720px) {
                z-index: 1;
                text-align: right;
                padding: 0 1em;
                right: 1%;
                width: 18%;
        }
      
        @media screen and (min-width: 1220px) {
                right: 1%;
                position: fixed;
                background-color: var(--cor-fundo);
                display: block;
                border: none;
                box-sizing: none;
                padding: 1em 0;
                width: 80%;
                text-align: right;

                ul {
                        display: flex;
                }

                li {
                        margin: 0 0.5em;
                        text-transform: uppercase;
                }

        }

        @media screen and (min-width: 1440px) {
                width: 70%;
        } 

        @media screen and (min-width: 1555px) {
                width: 65%;
        }
`
const Cabecalho = styled.header`
        background: var(--cor-fundo);
        border-radius: 10px 10px 0px 0px;
        height: 4em;

        span {
                position: fixed;
                color: white;
                font-size: 4em;
        }

        @media screen and (min-width: 720px) {
                span {
                        position: fixed;
                        right: 1%;
                }
        }

        @media screen and (min-width: 1220px) {
                span {
                        display: none;
                }
        }

`

function Header({opcoesRef, funcMostrarOpcoes}) {

        function mostrarOpcoes() {
                funcMostrarOpcoes()
        }

        return (
             
                <Cabecalho>
                        <Helmet>
                                <link
                                        rel="stylesheet"
                                        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                                />
                        </Helmet>

                        <span 
                                className="material-symbols-outlined" 
                                id="icone-menu"
                                onClick={mostrarOpcoes}
                        > menu </span>

                        <ConjuntoOpcoes ref={opcoesRef} >
                                <ul>
                                        <li>
                                                <MenuLink
                                                        to='/'
                                                >
                                                        Home
                                                </MenuLink>
                                        </li>
                                        <li>
                                                <MenuLink
                                                        to='/sobre'
                                                >
                                                        Sobre
                                                </MenuLink>
                                        </li>
                                        <li>
                                                <MenuLink
                                                        to='/skills'
                                                >
                                                        Skills
                                                </MenuLink>
                                        </li>
                                        <li>
                                                <MenuLink
                                                        to='/projetos'
                                                >
                                                        Projetos
                                                </MenuLink>
                                        </li>
                                        <li>
                                                <MenuLink
                                                        to='/Contatos'
                                                >
                                                        Contatos
                                                </MenuLink>
                                        </li>
                                        <li>
                                                <MenuLink 
                                                        to='/certificados'
                                                >
                                                        Certificados
                                                </MenuLink>
                                        </li>
                                </ul>
                        </ConjuntoOpcoes>
                </Cabecalho>
                
        )
}

export default Header

        
