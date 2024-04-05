import styled from "styled-components";


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
    padding:0 10px;
}
`

export const SkillsContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const SkillList= styled.div`
  margin:60px 0;
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
   
`
export const SkillItem= styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
 margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`
export const SkillImage= styled.img`
  width: 42px;
  height: 42px;
`
export const SkillName= styled.div`
color:  ${({ theme }) => theme.text_primary };;
`