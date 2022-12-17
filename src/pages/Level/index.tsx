import { TableCell, TableRow } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import { levels, cellsTableHead } from './schema';

export const Level = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const cellsTableBody = useMemo(() => levels.map((level) => (
    <TableRow key={level.name}>
      <TableCell>{level.name}</TableCell>
      <TableCell align="center">{level.createdAt}</TableCell>
    </TableRow>
  )), []);

  return (
    <>
      <Navbar title="Níveis" setModalIsOpen={setModalIsOpen} />

      <Table cellsTableHead={cellsTableHead} cellsTableBody={cellsTableBody} />

      <Modal
        title="Cadastrar Nível"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <div>teste</div>
      </Modal>
    </>
  );
};
