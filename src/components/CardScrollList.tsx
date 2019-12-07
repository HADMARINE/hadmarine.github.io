import React, { Component } from "react";
import CardScroll from "./CardScroll";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

export default class ProductList extends Component<any> {
  static defaultProps = {
    data: []
  };

  render() {
    const data: any = JSON.parse(this.props.data);
    const list: React.ReactNode = data.map((info: any) => (
      <CardScroll title={info.title} img={info.img} content={info.content} />
    ));
    return <Wrapper>{list}</Wrapper>;
  }
}
