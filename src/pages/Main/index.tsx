import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface Props {}

// @inject('ExStore')
@observer
export default class Main extends Component<Props> {
  render() {
    return <Wrapper></Wrapper>;
  }
}
