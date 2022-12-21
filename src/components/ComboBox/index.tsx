import React from 'react';
import { Controller } from 'react-hook-form';
import {
  Autocomplete, TextField,
} from '@mui/material';

export default function TextFieldSearch({
  name,
  label,
  value,
  // options,
  autoFocus,
  setOptionSelected,
  hasSelects,
  disabled,
  methods,
}: any) {
  const options = [
    { _id: '123', label: 'teste' },
  ];
  return (
    <Controller
      control={methods.control}
      name={name}
      render={({ field: { onChange } }) => (
        <Autocomplete
          id={name}
          style={{ margin: '16px 0' }}
          options={options}
          getOptionLabel={(option) => option.label}
          onChange={(event, item) => {
            if (hasSelects) {
              setOptionSelected(() => ({ ...hasSelects, [name]: item }));
            }
            onChange(item);
            return item;
          }}
          disabled={disabled}
          value={value}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              label={label}
              variant="outlined"
              size="medium"
              required
              autoFocus={autoFocus}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      )}
    />
  );
}
