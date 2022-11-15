import React from 'react';
import { InputProps, useInput } from 'react-admin';

export const ObjectInput = (props: Omit<InputProps, 'type'>) => {
  const { id, field, fieldState, formState, isRequired } = useInput({
    type: 'text',
    ...props,
  });

  // const isModalOpen
};
