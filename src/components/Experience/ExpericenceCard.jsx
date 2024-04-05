import React from 'react'
import { Body, Card, Company, Description, Duration, Image, List, Location, Role, Summary, Top } from './experienceCardStyle';
 

const ExpericenceCard = ({experience}) => {
    // console.log(experience.bulletPoints);
  return (
  <Card >
    <Top>
    <Image src={experience?.icon?.url} />
        <Body>
          <Role>{experience.jobTitle} </Role>  
          <Company> {experience.company_name}</Company>  
          <Location> {experience.jobLocation}</Location>  
          <Duration> {experience.startDate.split('T')[0] } to {experience.endDate.split('T')[0] } </Duration>  
        </Body>
    </Top>
        <Description>
            <Summary>{experience.summary}</Summary>
            {experience?.bulletPoints.map((point ,i)=>(
                <List key={i}> •{point}</List>
            ))}

        </Description>
  </Card>
  )
}

export default ExpericenceCard