import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  withStyles } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
     minWidth: 400,
    // maxWidth: 550,
    // minHeight: 100,
  },
  delete: {
    padding: 0,
  },
  container: {
    maxHeight: 400,
  },
});


const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.selected,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('code444', 'Phòng Thực Hành B14', '13/12/2020'),
  createData('code555', 'Phòng Thực Hành B12', '13/12/2020'),
  createData('code666', 'Phòng Thực Hành B14', '15/12/2020'),
  createData('code777', 'Phòng Thực Hành B15', '17/12/2020'),
  createData('code888', 'Phòng Thực Hành B12', '13/12/2020'),
  createData('code999', 'Phòng Thực Hành B14', '15/12/2020'),
  createData('code844', 'Phòng Thực Hành B12', '13/12/2020'),
  createData('code754', 'Phòng Thực Hành B14', '15/12/2020'),
  createData('code865', 'Phòng Thực Hành B12', '13/12/2020'),
  createData('code123', 'Phòng Thực Hành B14', '15/12/2020'),
  
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Mã CSVC</TableCell>
            <TableCell >Nơi phân bổ</TableCell>
            <TableCell >Thời gian</TableCell>
            <TableCell >Xóa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
              <StyledTableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
              <TableCell>
              <IconButton className={classes.delete} edge="end" aria-label="delete">
                    <DeleteIcon />
              </IconButton>
              </TableCell>
              </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
