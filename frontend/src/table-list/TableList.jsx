import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TableToolbar from './TableToolbar';
import TableHeader from './TableHeader';

export default function TableList({header, rows, headerLabel}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableToolbar headerlabel={headerLabel}/>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <TableHeader headCells={header}/>
            <TableBody>
              {
                rows
                  .map((row, rowIdx) => (
                    <TableRow key={rowIdx}>
                    {
                      header
                        .map((h, hIdx) =>  <TableCell align="left" key={hIdx}>{row[h.id]}</TableCell>)
                    }
                  </TableRow>
                  ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

TableList.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  list: PropTypes.array,
  headerLabel: PropTypes.string.isRequired
}
