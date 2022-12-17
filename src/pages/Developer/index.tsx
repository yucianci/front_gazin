import { TableCell, TableRow } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import { devs, cellsTableHead } from './schema';

export const Developer = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const cellsTableBody = useMemo(() => devs.map((dev) => (
    <TableRow key={dev.name}>
      <TableCell>{dev.name}</TableCell>
      <TableCell align="center">{dev.gender}</TableCell>
      <TableCell align="center">{dev.birthdayDate}</TableCell>
      <TableCell align="center">{dev.level}</TableCell>
    </TableRow>
  )), []);

  return (
    <>
      <Navbar title="Desenvolvedores" setModalIsOpen={setModalIsOpen} />

      <Table cellsTableHead={cellsTableHead} cellsTableBody={cellsTableBody} />

      <Modal
        title="Cadastrar Desenvolvedor"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <div>teste</div>
      </Modal>
    </>
  );
};
