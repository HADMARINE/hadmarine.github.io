import React from 'react';
import { InputProps, useInput } from 'react-admin';
import { Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export const AutocompleteArrayFetchInput = <T,>(
  props: Omit<InputProps, 'type'> & {
    dataProvider: () =>
      | Promise<
          { result: true; data: T[] } | { result: false; message?: string }
        >
      | ({ result: true; data: T[] } | { result: false; message?: string });
  },
) => {
  const { id, field, fieldState, formState, isRequired } = useInput({
    type: 'text',
    ...props,
  });

  const [values, setValues] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleValuesUpdate = async () => {
    setLoading(true);
    const res = await props.dataProvider();

    if (!res.result) {
      setLoading(false);
      return;
    }

    setValues(res.data);

    setLoading(false);
    return;
    // if (props.dataProvider instanceof Promise) {
    //   const f = async () => {
    //     const res = await props.dataProvider();

    //     if (!res.result) {
    //       toast.error(res.message || 'Failed to fetch tags');
    //       return;
    //     }

    //     setValues(res.data);
    //   };

    //   f();
    // }
  };

  useEffect(() => {
    const f = async () => {
      handleValuesUpdate();
      return;
    };
    f();
  }, []);

  return (
    <Autocomplete
      options={values || []}
      freeSolo
      multiple
      loading={loading}
      style={{ minWidth: '200px' }}
      onChange={(e, v) => {
        field.onChange(
          v.map((_v) => ({
            value: _v,
          })),
        );
      }}
      onFocus={() => handleValuesUpdate()}
      value={
        field.value?.map && field.value.map((v: { value: string }) => v.value)
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={props.label || field.name}
        />
      )}
    />
  );
};
