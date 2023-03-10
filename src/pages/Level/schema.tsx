import { CellTableHeadProps } from '../../components/Table/schema';

export type LevelProps = {
  _id?: string;
  name: string;
  created_at: string;
};

export type ArrayOfLevelsProps = LevelProps[];

export const cellsTableHead: CellTableHeadProps[] = [
  {
    id: 'name',
    title: 'Nome',
    ordered: true,
  },
  {
    id: 'created_at',
    title: 'Data de criação',
    align: 'center',
  },
  {
    id: '',
    title: "Dev's atribuídos",
    align: 'center',
  },
  {
    id: 'action',
    title: '',
    align: 'right',
  },
];

export type LevelFilterProps = {
  sort: 'asc' | 'desc';
  sortBy: 'name';
}

export const levelDefaultFilters:LevelFilterProps = {
  sort: 'asc',
  sortBy: 'name',
};

export type DataModalLevelProps = {
  id?: string;
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
