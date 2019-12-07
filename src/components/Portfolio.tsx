import React, { Component } from "react";
import styled from "styled-components";
import CardScrollList from "../components/CardScrollList";

import TestImg from "../image/typescript.jpeg";

import "../styles/index.scss";

const data: any = [
  {
    title: "test",
    content: "test",
    img: TestImg
  },
  {
    title: "test",
    content: "test",
    img: TestImg
  },
  {
    title: "test",
    content: "test",
    img: TestImg
  },
  {
    title: "test",
    content: "test",
    img: TestImg
  },
  {
    title: "test",
    content: "test",
    img: TestImg
  }
];

const Title = styled.p`
  font-size: calc(2rem + 1.5vw);
  font-weight: 900;
`;

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Title>Portfolio</Title>
        <div className="Blank-xsmall" />
        <CardScrollList data={JSON.stringify(data)} />
      </div>
    );
  }
}
