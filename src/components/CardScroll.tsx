import React, { Component } from "react";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";

import "../styles/index.scss";

const Wrapper = styled.div`
  text-align: left;
  /* height: 50rem; */
  width: 50rem;
  background-color: rgb(40, 40, 40);
  border-radius: 5px;
  /* flex: 0 0 auto; */
  margin-left: calc(1rem + 3px);
  overflow: hidden;
  /* display: flex; */
  img {
    border-radius: 5px;
    height: 400px;
    max-width: 200%;
    width: calc(100vh - 30rem);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* max-width: 100%; */
    height: auto;
  }
  div {
    color: whitesmoke;
    margin-left: 2rem;
    margin-right: 2rem;
    position: relative;
    padding-top: 200%; /* 1:1 ratio */
    overflow: hidden;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: calc(1.5rem + 1vw);
  font-weight: 900;
`;

const Content = styled.p`
  text-align: left;
  font-size: calc(1rem + 0.6vw);
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
        <div style={{ margin: "-15px" }}>
          <img src={this.props.img} alt={this.props.title} />
        </div>
        <Title>{this.props.title}</Title>
        <Content>{this.props.content}</Content>
      </Wrapper>
    );
  }
}
