import React from 'react';
import Input from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import Button from '../Button';
import { TextFieldProps } from './schema';

export default function TextField({
  name,
  label,
  type,
  required,
  autoFocus,
  disabled,
  methods,
  multiline,
  search,
  placeholder,
  onClickButton,
}: TextFieldProps) {
  return (
    <Controller
      control={methods.control}
      name={name}
      render={({ field: { onChange } }) => (
        <Input
          defaultValue={methods.getValues(name)}
          name={name}
          label={label}
          variant="outlined"
          size="medium"
          type={type}
          onKeyPress={(e) => {
            if (search) {
              if (e.key === 'Enter') {
                onClickButton();
              }
            }
          }}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoFocus={autoFocus}
          multiline={multiline}
          rows={multiline ? 5 : 0}
          style={{ width: '100%' }}
          onChange={(item) => onChange(item)}
          InputProps={
            search
              ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <Button isIconButton onClick={onClickButton}>
                      <Search style={{ color: '#6b6b6b' }} />
                    </Button>
                  </InputAdornment>
                ),
              }
              : {}
          }
        />
      )}
    />
  );
}
