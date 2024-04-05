import React from 'react'
import styled from 'styled-components'
 
import {Nav ,NavButton,NavContainer,NavItems ,Span,NavLogo,NavLink} from './navbarStyled'
import { DiCssdeck } from 'react-icons/di';

const Navbar = () => {

  return (
    <Nav>
        <NavContainer>
            <NavLogo>
            <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
            </NavLogo>
            <NavItems>
                <NavLink href='#about'> About</NavLink> 
                <NavLink href='#skills'> Skills</NavLink> 
                <NavLink href='#experience'> Experience</NavLink> 
                <NavLink href='#project'> Project</NavLink> 
                <NavLink href='#service'> Service</NavLink> 
                <NavLink href='#testimonials'> Testimonials</NavLink> 
            </NavItems>
            <NavButton>Github Profile</NavButton>
        </NavContainer>
    </Nav>
  )
}

export default Navbar