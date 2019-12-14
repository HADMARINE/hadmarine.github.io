import React, { Component } from "react";
import "../styles/index.scss";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  p,
  span,
  div {
    position: relative;
    top: -4.7rem;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-left: -1.5rem;
  p,
  span,
  div {
    position: relative;
    top: -4.7rem;
  }
`;

const Background = styled.div`
  background: black;
  background: rgba(0, 0, 0, 0.8);

  filter: blur(6px);
  -o-filter: blur(6px);
  -ms-filter: blur(6px);
  -moz-filter: blur(6px);
  -webkit-filter: blur(6px);

  padding-bottom: 4rem;
  margin: 1rem;
`;

const Title = styled.p`
  font-size: 2.6rem;
  font-weight: 900;
  margin-left: 2rem;
`;

const Links = styled.div`
  right: 0;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 0.7rem;
`;

const Link = styled.a`
  color: skyblue;
  font-weight: 900;
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;

export default class Header extends Component {
  render() {
    return (
      <>
        <Background />

        {window.innerWidth < 750 ? (
          <MobileWrapper>
            <Title>
              <a href="/">HADMARINE</a>
            </Title>
          </MobileWrapper>
        ) : (
          <Wrapper>
            <Title>
              <a href="/">HADMARINE</a>
            </Title>
            <Links>
              <Link href="http://git.hadmarine.com">Github</Link>
              <Link href="#profile">Profile</Link>
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#contact">Contact</Link>
            </Links>
          </Wrapper>
        )}
      </>
    );
  }
}
