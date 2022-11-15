import React from 'react';
import {
  Create,
  DateInput,
  Edit,
  required,
  SimpleForm,
  TextInput,
  List,
  Datagrid,
  TextField,
  DateField,
  ImageField,
  EditButton,
  ShowButton,
  TopToolbar,
  ListButton,
  Toolbar,
  SaveButton,
  DeleteButton,
  Show,
  SimpleShowLayout,
} from 'react-admin';
import { MarkdownInput } from '../../inputs/MarkdownInput';
import { MarkdownField } from '../../fields/MarkdownField';
import { ImageModalField } from '../../fields/ImageModalField';
import { Flex } from '@src/components/assets/Wrapper';
import ClearIcon from '@mui/icons-material/Clear';
import { Margin } from '@src/components/assets/Format';

export const PortfolioList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="title" />
        <TextField source="subtitle" />
        <ImageModalField source="thumbnail" />
        <DateField source="date" />
        <MarkdownField modal source="content" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

const PortfolioShowTopToolbar = () => (
  <TopToolbar>
    <ListButton />
    <EditButton />
  </TopToolbar>
);

export const PortfolioShow = () => (
  <Show actions={<PortfolioShowTopToolbar />}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="subtitle" />
      <ImageField source="thumbnail" />
      <DateField source="date" />
      <MarkdownField source="content" />
    </SimpleShowLayout>
  </Show>
);

const PortfolioCreateBottomToolbar = () => (
  <Toolbar>
    <SaveButton />
    <Margin horizontal={'4px'} />
    <ListButton label="Cancel" size="medium" startIcon={<ClearIcon />} />
  </Toolbar>
);

export const PortfolioCreate = () => {
  return (
    <Create>
      <SimpleForm
        warnWhenUnsavedChanges
        toolbar={<PortfolioCreateBottomToolbar />}>
        <TextInput fullWidth source="title" validate={[required()]} />
        <TextInput fullWidth source="subtitle" />
        <TextInput fullWidth source="thumbnail" />
        <DateInput fullWidth source="date" validate={[required()]} />
        <MarkdownInput source="content" validate={required()} />
        {/* <ArrayInput fullWidth source="link">
          <SimpleFormIterator fullWidth inline>
            <TextInput
              style={{ flex: 1 }}
              source="key"
              label="Link name"
              helperText={false}
            />
            <TextInput
              style={{ flex: 2 }}
              source="value"
              label="URL"
              helperText={false}
            />
          </SimpleFormIterator>
        </ArrayInput> */}
      </SimpleForm>
    </Create>
  );
};

const PortfolioEditTopToolbar = () => (
  <TopToolbar>
    <ListButton />
    <ShowButton />
  </TopToolbar>
);

const PortfolioEditBottomToolbar = () => (
  <Toolbar>
    <SaveButton />
    <Margin horizontal={'4px'} />
    <ListButton label="Cancel" size="medium" startIcon={<ClearIcon />} />
    <Flex flex={1} />
    <DeleteButton size="medium" />
  </Toolbar>
);

export const PortfolioEdit = () => {
  return (
    <Edit actions={<PortfolioEditTopToolbar />}>
      <SimpleForm
        warnWhenUnsavedChanges
        toolbar={<PortfolioEditBottomToolbar />}>
        <TextInput source="title" validate={[required()]} />
        <TextInput source="subtitle" />
        <TextInput source="thumbnail" />
        <DateInput source="date" validate={[required()]} />
        <MarkdownInput source="content" validate={required()} />
        {/* <ArrayInput source="link">
          <SimpleFormIterator inline>
            <TextInput source="key" helperText={false} />
            <TextInput source="value" helperText={false} />
          </SimpleFormIterator>
        </ArrayInput> */}
      </SimpleForm>
    </Edit>
  );
};
