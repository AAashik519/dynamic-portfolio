import React from "react";
import {
  Container,
  Desc,
  SkillImage,
  SkillItem,
  SkillList,
  SkillName,
  SkillsContainer,
  Title,
  Wrapper,
} from "./skillsStyled";
import useUser from "../../hooks/useUser";

const Skills = () => {

  const [fetchdata] = useUser();
  const {skills} = fetchdata.user
  // console.log(skills[0].image.url);
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 5 years.{" "}
        </Desc>
        <SkillsContainer>
          <SkillList>
          {skills.map((skill ,i) => (
            <SkillItem key={i}>
              <SkillImage src={skill.image.url} />
               <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
          </SkillList>
         
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
