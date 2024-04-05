import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Container, Desc, TimeLineSection, Title, Wrapper } from './TestimonialStyled';
import ExpericenceCard from '../Experience/ExpericenceCard';
import TestimonialCard from './TestimonialCard';
const Testimonials = ({data}) => {
    const {testimonials}= data.user
  return (
    <Container id='testimonials'>
    <Wrapper>
      <Title>Expericence</Title>
      <Desc>
        My work experience as a software engineer and working on different
        companies and projects.{" "}
      </Desc>
      <TimeLineSection>
      <Timeline>
                      {testimonials.map((experience,index) => (
                          <TimelineItem>
                              <TimelineSeparator>
                                  <TimelineDot variant="outlined" color="secondary" />
                                  {index !== experience.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                              </TimelineSeparator>
                              <TimelineContent sx={{ py: '12px', px: 2 }}>
                                  <TestimonialCard experience={experience} />
                              </TimelineContent>
                          </TimelineItem>
                      ))}
                  </Timeline>
      </TimeLineSection>
    </Wrapper>
  </Container>
  )
}

export default Testimonials