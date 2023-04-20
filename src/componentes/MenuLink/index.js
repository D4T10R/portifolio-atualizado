import React from 'react'
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`

export default function MenuLink({ children, to }) {

    const localAtual = useLocation()


    return (
        <StyledLink
            to={to}
        >
            {children}
        </StyledLink>
    )
}
