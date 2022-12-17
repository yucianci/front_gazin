import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import MuiTable from '@mui/material/Table';
import React from 'react';
import { MuiTableProps } from './schema';
import { Main } from './styles';

export const Table = ({ cellsTableHead, cellsTableBody }: MuiTableProps) => (
  <Main>
    <TableContainer style={{ borderRadius: '6px' }}>
      <MuiTable aria-label="simple table">
        <TableHead>
          <TableRow>
            {cellsTableHead.map((cellTableHead) => (
              <TableCell key={cellTableHead.id} align={cellTableHead.align}>
                {cellTableHead.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cellsTableBody}
        </TableBody>
      </MuiTable>
    </TableContainer>
  </Main>
);
