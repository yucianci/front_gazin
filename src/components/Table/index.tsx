import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  UnfoldMore,
} from '@mui/icons-material';
import {
  Pagination,
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

export const Table = ({
  cellsTableHead,
  cellsTableBody,
  filters,
  setFilters,
  pages,
  onChangePage,
}: MuiTableProps) => {
  const { sort, sortBy } = filters;
  const { page, lastPage } = pages;

  const handleSortByAscOrDesc = () => {
    if (sort === 'asc') {
      return 'desc';
    }
    return 'asc';
  };
  return (
    <Main>
      <TableContainer style={{ borderRadius: '6px' }}>
        <MuiTable aria-label="simple table">
          <TableHead>
            <TableRow>
              {cellsTableHead.map((cellTableHead: any) => (
                <TableCell
                  key={cellTableHead.id}
                  align={cellTableHead.align}
                  onClick={() => {
                    if (cellTableHead.title) {
                      setFilters({
                        ...filters,
                        sortBy: cellTableHead.id,
                        sort: handleSortByAscOrDesc(),
                      });
                    }
                  }}
                >
                  {cellTableHead?.title}

                  {cellTableHead.title && sortBy !== cellTableHead.id ? (
                    <UnfoldMore style={{ opacity: '0.4' }} />
                  ) : cellTableHead.title && sort === 'asc' ? (
                    <KeyboardArrowDown />
                  ) : !!cellTableHead.title && (
                    <KeyboardArrowUp />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{cellsTableBody}</TableBody>
        </MuiTable>
        <Pagination
          size="medium"
          style={{
            background: '#383838',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '12px 16px',
          }}
          count={lastPage}
          page={page}
          onChange={(event, value: any) => onChangePage(value)}
          showFirstButton
          showLastButton
        />
      </TableContainer>
    </Main>
  );
};
