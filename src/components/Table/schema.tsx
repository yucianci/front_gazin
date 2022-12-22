import { pageProps } from '../../data';
import { DeveloperFilterProps } from '../../pages/Developer/schema';
import { LevelFilterProps } from '../../pages/Level/schema';

export type CellTableHeadProps = {
  id: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  ordered?: boolean;
};

export type MuiTableProps = {
  cellsTableHead: Array<CellTableHeadProps>;
  cellsTableBody: JSX.Element[];
  filters: LevelFilterProps | DeveloperFilterProps;
  setFilters:
    | React.Dispatch<React.SetStateAction<LevelFilterProps>>
    | React.Dispatch<React.SetStateAction<DeveloperFilterProps>>;
  pages: pageProps;
  onChangePage: any;
};
