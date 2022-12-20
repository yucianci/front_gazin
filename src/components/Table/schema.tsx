import { LevelFilterProps, LevelPagesProps } from '../../pages/Level/schema';

/* eslint-disable no-undef */
export type CellTableHeadProps = {
  id: string;
  title: string;
  align?: 'left' | 'center' | 'right';
};

export type MuiTableProps = {
  cellsTableHead: Array<CellTableHeadProps>;
  cellsTableBody: JSX.Element[];
  filters: LevelFilterProps;
  setFilters: React.Dispatch<React.SetStateAction<LevelFilterProps>>;
  pages: LevelPagesProps
  onChangePage: any;
};
