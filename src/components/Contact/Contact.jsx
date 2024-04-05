import React, { useState } from 'react'


import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  @media (max-width:768px){

    padding: 0 15px;
}
`;
const  Wrapper = styled.div`
max-width: 900px;
margin: 0 auto;
position: relative;
 text-align: center;
 width: 100%;

`
const Title = styled.h1`
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
const Desc = styled.p`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
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

`;
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send data to server
        console.log(formData);
        // Reset form fields after submission
        setFormData({ name: '', email: '', message: '' });
      }
  return (
        <Wrapper id='contact'>
        <Title>Contact Us</Title>
        <Desc>
          If you have any queries ? Feel free to contact us.
        </Desc>
    <FormContainer>
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextArea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
      ></TextArea>
      <Button type="submit">Submit</Button>
    </Form>
     
  </FormContainer>
        </Wrapper>
  )
}

export default Contact