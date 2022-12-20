/* eslint-disable no-restricted-globals */
import { Delete, MoreHoriz } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../api';
import Button from '../../components/Button';
import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import TextField from '../../components/TextField';
import { formatDate } from '../../utils/formatDate';
import Modal from './Modal';
import {
  ArrayOfLevelsProps,
  cellsTableHead,
  LevelFilterProps,
  levelFilters,
  levelPages,
  LevelPagesProps,
  LevelProps,
} from './schema';
import { ActionButton, Search } from './styles';

interface ModalLevelProps {
  id: string;
  name: string;
  created_at: string;
  action?: 'include' | 'edit';
}

export const modalLevelDefaultValues = {
  id: '',
  name: '',
  created_at: '',
  action: 'include',
};

export const Level = () => {
  const methods = useForm({ defaultValues: { search: '' } });
  const [levels, setLevels] = useState<ArrayOfLevelsProps>([]);
  const [filters, setFilters] = useState<LevelFilterProps>(levelFilters);
  const [search, setSearch] = useState<string>('');
  const [pages, setPages] = useState<LevelPagesProps>(levelPages);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>({} as ModalLevelProps);
  const [refresh, setRefresh] = useState<boolean>(false);

  const { sort, sortBy } = filters;
  const { page } = pages;

  useEffect(() => {
    api
      .get(
        `levels?sort=${sort}&sortBy${sortBy}&page=${page}&limit=10&search=${search}`,
      )
      .then((response) => {
        setPages({ ...pages, lastPage: response.data.lastPage });
        setLevels(response?.data.levels);
      });
  }, [refresh, pages.page, filters, search]);

  const handleDelete = (levelId?: string) => {
    api.delete(`levels/${levelId}`).then(() => setRefresh((bollean) => !bollean)).catch((err) => console.log(err));
  };

  const cellsTableBody = useMemo(
    () => levels.map((level: LevelProps) => (
      <TableRow
        key={level._id}

      >
        <TableCell>{level.name}</TableCell>
        <TableCell align="center">{formatDate(level?.created_at)}</TableCell>
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
              onClick={() => {
                if (confirm('Deseja realmente excluir este nível?')) {
                  handleDelete(level._id);
                }
              }}
            >
              <Delete />
            </Button>
          </ActionButton>
        </TableCell>
      </TableRow>
    )),
    [levels],
  );

  const onClickInclude = () => {
    setModalData(modalLevelDefaultValues);
    setModalIsOpen(true);
  };

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

      <Navbar title="Níveis" onClickInclude={onClickInclude} />

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
      />
    </>
  );
};
