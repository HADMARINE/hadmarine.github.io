import React, { Component } from "react";
import styled from "styled-components";
import "../styles/index.scss";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-size: calc(1.5rem + 1vw);
    color: white;
    margin-bottom: 1rem;
  }
  a {
    color: skyblue;
  }
`;

const Title = styled.p`
  font-size: calc(2rem + 1.5vw) !important;
  font-weight: 900;
  margin-bottom: 5rem !important;
`;

export default class Contact extends Component {
  render() {
    return (
      <>
        <Title>Contact</Title>
        <Wrapper>
          <div style={{ textAlign: "left" }}>
            {window.innerWidth < 500 ? (
              <div style={{ textAlign: "center" }}>
                <p>
                  <p>Github</p>
                  <a
                    href="https://github.com/HADMARINE"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    github.com/HADMARINE
                  </a>
                </p>
                <p>
                  <p>Email</p>
                  <a
                    href="mailto:contact@hadmarine.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    contact@hadmarine.com
                  </a>
                </p>
                <p>
                  <p>Phone</p>
                  <a
                    href="tel:+827046069485"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    +82-(0)70-4606-9485
                  </a>
                </p>
              </div>
            ) : (
              <div>
                <p>
                  Github :{" "}
                  <a
                    href="https://github.com/HADMARINE"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    github.com/HADMARINE
                  </a>
                </p>
                <p>
                  Email :{" "}
                  <a
                    href="mailto:contact@hadmarine.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    contact@hadmarine.com
                  </a>
                </p>
                <p>
                  Phone :{" "}
                  <a
                    href="tel:+827046069485"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    +82-(0)70-4606-9485
                  </a>
                </p>
              </div>
            )}

            {/* <p>
              Telegram :{" "}
              <a
                href="https://t.me/HADMARINE"
                rel="noopener noreferrer"
                target="_blank"
              >
                t.me/HADMARINE
              </a>
            </p>
            <p>
              KakaoTalk :{" "}
              <a
                href="https://open.kakao.com/o/sTY9SYNb"
                rel="noopener noreferrer"
                target="_blank"
              >
                open.kakao.com/o/sTY9SYNb
              </a>
            </p> */}
          </div>
        </Wrapper>
      </>
    );
  }
}
