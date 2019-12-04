import React, { Component } from "react";
import "../styles/index.scss";
import styled from "styled-components";

const P = styled.p`
  margin-top: calc(50vh - 8rem);
  font-family: "Quicksand", sans-serif;
`;

export default class NotFound extends Component {
  render() {
    return (
      <div className="Background-background Style-center Align-vertical-middle">
        <div>
          <P className="Text-xxlarge Text-bold Text-xwide">404</P>
          <p className="Text-middle Text-wide">
            No page such like <code>this</code>.
          </p>
        </div>
      </div>
    );
  }
}
