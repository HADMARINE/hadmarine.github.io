import React, { createRef, useState } from 'react';
import { InputProps, useInput } from 'react-admin';
import ReactModal from 'react-modal';
import { Editor } from '@toast-ui/react-editor';
import { Flex } from '@src/components/assets/Wrapper';
import { Button, IconButton } from '@mui/material';
import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import '@toast-ui/editor/dist/toastui-editor.css';

const CustomEditorStyleWrapper = styled.div`
  height: 100%;
  width: 100%;

  & > div {
    height: 100%;
    width: 100%;
  }
`;

export const MarkdownInput = (props: Omit<InputProps, 'type'>) => {
  const { id, field, fieldState, formState, isRequired } = useInput({
    type: 'text',
    ...props,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const editorRef = createRef<Editor>();

  const handleChange = () => {
    const v = editorRef.current?.getInstance().getMarkdown();

    field.onChange(v);
  };

  return (
    <>
      <Flex vertical left>
        <span
          style={{
            marginLeft: '5px',
            fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
            color: 'gray',
          }}>
          {id[0].toLocaleUpperCase() + id.slice(1)} {isRequired && '*'}
        </span>
        <Button startIcon={<EditIcon />} onClick={() => setIsModalOpen(true)}>
          Modify
        </Button>
      </Flex>
      <span
        style={{
          color: '#d32f2f',
          marginLeft: '14px',
          marginTop: fieldState.error ? '6px' : '26px',
          fontSize: '12px',
          fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        }}>
        {fieldState.error?.message}
      </span>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}>
        <Flex vertical fitParent>
          <Flex selfEnd>
            <IconButton onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Flex>
          <Flex flex={1} fitParent>
            <CustomEditorStyleWrapper>
              <Editor
                autofocus
                usageStatistics={false}
                onChange={handleChange}
                initialValue={field.value}
                previewStyle="vertical"
                height="100%"
                ref={editorRef}
              />
            </CustomEditorStyleWrapper>
          </Flex>
        </Flex>
      </ReactModal>
    </>
  );
};
