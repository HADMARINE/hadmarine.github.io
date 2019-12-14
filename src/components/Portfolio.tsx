import React, { Component } from "react";
import styled from "styled-components";
import CardScrollList from "../components/CardScrollList";
import { data } from "../data/portfolioData";

import "../styles/index.scss";

const Title = styled.p`
  font-size: calc(2rem + 1.5vw);
  font-weight: 900;
`;

export default class Portfolio extends Component {
  render() {
    console.log(data);
    return (
      <div>
        <Title>Portfolio</Title>
        <div className="Blank-xsmall" />
        <CardScrollList data={JSON.stringify(data)} />
      </div>
    );
  }
}
