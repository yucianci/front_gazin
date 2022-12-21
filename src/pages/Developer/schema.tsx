import { CellTableHeadProps } from '../../components/Table/schema';

export type DeveloperProps = {
  _id?: string;
  name: string;
  level: { id: string; name: string };
  sex: string;
  birthday: string;
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
    id: 'birthday',
    title: 'Data de nascimento',
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
  sortBy: 'name' | 'level' | 'sex' | 'birthday' | 'age';
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
  birthday: string;
  age?: number | null;
  hobby?: string;
  action?: 'include' | 'edit';
};

export const modalDeveloperDefaultValues = {
  id: '',
  name: '',
  level: { id: '', name: '' },
  sex: '',
  birthday: '',
  age: null,
  hobby: '',
  action: 'include',
};
