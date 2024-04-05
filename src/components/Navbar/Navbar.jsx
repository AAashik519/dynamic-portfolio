import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';
import {Nav ,NavButton,NavContainer,NavItems ,Span,NavLogo,NavLink, MobileMenu, MobileLink, MobileIcon, ButtonContainer} from './navbarStyled'
import { DiCssdeck } from 'react-icons/di';
import useUser from '../../hooks/useUser';

const Navbar = () => {
  const [isOpen, setIsOpen] =useState(false);
  const [fetchdata ] = useUser();

  const { username } = fetchdata.user;
  return (
    <Nav>
        <NavContainer>
            <NavLogo>
            <a  style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>{username}</Span>
          </a>
            </NavLogo>
            <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>

            <NavItems>
                <NavLink href='#about'> About</NavLink> 
                <NavLink href='#skills'> Skills</NavLink> 
                <NavLink href='#experience'> Experience</NavLink> 
                <NavLink href='#project'> Project</NavLink> 
                <NavLink href='#service'> Service</NavLink> 
                <NavLink href='#testimonials'> Testimonials</NavLink> 
                <NavLink href='#contact'> Contact </NavLink> 
            </NavItems>
            <ButtonContainer>
            <NavButton>Github Profile</NavButton>
        </ButtonContainer>

            {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#service' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#testimonials' onClick={() => {
              setIsOpen(!isOpen)
            }}>Testimonials</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact </MobileLink>
       <NavButton>Github Profile</NavButton>
          </MobileMenu>
        }
        </NavContainer>
    </Nav>
  )
}

export default Navbar