import React from 'react'
import { Body, Card, Company, Image, Role, Summary, Top } from './TestimonialStyled'

const TestimonialCard = ({experience}) => {
  return (
    <Card>
    <Top>
    <Image src={experience?.image?.url} />
        <Body>
          <Role>{experience.name} </Role>  
          <Company> {experience.position}</Company>  
          <Summary>{experience.review}</Summary> 
          
        </Body>
    </Top>
      
  </Card>
  )
}

export default TestimonialCard