import { CellTableHeadProps } from '../../components/Table/schema';

export type DeveloperProps = {
  _id?: string;
  name: string;
  level: { id: string; name: string };
  sex: { id: string; name: string };
  age?: number | null;
  hobby?: string;
};

export type ArrayOfDevelopersProps = DeveloperProps[];

export const cellsTableHead: CellTableHeadProps[] = [
  {
    id: 'name',
    title: 'Nome',
    ordered: true,
  },
  {
    id: 'level',
    title: 'Nível',
    align: 'center',
  },
  {
    id: 'sex',
    title: 'Sexo',
    align: 'center',
  },
  {
    id: 'action',
    title: '',
    align: 'right',
  },
];

export type DeveloperFilterProps = {
  sort: 'asc' | 'desc';
  sortBy: 'name';
};

export const developerDefaultFilter: DeveloperFilterProps = {
  sort: 'asc',
  sortBy: 'name',
};

export type DataModalDeveloperProps = {
  id?: string;
  name: string;
  level: { id: string; name: string };
  sex: string;
  age?: number | null;
  hobby?: string;
  action?: 'include' | 'edit';
};

export const modalDeveloperDefaultValues: DataModalDeveloperProps = {
  id: '',
  name: '',
  level: { id: '', name: '' },
  sex: '',
  age: null,
  hobby: '',
  action: 'include',
};
