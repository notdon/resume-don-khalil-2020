import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'year', label: 'Year', minWidth: 70 },
  {
    id: 'description',
    label: 'Description',
    minWidth: 200,
    align: 'left',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'link',
    label: 'Link',
    minWidth: 70,
    align: 'left',
    format: (value) => value.toLocaleString(),
  },
];

function createData(name, year, description, link) {
  return { name, year, description, link };
}

const rows = [
  createData('Avon Collective', 2019, "Ecommerce store using Shopify", "https://avoncollective.com"),
  createData('Bloom', 2018, "documentation technical writer for decentralized identity system", "https://github.com/notdon/bloom-attestation-kit"),
  createData('Ambrosus', 2018, "UI mock up and prototype for Decentralized Marijuana Marketplace", "Available on request"),
  createData('Cortex', 2017 , "Stock Market prediction using machine learning and technical analysis trading", "https://github.com/notdon/cortex"),
  createData('Noobs Trader', 2017 , "Social Startup to increase awarenes for Indonesian milennials to invest in the market", ""),
];

const useStyles = makeStyles({
  root: {
    width: '1000',
  },
  container: {
    maxHeight: 600,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.link}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    
  );
}
