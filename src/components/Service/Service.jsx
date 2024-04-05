import React, { useState } from "react";
import { Card, CardContainer, Charge, Container, Desc, Description, Details, Divider, Heading, Image, Title, ToggleButton, ToggleButtonGroup, Wrapper } from "./serviceStyled";
import ServiceCard from "./ServiceCard";

const Service = ({data}) => {
    const { services } = data.user;
    console.log(services);
    const [toggle, setToggle]= useState('all')
  return (
    <Container id="service">
      <Wrapper>
        <Title>Services </Title>
        <Desc> Customized services delivering excellence across all facets</Desc>

        <ToggleButtonGroup>
        {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
            <Divider />
            {toggle === 'Web & App ' ?
            <ToggleButton active value="Web & App " onClick={() => setToggle('Web & App ')}>Web & App </ToggleButton>
            :
            <ToggleButton value="Web & App " onClick={() => setToggle('Web & App ')}>Web & App </ToggleButton>
          }
        
            <Divider />
            {toggle === 'App Development' ?
            <ToggleButton active value="App Development" onClick={() => setToggle('App Development')}>App Development</ToggleButton>
            :
            <ToggleButton value="App Development" onClick={() => setToggle('App Development')}>App Development</ToggleButton>
          }
            <Divider />
           
            {toggle === 'UI/UX Solutions' ?
            <ToggleButton active value="UI/UX Solutions" onClick={() => setToggle('UI/UX Solutions')}>UI/UX Solutions</ToggleButton>
            :
            <ToggleButton value="UI/UX Solutions" onClick={() => setToggle('UI/UX Solutions')}>UI/UX Solutions</ToggleButton>
          }
            <Divider />
           
            {toggle === 'Wordpress Development' ?
            <ToggleButton active value="Wordpress Development" onClick={() => setToggle('Wordpress Development')}>Wordpress Development</ToggleButton>
            :
            <ToggleButton value="Wordpress Development" onClick={() => setToggle('Wordpress Development')}>Wordpress Development</ToggleButton>
          }
        </ToggleButtonGroup>

        <CardContainer>
          {
            toggle=== 'all' && services.map((service, i) => (
              <Card key={i}>
                <Image src={service?.image?.url} />
                <Details>
                   <Heading>{service.name} </Heading>
                   <Description>{service.desc}</Description>
                   <Charge>{service.charge} </Charge>
                </Details>
              </Card>
            ))
          }
             {services
            .filter((item) => item.name == toggle)
            .map((service ,i) => (
              <Card key={i}>
              <Image src={service?.image?.url} />
              <Details>
                 <Heading>{service.name} </Heading>
                 <Description>{service.desc}</Description>
                 <Charge>{service.charge} </Charge>
              </Details>
            </Card>
            ))}


         
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Service;
