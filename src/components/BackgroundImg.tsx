import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
  animation: initialOpacity-animate 1.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 120rem;
    /* position: absolute; */
    margin: auto;
  }
  & > div.overlay {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 34%,
      rgba(0, 0, 0, 0.5452556022408963) 100%
    );
    /* background-color: rgba(0, 0, 0, 0.5); */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  @keyframes initialOpacity-animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Preview = (props: any) => {
  return (
    <Wrapper>
      <img src={props.src} alt="" style={{ marginTop: props.margin + "rem" }} />
    </Wrapper>
  );
};

export default Preview;
