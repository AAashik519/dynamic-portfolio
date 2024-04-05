 import React from 'react'
 import Typewritter from 'typewriter-effect'
import {HeroContainer,HeroBg,HeroInnerContainer,HeroLeftContainer,HeroRightContainer,Img,Span,TextLoop,Title, Description} from './heroContainerStyled'
import HeroBgAnnimation from './HeroBgAnnimation'
import useUser from '../../hooks/useUser'
 
 const HeroSection = () => {
   
  const [fetchdata,isPending ,error] = useUser();
  
  const {name, title,description ,avatar }= fetchdata.user.about

  console.log(name ,title);
  
   return (
     <div id='about'>
        <HeroContainer>
            <HeroBg>
              <HeroBgAnnimation />
            </HeroBg>
            <HeroInnerContainer>
                <HeroLeftContainer id='Left'>
                  <Title> Hi , I am  <Span> {name} </Span> </Title>
                  <TextLoop >
                    I am a 
                    <Span>
                      <Typewritter 
                        options={{
                          strings:'Software Engineer',
                          autoStart:true,
                          loop:true
                        }}
                      />
                    </Span>
                  </TextLoop>
                  <Description>{description}</Description>
                </HeroLeftContainer>
                <HeroRightContainer>
                      <Img src={avatar.url} alt='hero' />
                </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer>
     </div>
   )
 }
 
 export default HeroSection