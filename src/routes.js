import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';
import { GlobalStyle } from './globalStyle';

// Paginas
import Header from '../src/componentes/Header';
import PaginaPadrao from '../src/componentes/PaginaPadrao'
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';
import Sobre from './pages/Sobre/Sobre'
import Footer from './componentes/Footer';
import Skills from './pages/Skills/Skill';
import Projetos from './pages/Projetos';
import PaginaErro from './pages/PaginaErro';
import Contatos from './pages/Contatos';
import ProjetoEscolhido from './projetos';


function AppRoutes() {

  const elementoFilhoRef = useRef(null);

  function mostrarOpcoes() {
    elementoFilhoRef.current.style.display = 'block'
  }

  function esconderOpcoes() {
    if (window.innerWidth < 1220) {
      elementoFilhoRef.current.style.display = 'none'
    }
  }


  return (

    <BrowserRouter>
        <GlobalStyle />

        <Header 
          opcoesRef={elementoFilhoRef}
          funcMostrarOpcoes={mostrarOpcoes}  
        />
        
        <Routes>
          <Route path='/' element={<PaginaInicial funcEsconderOpcoes={esconderOpcoes}/>} />
          <Route path='/' element={<PaginaPadrao funcEsconderOpcoes={esconderOpcoes}/>}>
            <Route path='/sobre' element={<Sobre funcEsconderOpcoes={esconderOpcoes}/>}/>
            <Route path='/skills' element={<Skills funcEsconderOpcoes={esconderOpcoes}/>}/>
            <Route path='/projetos' element={<Projetos funcEsconderOpcoes={esconderOpcoes}/>}/>
            <Route path='/projetos/:id' element={<ProjetoEscolhido />}/>

            <Route path='/contatos' element={<Contatos funcEsconderOpcoes={esconderOpcoes}/>}/>
          </Route>
          <Route path='*' element={<PaginaErro funcEsconderOpcoes={esconderOpcoes}/>}/>
        </Routes>

        <Footer />
    </BrowserRouter>


  );
}

export default AppRoutes;


