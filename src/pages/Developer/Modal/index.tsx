import { Grid } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { api } from '../../../api';
import ComboBox from '../../../components/ComboBox';
import { Modal } from '../../../components/Modal';
import TextField from '../../../components/TextField';
import { DeveloperProps } from '../schema';

const ModalDeveloper = ({
  id, title, modalData, refresh, modalIsOpen, onCloseModal,
}: any) => {
  const methods = useForm<DeveloperProps>();
  const { handleSubmit, reset, watch } = methods;
  useEffect(() => {
    reset(modalData);
  }, [modalData, reset]);

  const validateFields = () => {
    let result;

    if (watch('name').length > 0) {
      result = true;
    } else {
      toast.error('Campo nome é obrigatório!');
    }

    return result;
  };

  const onSubmit = useCallback(
    async (dataSubmit: any) => {
      if (validateFields()) {
        try {
          switch (dataSubmit.action) {
            case 'include':
              await api.post(`/${id}`, dataSubmit);
              toast.success('Desenvolvedor criado com sucesso!');
              break;
            case 'edit':
              await api.patch(`/${id}/${dataSubmit._id}`, dataSubmit);
              toast.success('Desenvolvedor editado com sucesso!');
              break;
            default:
              break;
          }
        } catch (error) {
          switch (dataSubmit.action) {
            case 'include':
              toast.error('Não foi possível criar o desenvolvedor');
              break;
            case 'edit':
              toast.error('Não foi possível editar o desenvolvedor');
              break;
            default:
              break;
          }
        }

        refresh();
        onCloseModal();
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
        <Grid container spacing={2} direction="row">
          <Grid item xs={8} sm={9} md={10}>
            <TextField
              name="name"
              placeholder="Nome"
              methods={methods}
              required
            />
          </Grid>

          <Grid item xs={4} sm={3} md={2}>
            <TextField
              name="age"
              placeholder="Idade"
              type="number"
              methods={methods}
              required
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} direction="row">
          <Grid item xs={7} sm={7} md={7}>
            <TextField
              name="level"
              placeholder="Nível"
              methods={methods}
              required
            />
          </Grid>
          <Grid item xs={5} sm={5} md={5}>
            <ComboBox
              name="level"
              methods={methods}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              name="hobby"
              placeholder="Hobby"
              methods={methods}
              required
            />
          </Grid>
        </Grid>

      </Modal>
    </>
  );
};

export default ModalDeveloper;