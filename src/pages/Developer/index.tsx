import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { api } from '../../api';
import { Loading } from '../../components/Loading';
// import { Modal } from '../../components/Modal';
import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import { ActionButtons } from '../../components/Table/ActionButtons';
import { TextFieldSearch } from '../../components/TextField/Search';
import { defaultPage, pageProps } from '../../data';
import Modal from './Modal';
import {
  ArrayOfDevelopersProps,
  cellsTableHead,
  DataModalDeveloperProps,
  developerDefaultFilter,
  DeveloperFilterProps,
  DeveloperProps,
  modalDeveloperDefaultValues,
} from './schema';

export const Developer = () => {
  const methods = useForm({ defaultValues: { search_desenvolvedor: '' } });
  const [developers, setDevelopers] = useState<ArrayOfDevelopersProps>([]);
  const [filters, setFilters] = useState<DeveloperFilterProps>(
    developerDefaultFilter,
  );
  const [search, setSearch] = useState<string>('');
  const [pages, setPages] = useState<pageProps>(defaultPage);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>({} as DataModalDeveloperProps);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(
        `developers?sort=${filters.sort}&sortBy${filters.sortBy}&page=${pages.page}&limit=6&search=${search}`,
      )
      .then((response) => {
        setPages({ ...pages, lastPage: response.data.lastPage });
        setDevelopers(response?.data.developers);
      })
      .catch(() => toast.error('Não foi possível consultar os desenvolvedores'))
      .finally(() => setLoading(false));
  }, [refresh, pages.page, filters, search]);

  const handleInclude = () => {
    setModalData(modalDeveloperDefaultValues);
    setModalIsOpen(true);
  };

  const handleDelete = (developerId?: string) => {
    Swal.fire({
      title: 'Realmente deseja excluir o desenvolvedor?',
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
          .delete(`developers/${developerId}`)
          .then(() => {
            setRefresh((bollean) => !bollean);
            toast.success('Desenvolvedor excluído com sucesso!');
          })
          .catch(() => {
            toast.error('Ocorreu um erro ao excluir o desenvolvedor!');
          })
          .finally(() => setLoading(false));
      }
    });
  };

  const cellsTableBody = useMemo(
    () => developers.map((developer: DeveloperProps) => (
      <TableRow key={developer._id}>
        <TableCell>{developer.name}</TableCell>
        <TableCell align="center">{developer.level.name}</TableCell>
        <TableCell align="center">{developer.sex.name}</TableCell>
        <TableCell align="center">{developer.birthday}</TableCell>
        <TableCell align="right" style={{ width: '150px' }}>
          <ActionButtons
            data={developer}
            setModalIsOpen={setModalIsOpen}
            setModalData={setModalData}
            handleDelete={handleDelete}
          />
        </TableCell>
      </TableRow>
    )),
    [developers],
  );

  return (
    <>
      <TextFieldSearch name="desenvolvedor" methods={methods} setSearch={setSearch} />

      <Navbar title="Desenvolvedores" onClickInclude={handleInclude} />

      <Table
        cellsTableHead={cellsTableHead}
        cellsTableBody={cellsTableBody}
        filters={filters}
        setFilters={setFilters}
        pages={pages}
        onChangePage={(pageValue: number) => setPages({ ...pages, page: pageValue })}
      />

      {modalIsOpen && (
      <Modal
        id="developers"
        title="Desenvolvedor"
        onCloseModal={() => setModalIsOpen(false)}
        modalData={modalData}
        refresh={() => setRefresh((value) => !value)}
        setLoading={setLoading}
      />
      )}

      {loading && <Loading />}
    </>
  );
};
