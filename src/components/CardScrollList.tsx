import React, { Component } from "react";
import CardScroll from "./CardScroll";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default class ProductList extends Component<any> {
  static defaultProps = {
    data: []
  };

  render() {
    const data = JSON.parse(this.props.data);
    const list: React.ReactNode = data.map((info: any) => (
      <CardScroll
        key={info.id}
        title={info.title}
        img={info.img}
        content={info.content}
      />
    ));
    return <Wrapper>{list}</Wrapper>;
  }
}
