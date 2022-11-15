import React, { useState } from 'react';
import { FieldProps, RaRecord, useRecordContext } from 'react-admin';
import ReactModal from 'react-modal';
import { Viewer } from '@toast-ui/react-editor';
import { Flex } from '@src/components/assets/Wrapper';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const ImageModalField = <RecordType extends RaRecord = any>(
  props: FieldProps<RecordType>,
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const record = props.record || useRecordContext();

  if (!props.source) {
    throw new Error('Source not defined');
  }

  if (!record[props.source]) {
    return <></>;
  }

  return (
    <>
      <IconButton onClick={() => setIsModalOpen(true)}>
        <VisibilityIcon />
      </IconButton>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}>
        <Flex vertical fitParent center>
          <Flex selfEnd>
            <IconButton onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Flex>
          <Flex flex={1} center>
            <img src={record && record[props.source]} alt="image modal" />
          </Flex>
        </Flex>
      </ReactModal>
    </>
  );
};
