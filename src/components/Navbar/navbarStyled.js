
import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom';
export const Nav =styled.div`
     /* display: flex;
     justify-content:center; 
     align-items: center;    */
    position: sticky;
    background-color: ${({theme}) => theme.card_light};
    height: 70px;
    top: 0;
    font-size: 1rem;
    z-index: 100;
    
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }

`
export const NavContainer =styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 24px;
  max-width: 1200px;
  margin: 0 auto;

`
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavLogo =styled(LinkR)`
   max-width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
`
export const NavItems =styled.ul`
 display: flex;
 gap:35px;
 justify-content: center;
 align-items: center;
 max-width: 100%;
 list-style: none;
  
`
export const NavLink =styled.a`
  color:${({theme}) => theme.text_primary};
  list-style: none;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: ${({theme})=> theme.primary};
  }
`
export const NavButton =styled.div`
background-color: transparent;
 border: 1.8px solid ${({theme})=> theme.primary};
 padding: 10px 20px;
 border-radius:20px;
 color:${({theme})=> theme.primary} ;
 height: 70%;
 font-size: 16px;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 font-weight: 500;
 transition: all 0.4s ease-in-out;
 &:hover{
   background-color:${({theme})=> theme.primary};
   color:${({theme})=> theme.white};
 }

`