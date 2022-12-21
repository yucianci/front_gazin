import React from 'react';
import TextField from '..';
import { TextFieldSearchProps } from './schema';
import { Search } from './styles';

export const TextFieldSearch = ({ name, methods, setSearch }: TextFieldSearchProps) => (
  <Search>
    <TextField
      search
      name={`search_${name}`}
      placeholder={`Pesquisar ${name}`}
      methods={methods}
      onClickButton={() => setSearch(methods.getValues(`search_${name}`))}
    />
  </Search>
);
