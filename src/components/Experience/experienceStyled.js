import styled from 'styled-components'


export const TimeLineSection= styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`

export const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: relative;
    padding-top: 30px;
    padding-bottom:100px;
 
 `

export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
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

