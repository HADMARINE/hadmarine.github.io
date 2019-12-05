import React, { Component } from "react";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";

import "../styles/index.scss";

const Wrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  text-align: left;
  width: 20rem;
  height: 20rem;
  background-color: rgb(20, 20, 20);
  border-radius: 10px;
  margin: 1rem;
`;

const Title = styled.div`
  text-align: center;
`;

const Content = styled.div`
  text-align: left;
`;

export default class Product extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    img: this.props.img,
    title: this.props.title,
    content: this.props.content,
    link: this.props.link
  };
  handleOpenLink = () => {};
  render() {
    return (
      <Wrapper>
        <Jumbotron style={{ margin: "10px" }}>
          <Title>Hello</Title>
          <p className="Text-small">world</p>
        </Jumbotron>
      </Wrapper>
    );
  }
}
