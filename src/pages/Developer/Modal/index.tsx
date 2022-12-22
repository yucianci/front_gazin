import { Grid } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { api } from '../../../api';
import { ComboBox } from '../../../components/ComboBox';
import { Modal } from '../../../components/Modal';
import TextField from '../../../components/TextField';
import { DeveloperProps } from '../schema';
import { ModalDeveloperProps } from './schema';

const ModalDeveloper = ({
  id,
  title,
  modalData,
  refresh,
  onCloseModal,
  setLoading,
}: ModalDeveloperProps) => {
  const methods = useForm<DeveloperProps>();
  const { handleSubmit, reset, watch } = methods;
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    reset(modalData);
  }, [modalData, reset]);

  useEffect(() => {
    setLoading(true);
    api
      .get('levels')
      .then((response) => setLevels(response.data.levels))
      .catch(() => toast.error('Não foi possível realizar a consulta de níveis!'))
      .finally(() => setLoading(false));
  }, []);

  const validateFields = () => {
    let result;

    if (watch('name').length > 0) {
      result = true;
    } else {
      toast.error('Campo nome é obrigatório!');
    }

    if (watch('level').name.length > 0) {
      result = true;
    } else {
      toast.error('Campo nível é obrigatório!');
    }

    if (watch('sex').name.length > 0) {
      result = true;
    } else {
      toast.error('Campo sexo é obrigatório!');
    }

    return result;
  };

  const onSubmit = useCallback(async (dataSubmit: any) => {
    if (validateFields()) {
      setLoading(true);
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
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Modal
        id={id}
        title={title}
        action={modalData.action}
        methods={methods}
        handleSubmit={handleSubmit(onSubmit)}
        modalIsOpen
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
          <Grid item xs={12} sm={7} md={7}>
            <ComboBox
              name="level"
              placeholder="Selecione um nível"
              options={levels}
              methods={methods}
              required
            />
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <ComboBox
              name="sex"
              placeholder="Selecione seu sexo"
              options={[
                { id: 'male', name: 'Masculino' },
                { id: 'female', name: 'Feminino' },
              ]}
              methods={methods}
              required
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
