import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ApresentacaoPadrao from '../Apresentacao/ApresentacaoPadrao'



export default function PaginaPadrao( { funcEsconderOpcoes } ) {

    return (
        <>
            <ApresentacaoPadrao funcEsconderOpcoes={funcEsconderOpcoes}/>
            <Outlet/>
        </>
  )
}
