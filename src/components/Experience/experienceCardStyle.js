import styled from "styled-components";

export const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
export const Card = styled.div`
  margin-top: 20px;
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

  @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

`;
export const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Role = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Company = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Location = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Description = styled.div``;
export const Summary = styled.div`
  text-align: start;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const List = styled.div`
  text-align: start;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
