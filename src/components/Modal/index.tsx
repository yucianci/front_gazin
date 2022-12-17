import { Close } from '@mui/icons-material';
import { Dialog } from '@mui/material';
import React from 'react';
import Button from '../Button';
import { ModalHeader, Wrapper } from './styles';

interface IModal {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}

export const Modal = ({
  modalIsOpen,
  setModalIsOpen,
  children,
  title,
}: IModal) => (
  <Dialog
    open={modalIsOpen}
    onClose={() => setModalIsOpen(false)}
    fullWidth
    maxWidth="md"
  >
    <Wrapper style={{ color: '#ecf0f1' }}>
      <ModalHeader>
        <h1>{title}</h1>
        <Button isIconButton onClick={() => setModalIsOpen(false)}>
          <Close style={{ color: '#ecf0f1' }} />
        </Button>
      </ModalHeader>
      {children}
    </Wrapper>
  </Dialog>
);
