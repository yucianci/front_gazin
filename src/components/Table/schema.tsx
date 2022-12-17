/* eslint-disable no-undef */
export type CellTableHeadProps = {
  id: string;
  title: string;
  align?: 'left' | 'center' | 'right';
};

export type MuiTableProps = {
  cellsTableHead: Array<CellTableHeadProps>
  cellsTableBody: JSX.Element[]
}
