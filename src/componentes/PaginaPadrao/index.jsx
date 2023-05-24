import React from 'react'
import { Outlet } from 'react-router-dom'
import ApresentacaoPadrao from '../Apresentacao/ApresentacaoPadrao'



export default function PaginaPadrao( { funcEsconderOpcoes } ) {

    return (
        <>
            <ApresentacaoPadrao funcEsconderOpcoes={funcEsconderOpcoes}/>
            <main>
                <Outlet/>
            </main>
        </>
  )
}
