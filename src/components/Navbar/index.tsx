import React from 'react';
import Button from '../Button';
import { Main } from './styles';

interface NavbarProps {
  title: string;
  onClickInclude: any;
}

export const Navbar = ({ title, onClickInclude }: NavbarProps) => (
  <Main>
    <h3>{`Listagem de ${title}`}</h3>
    <Button type="button" variant="outlined" onClick={onClickInclude}>
      Incluir
    </Button>
  </Main>
);
