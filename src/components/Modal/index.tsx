import { Close } from '@mui/icons-material';
import { Dialog } from '@mui/material';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import Button from '../Button';
import { ModalProps } from './schema';
import {
  ModalBody, ModalFooter, ModalHeader, Wrapper,
} from './styles';

export const Modal = ({
  id,
  modalIsOpen,
  onCloseModal,
  children,
  title,
  methods,
  handleSubmit,
  action,
}: ModalProps) => {
  const titleModal = action === 'include' ? `Registrar ${title}` : `Editar ${title}`;
  return (
    <Dialog
      id={id}
      open={modalIsOpen}
      onClose={onCloseModal}
      fullWidth
      maxWidth="md"
    >
      <Wrapper style={{ color: '#ecf0f1' }}>
        <ModalHeader>
          <h1>{titleModal}</h1>
          <Button isIconButton onClick={onCloseModal}>
            <Close style={{ color: '#ecf0f1' }} />
          </Button>
        </ModalHeader>
        <FormProvider {...methods}>
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <form onSubmit={handleSubmit}>
              <Button type="submit" variant="outlined" color="success">Gravar</Button>

            </form>
          </ModalFooter>
        </FormProvider>
      </Wrapper>
    </Dialog>
  );
};
