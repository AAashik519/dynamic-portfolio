import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Container,
  Desc,
  SliderCard,
  TimeLineSection,
  Title,
  Wrapper,
} from "./TestimonialStyled";
import ExpericenceCard from "../Experience/ExpericenceCard";
import TestimonialCard from "./TestimonialCard";
import useUser from "../../hooks/useUser";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/pagination";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const [fetchdata] = useUser();

  const { testimonials } = fetchdata.user;
  console.log(testimonials);

  return (
    <Container id="testimonials">
      <Wrapper>
        <Title>Testimonials</Title>
        <Desc>
          My work experience as a software engineer and working on different
          companies and projects.{" "}
        </Desc>
        {/* <TimeLineSection>
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
      </TimeLineSection> */}
      <SliderCard >
      <Swiper navigation={true} modules={[Navigation]}  className="mySwiper">
          {testimonials.map((experience, index) => (
            <SwiperSlide key={index}><TestimonialCard experience={experience} />  </SwiperSlide>
          ))}

       
        </Swiper>
      </SliderCard>

      
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
