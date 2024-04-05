import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import { useEffect, useState } from "react";
import Expericence from "./components/Experience/Expericence";
import Project from "./components/Project/Project";
import Service from "./components/Service/Service";
import Testimonials from "./components/Testimonials/Testimonials";
import useUser from "./hooks/useUser";
import Contact from "./components/Contact/Contact";
 

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  
  const [fetchdata,isPending ,error] = useUser();

  console.log('fetcxh',fetchdata);

   

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills   />
            <Expericence   />
          </Wrapper>
            <Project  />
            <Service    />
            <Testimonials    />
            <Contact />

            <Wrapper></Wrapper>
          
        </Body>
      </ThemeProvider >
    </>
  );
}

export default App;
