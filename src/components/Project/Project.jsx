import React from "react";
import {
  Card,
  Container,
  Desc,
  Description,
  Details,
  Heading,
  Image,
  ProjectCard,
  Tag,
  Tags,
  Title,
  Wrapper,
} from "./projectStyled";
import useUser from "../../hooks/useUser";

const Project = () => {
  const [fetchdata ] = useUser();

  const { projects } = fetchdata.user;
  // console.log(projects);

  return (
    <Container id='project'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ProjectCard>
          {projects.map((project, i) => (
            <Card key={i}>
              <Image src={project.image.url} />
              <Tags>
                {project.techStack?.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
              <Details>
                 <Heading>{project.title} </Heading>
                 <Description>{project.description}</Description>
              </Details>
            </Card>
          ))}
        </ProjectCard>
      </Wrapper>
    </Container>
  );
};

export default Project;
