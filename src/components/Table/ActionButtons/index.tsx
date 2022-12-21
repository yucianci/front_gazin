import { Delete, Search } from '@mui/icons-material';
import React from 'react';
import Button from '../../Button';
import { ActionButton } from './styles';

export const ActionButtons = ({
  setModalIsOpen, setModalData, handleDelete, data,
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
      onClick={() => handleDelete(data._id || '')}
    >
      <Delete />
    </Button>
  </ActionButton>
);
