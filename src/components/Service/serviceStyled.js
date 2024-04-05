import styled from "styled-components"
 
export const Container=styled.div`
   margin-top: 60px;
   padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    
`

export const Wrapper = styled.div`
max-width: 1100px;
position: relative;
 text-align: center;
 width: 100%;

`
export const Title = styled.h1`
margin-top: 20px;
font-size: 42px;
font-weight: 600;
color: ${({theme})=>theme.text_primary};

@media (max-width:768px){
    margin-top: 15px;
    font-size: 32px;
}

`
export const Desc = styled.p`
color: ${({theme})=>theme.text_secondary};
font-size: 18px;
font-weight: 600;
margin-top: 15px;

@media (max-width: 768px) {
    font-size: 16px;
}
`
export const ToggleButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    margin: 0 auto;
    margin-top:20px;
    
    color: ${({theme})=> theme.primary};
    border: 1.5px solid ${({theme})=> theme.primary}; 
   
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
     &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`


export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    margin-top: 40px;

    @media (max-width: 768px) {
    font-size: 16px;
    grid-template-columns: repeat(1,1fr);
}
 
    
`;
export const Card = styled.div`
 text-align: start;
 background-color: ${({ theme }) => theme.card};
 padding: 20px 20px;
 border-radius: 10px;

`

export const Details = styled.div`
margin-top:20px;
`

export const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`
export const Heading = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
 
  
`
export const Description = styled.div`
        font-weight: 400;
        color: ${({ theme }) => theme.text_secondary + 99};
        margin-top: 5px;
      
`
export const Charge = styled.h4`
        font-weight: 400;
        color: ${({ theme }) => theme.white};
        margin-top: 8px;
`

 