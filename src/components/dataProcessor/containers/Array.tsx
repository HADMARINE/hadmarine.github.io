import React from 'react';
import { Column } from 'react-rainbow-components';
import { ContainerBase } from '..';
import { Flex } from '../../assets/Wrapper';

interface Props extends ContainerBase<any[]> {
  customProcessor?: React.ReactNode;
}
const ArrayContainer = (props: Props) => {
  return props.isChanging ? (
    <Flex flex={'70%'} horizontal center>
      [...]
    </Flex>
  ) : (
    <Column
      sortable={props.sortable || false}
      header={props.title}
      field={props.key}
    />
  );
};

export default ArrayContainer;
