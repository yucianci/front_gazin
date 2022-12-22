import React from 'react';
import Button from '../Button';
import { NavbarProps } from './schema';
import { Main } from './styles';

export const Navbar = ({ title, onClickInclude }: NavbarProps) => (
  <Main>
    <h3>{`Listagem de ${title}`}</h3>
    <Button type="button" variant="outlined" onClick={onClickInclude}>
      Incluir
    </Button>
  </Main>
);
