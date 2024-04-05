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
width: 100%;
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
width: 100%;

@media (max-width: 768px) {
    font-size: 16px;
    padding: 0 30px;
    text-align: justify;
}
`
export const ProjectCard = styled.div`
   display :grid ;
   grid-template-columns: repeat(3 , 1fr) ;
   gap: 20px;
   margin-top: 50px;

   @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr) ;
   
}
   
`
export const Card = styled.div`
     background-color: ${({ theme }) => theme.card};
     width: 330px;
    height: 430px;
     padding: 26px 20px;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    margin: 10px auto;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
 

`
export const Image = styled.img`
  width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`
export const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

export const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

export const Details=styled.div`
padding: 10px;
 margin-top: 20px;
 text-align: start;
`

export const Heading = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
`
export const Description=styled.p`
font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`
