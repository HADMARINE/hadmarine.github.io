import { Toolbar } from '@mui/material';
import { Margin } from '@src/components/assets/Format';
import React from 'react';
import {
  ArrayField,
  ArrayInput,
  BooleanField,
  BooleanInput,
  ChipField,
  Create,
  Datagrid,
  DateField,
  DeleteButton,
  Edit,
  EditButton,
  List,
  ListButton,
  NumberField,
  required,
  SaveButton,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput,
  TopToolbar,
} from 'react-admin';
import { MarkdownField } from '../../fields/MarkdownField';
import ClearIcon from '@mui/icons-material/Clear';
import { MarkdownInput } from '../../inputs/MarkdownInput';
import { Flex } from '@src/components/assets/Wrapper';

export const BlogpostList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="title" label="Title" />
        <TextField source="subtitle" label="Subtitle" />
        <ArrayField source="tags" label="Tags">
          <SingleFieldList>
            <ChipField source="value" />
          </SingleFieldList>
        </ArrayField>
        <MarkdownField source="content" label="Content" />
        <DateField source="createdDate" label="Created date" />
        <DateField source="modifiedDate" label="Latest modified date" />
        <BooleanField source="isPrivate" label="Private post" />
        <NumberField source="viewCount" label="Views" />
      </Datagrid>
    </List>
  );
};

const BlogpostShowTopToolbar = () => (
  <TopToolbar>
    <ListButton />
    <EditButton />
  </TopToolbar>
);

export const BlogpostShow = () => (
  <Show actions={<BlogpostShowTopToolbar />}>
    <SimpleShowLayout>
      <TextField source="title" label="Title" />
      <TextField source="subtitle" label="Subtitle" />
      <ArrayField source="tags" label="Tags">
        <SingleFieldList>
          <ChipField source="value" />
        </SingleFieldList>
      </ArrayField>
      <MarkdownField source="content" label="Content" />
      <BooleanField source="isPrivate" label="Private post" />
      <NumberField source="viewCount" label="Views" />
      <DateField source="createdDate" label="Created date" />
      <DateField source="modifiedDate" label="Latest modified date" />
    </SimpleShowLayout>
  </Show>
);

const BlogpostCreateBottomToolbar = () => (
  <Toolbar>
    <SaveButton />
    <Margin horizontal="4px" />
    <ListButton label="Cancel" size="medium" startIcon={<ClearIcon />} />
  </Toolbar>
);

export const BlogpostCreate = () => {
  return (
    <Create>
      <SimpleForm
        warnWhenUnsavedChanges
        toolbar={<BlogpostCreateBottomToolbar />}>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="subtitle" label="Subtitle" />
        <ArrayInput fullWidth source="tags" label="Tags">
          <TextInput source="value" style={{ flex: 1 }} helperText="false" />
        </ArrayInput>
        <MarkdownInput
          source="content"
          validate={[required()]}
          label="Content"
        />
        <BooleanField source="isPrivate" label="Private post" />
      </SimpleForm>
    </Create>
  );
};

const BlogpostEditTopToolbar = () => (
  <TopToolbar>
    <ListButton />
    <ShowButton />
  </TopToolbar>
);

const BlogpostEditBottomToolbar = () => (
  <Toolbar>
    <SaveButton />
    <Margin horizontal={'4px'} />
    <ListButton label="Cancel" size="medium" startIcon={<ClearIcon />} />
    <Flex flex={1} />
    <DeleteButton size="medium" />
  </Toolbar>
);

export const BlogpostEdit = () => {
  return (
    <Edit actions={<BlogpostEditTopToolbar />}>
      <SimpleForm
        warnWhenUnsavedChanges
        toolbar={<BlogpostEditBottomToolbar />}>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="subtitle" label="Subtitle" />
        <ArrayField source="tags" label="Tags">
          <TextInput source="value" />
        </ArrayField>
        <MarkdownInput
          source="content"
          validate={[required()]}
          label="Content"
        />
        <BooleanInput source="isPrivate" label="Private post" />
        <NumberField source="viewCount" label="Views" />
        <DateField source="createdDate" label="Created date" />
        <DateField source="modifiedDate" label="Latest modified date" />
      </SimpleForm>
    </Edit>
  );
};
