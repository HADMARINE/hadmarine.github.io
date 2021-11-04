import React from 'react';
import styled from 'styled-components';

const Timeline = styled.div<{ animationState: boolean }>`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 200px,
    rgba(255, 255, 255, 1) 100%
  );
  margin-top: 400px;
  color: black;
  width: 16px;
  height: 3000px; //inherit;
  position: absolute;
  left: 100px;
  animation: ${(props) =>
      props.animationState
        ? 'main_timeline_appear 1s'
        : 'main_timeline_disappear 0.5s'}
    ease-in-out;
  opacity: ${(props) => (props.animationState ? 1 : 0)};

  @keyframes main_timeline_appear {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes main_timeline_disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Timeline;
