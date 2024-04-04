import React from "react";
import {
  Container,
  Desc,
  TimeLineSection,
  Title,
  Wrapper,
} from "./experienceStyled";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import ExpericenceCard from "./ExpericenceCard";

const Expericence = ({ data }) => {
  const { timeline } = data.user;
  console.log(timeline);
  return (
    <Container>
      <Wrapper>
        <Title>Expericence</Title>
        <Desc>
          My work experience as a software engineer and working on different
          companies and projects.{" "}
        </Desc>
        <TimeLineSection>
        <Timeline>
                        {timeline.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experience.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExpericenceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};

export default Expericence;
