import { CellTableHeadProps } from '../../components/Table/schema';

export type LevelProps = {
  _id: string;
  name: string;
  created_at: string;
};

export type ArrayOfLevelsProps = LevelProps[];

export const cellsTableHead: CellTableHeadProps[] = [
  {
    id: 'name',
    title: 'Nome',
  },
  {
    id: 'created_at',
    title: 'Data de criação',
    align: 'center',
  },
];

export type LevelFilterProps = {
  sort: 'asc' | 'desc';
  sortBy: 'name' | 'created_at';
}

export const levelFilters:LevelFilterProps = {
  sort: 'asc',
  sortBy: 'name',
};

export type LevelPagesProps = {
  page: number;
  lastPage: number;
}

export const levelPages:LevelPagesProps = {
  page: 1,
  lastPage: 1,
};
