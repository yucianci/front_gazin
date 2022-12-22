import { Delete, Search } from '@mui/icons-material';
import React from 'react';
import { toast } from 'react-toastify';
import Button from '../../Button';
import { ActionButton } from './styles';

export const ActionButtons = ({
  setModalIsOpen, setModalData, handleDelete, data, isAvailableToDelete,
}: any) => (
  <ActionButton>
    <Button
      type="button"
      variant="outlined"
      color="info"
      size="small"
      isIconButton
      onClick={() => {
        setModalData({
          ...data,
          action: 'edit',
        });
        setModalIsOpen(true);
      }}
    >
      <Search />
    </Button>
    <Button
      type="button"
      variant="outlined"
      color="error"
      size="small"
      isIconButton
      onClick={() => (!isAvailableToDelete ? handleDelete(data._id || '') : toast.error('Esse nível não pode ser excluído, primeiro exclua os desenvolvedores atrelados a ele!'))}
    >
      <Delete />
    </Button>
  </ActionButton>
);
