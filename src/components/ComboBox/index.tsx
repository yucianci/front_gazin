import React from 'react';
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { ComboboxProps } from './schema';

export const ComboBox = ({
  name,
  label,
  placeholder,
  options,
  methods,
  required,
}: ComboboxProps) => (
  <Controller
    control={methods.control}
    name={name}
    render={({ field: { onChange, value } }) => (
      <Autocomplete
        options={options}
        defaultValue={value}
        size="medium"
        getOptionLabel={(option) => option.name || ''}
        placeholder={placeholder}
        onChange={(event, values) => {
          onChange(values);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            label={label}
            variant="outlined"
            placeholder={placeholder}
            size="medium"
            required={required}
            onChange={onChange}
          />
        )}
      />
    )}
  />
);
