/* eslint-disable no-restricted-globals */
import { Delete, MoreHoriz } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { api } from '../../api';
import Button from '../../components/Button';
import { Loading } from '../../components/Loading';
import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import TextField from '../../components/TextField';
import { formatDate } from '../../utils/formatDate';
import Modal from './Modal';
import {
  ArrayOfLevelsProps,
  cellsTableHead,
  DataModalLevelProps,
  LevelFilterProps,
  levelFilters,
  levelPages,
  LevelPagesProps,
  LevelProps,
  modalLevelDefaultValues,
} from './schema';
import { ActionButton, Search } from './styles';

export const Level = () => {
  const methods = useForm({ defaultValues: { search: '' } });
  const [levels, setLevels] = useState<ArrayOfLevelsProps>([]);
  const [filters, setFilters] = useState<LevelFilterProps>(levelFilters);
  const [search, setSearch] = useState<string>('');
  const [pages, setPages] = useState<LevelPagesProps>(levelPages);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>({} as DataModalLevelProps);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { sort, sortBy } = filters;
  const { page } = pages;

  useEffect(() => {
    setLoading(true);
    api
      .get(
        `levels?sort=${sort}&sortBy${sortBy}&page=${page}&limit=6&search=${search}`,
      )
      .then((response) => {
        setPages({ ...pages, lastPage: response.data.lastPage });
        setLevels(response?.data.levels);
      })
      .catch(() => toast.error('Não foi possível consultar os níveis'))
      .finally(() => setLoading(false));
  }, [refresh, pages.page, filters, search]);

  const handleInclude = () => {
    setModalData(modalLevelDefaultValues);
    setModalIsOpen(true);
  };

  const handleDelete = (levelId?: string) => {
    Swal.fire({
      title: 'Realmente deseja excluir o nível?',
      width: 600,
      padding: '3em',
      color: '#bdbdbd',
      background: '#313131',
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Não, cancelar!',
    }).then(async (result) => {
      if (result.value) {
        setLoading(true);
        await api
          .delete(`levels/${levelId}`)
          .then(() => {
            setRefresh((bollean) => !bollean);
            toast.success('Nível excluído com sucesso!');
          })
          .catch(() => {
            toast.error('Ocorreu um erro ao excluir o nível!');
          })
          .finally(() => setLoading(false));
      }
    });
  };

  const cellsTableBody = useMemo(
    () => levels.map((level: LevelProps) => (
      <TableRow key={level._id}>
        <TableCell>{level.name}</TableCell>
        <TableCell align="center">{formatDate(level?.created_at)}</TableCell>
        <TableCell align="center">0</TableCell>
        <TableCell align="right" style={{ width: '150px' }}>
          <ActionButton>
            <Button
              type="button"
              variant="outlined"
              color="info"
              size="small"
              isIconButton
              onClick={() => {
                setModalData({
                  ...level,
                  action: 'edit',
                });
                setModalIsOpen(true);
              }}
            >
              <MoreHoriz />
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="error"
              size="small"
              isIconButton
              onClick={() => handleDelete(level._id)}
            >
              <Delete />
            </Button>
          </ActionButton>
        </TableCell>
      </TableRow>
    )),
    [levels],
  );

  return (
    <>
      <Search>
        <TextField
          name="search"
          placeholder="Pesquisar nível"
          methods={methods}
          search
          onClickButton={() => setSearch(methods.getValues('search'))}
        />
      </Search>

      <Navbar title="Níveis" onClickInclude={handleInclude} />

      <Table
        cellsTableHead={cellsTableHead}
        cellsTableBody={cellsTableBody}
        filters={filters}
        setFilters={setFilters}
        pages={pages}
        onChangePage={(pageValue: number) => setPages({ ...pages, page: pageValue })}
      />

      <Modal
        id="levels"
        title="Nível"
        onCloseModal={() => setModalIsOpen(false)}
        modalIsOpen={modalIsOpen}
        modalData={modalData}
        refresh={() => setRefresh((value) => !value)}
        setLoading={setLoading}
      />

      {loading && <Loading />}
    </>
  );
};
