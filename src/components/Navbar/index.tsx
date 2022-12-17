import React from 'react';
import Button from '../Button';
import { Main } from './styles';

interface NavbarProps {
  title: string;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({ title, setModalIsOpen }: NavbarProps) => (
  <Main>
    <h3>{`Listagem de ${title}`}</h3>
    <Button
      type="button"
      variant="outlined"
      onClick={() => setModalIsOpen(true)}
    >
      Incluir
    </Button>
  </Main>
);
