import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Calculadora from "./Calculadora";
import Quadrado from "./Quadrado"
import Calculos from "./Geometria"

const projetos = [
    {
        id: 'Calculadora',
        element: Calculadora
    },
    {
        id: 'Quadrado',
        element: Quadrado
    },
    {
        id: "Geometria", 
        element: Calculos
    }
]

function buscarProjetoPorId(id) {
    const projetoElemeto = projetos.find(projeto => projeto.id === id)
    return projetoElemeto
}

export default function ProjetoEscolhido() {
  
    const { id } = useParams();
    const [Projeto, setProjeto] = useState(null);
  
    useEffect(() => {
      const projetoEncontrado = buscarProjetoPorId(id);
  
      setProjeto(projetoEncontrado);
    }, [id]);
  
    if (!Projeto) {
      return <div>Carregando...</div>;
    }
  
    return (
        <div>
            {Projeto && <Projeto.element/> }
        </div>
    )
}