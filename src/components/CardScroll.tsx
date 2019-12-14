import React, { Component } from "react";
import styled from "styled-components";

import "../styles/index.scss";

let Wrapper = styled.div`
  text-align: left;
  align-items: center;
  height: 40rem;
  width: 535px;
  background-color: rgb(40, 40, 40);
  border-radius: 5px;
  flex: 0 0 auto;
  margin-left: calc(1rem + 3px);
  overflow: hidden;

  img {
    border-radius: 5px;
    width: 100%;
    height: 300px;
    object-fit: scale-down;
    margin: 0;
  }
  p {
    margin: 1rem;
  }
`;

const MobileWrapper = styled.div`
  text-align: left;
  align-items: center;
  height: 40rem;
  width: 350px;
  background-color: rgb(40, 40, 40);
  border-radius: 5px;
  flex: 0 0 auto;
  margin-left: calc(1rem + 3px);
  overflow: hidden;

  img {
    border-radius: 5px;
    width: 100%;
    height: 300px;
    object-fit: scale-down;
    margin: 0;
    margin-top: -2rem;
  }
  p {
    margin: 1rem;
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
    if (window.innerWidth < 500) {
      Wrapper = MobileWrapper;
    }
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
