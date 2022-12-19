import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../api';
import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import TextField from '../../components/TextField';
import { formatDate } from '../../utils/formatDate';
import {
  ArrayOfLevelsProps,
  cellsTableHead,
  LevelFilterProps,
  levelFilters,
  levelPages,
  LevelPagesProps,
  LevelProps,
} from './schema';
import { ModalBody, Search } from './styles';

const defaultValues = {
  search: '',
};

export const Level = () => {
  const methods = useForm({ defaultValues });
  const [levels, setLevels] = useState<ArrayOfLevelsProps>([]);
  const [filters, setFilters] = useState<LevelFilterProps>(levelFilters);
  const [search, setSearch] = useState<string>('');
  const [pages, setPages] = useState<LevelPagesProps>(levelPages);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const { sort, sortBy } = filters;
  const { page } = pages;

  useEffect(() => {
    api
      .get(`levels?sort=${sort}&sortBy${sortBy}&page=${page}&limit=10&search=${search}`)
      .then((response) => {
        setPages({ ...pages, lastPage: response.data.lastPage });
        setLevels(response?.data.levels);
      });
  }, [pages.page, filters, search]);

  const cellsTableBody = useMemo(
    () => levels.map((level: LevelProps) => (
      <TableRow key={level._id}>
        <TableCell>{level.name}</TableCell>
        <TableCell align="center">{formatDate(level?.created_at)}</TableCell>
      </TableRow>
    )),
    [levels],
  );

  return (
    <>

      <Search>
        <TextField name="search" placeholder="Pesquisar nível" methods={methods} search onClickButton={() => setSearch(methods.getValues('search'))} />
      </Search>

      <Navbar title="Níveis" setModalIsOpen={setModalIsOpen} />

      <Table
        cellsTableHead={cellsTableHead}
        cellsTableBody={cellsTableBody}
        filters={filters}
        setFilters={setFilters}
        totalPages={pages.lastPage}
        defaultPage={pages.page}
        onChangePage={(pageValue: number) => setPages({ ...pages, page: pageValue })}
      />

      <Modal
        title="Cadastrar Nível"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <ModalBody>Teste</ModalBody>
      </Modal>
    </>
  );
};
