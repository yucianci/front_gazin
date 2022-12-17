import { CellTableHeadProps } from '../../components/Table/schema';

export type TableLevelProps = {
  name: string;
  createdAt: string;
};

export const cellsTableHead: Array<CellTableHeadProps> = [
  {
    id: 'name',
    title: 'Nome',
  },
  {
    id: 'createdAt',
    title: 'Data de criação',
    align: 'center',
  },
];

export const levels: Array<TableLevelProps> = [
  {
    name: 'Júnior',
    createdAt: '17/12/2022',
  },
  {
    name: 'Pleno',
    createdAt: '17/12/2022',
  },
  {
    name: 'Sênior',
    createdAt: '17/12/2022',
  },
];
