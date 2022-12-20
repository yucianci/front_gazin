import { Grid } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../../api';
import { Modal } from '../../../components/Modal';
import TextField from '../../../components/TextField';
import { LevelProps } from '../schema';

const ModalLevel = ({
  id, title, modalData, refresh, modalIsOpen, onCloseModal,
}: any) => {
  const methods = useForm<LevelProps>();
  const { handleSubmit, reset, watch } = methods;

  const validateFields = () => {
    let result;

    if (watch('name').length > 0) {
      result = true;
    } else {
      alert('Campo nome é obrigatório!');
    }

    return result;
  };

  useEffect(() => {
    reset(modalData);
  }, [modalData, reset]);

  const onSubmit = useCallback(
    async (dataSubmit: any) => {
      if (validateFields()) {
        const date = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        const level = { name: dataSubmit.name, created_at: date };
        try {
          switch (dataSubmit.action) {
            case 'include':
              await api.post(`/${id}`, level);
              break;
            case 'edit':
              await api.patch(`/${id}/${dataSubmit._id}`, level);
              break;
            default:
              break;
          }
          if (refresh) {
            refresh();
          }
          onCloseModal();
        } catch (err) {
          console.log(err);
        }
      }
    },
    [],
  );

  return (
    <>
      <Modal
        id={id}
        title={title}
        action={modalData.action}
        methods={methods}
        handleSubmit={handleSubmit(onSubmit)}
        modalIsOpen={modalIsOpen}
        onCloseModal={onCloseModal}
      >
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              name="name"
              placeholder="Nome"
              methods={methods}
              autoFocus={modalData.action === 'include'}
              required
            />
          </Grid>
        </Grid>

      </Modal>
    </>
  );
};

export default ModalLevel;
