import React, { Component } from "react";

import styled from "styled-components";
import "../styles/index.scss";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;

  p {
    color: white;
  }

  a {
    color: skyblue;
    text-decoration: none;
    font-weight: 900;
  }
`;

const Title = styled.p`
  font-size: calc(1.5rem + 1vw);
  font-weight: 900;
  margin-bottom: 1rem;
`;

const Contents = styled.p`
  font-size: calc(1rem + 0.6vw);
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: calc(1rem + 0.6vw);
  font-weight: 400;
  margin-bottom: 3rem;
`;

export default class Profile extends Component {
  render() {
    return (
      <div>
        <p className="Text-large Text-bold">Profile</p>
        <div className="Blank-xsmall" />
        <Wrapper>
          <div style={{ width: "60vw", textAlign: "left" }}>
            <Title>Name</Title>
            <Content>Hojoon Lee, a.k.a HADMARINE</Content>

            <Title>Birth</Title>
            <Content>
              Feb 12, 2003. 17 Years old. (16 in General Age counting)
            </Content>

            <Title>Education</Title>
            <Contents>Graduated Seoul Sunil Elementary School</Contents>
            <Contents>Graduated Seoul Daeshin Middle School</Contents>
            <Content>
              Currently attending Sunrin Internet High School Software Division
            </Content>

            <Contents>
              Year 2017, Completed Seoul Western Education Office's Information
              gifted education.
            </Contents>
            <Contents>Year 2019, Joined Dev8, Web Programming Club</Contents>
            <Content>Year 2019, Joined HMH, Big data Research Club</Content>

            <Title>Tech Ability</Title>
            <Content>
              React, Typescript, Javascript, Node.js, Express, MongoDB,
              MariaDB(MySQL), HTML, SCSS, CSS, TailWindCSS, Python, C#, Data
              Analyzing, Ubuntu, And considerable Design ability.
            </Content>

            <Title>Open Source Projects In Participation</Title>
            <Content>
              <a href="https://github.com/WebBoilerplates">WebBoilerplates</a>
            </Content>
          </div>
        </Wrapper>
      </div>
    );
  }
}
