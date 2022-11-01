import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

  import { infoActions } from '../../store/info-slice';
  import { useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  const TableData = ({id, image, owner, date, name, description, visibility, update, watchers}) => {
    const dispatch = useDispatch();
    const sendData = () => {
        dispatch(
            infoActions.addToList({
              id,
              image,
              owner,
              name,
              description,
              visibility,
              watchers
            })
        )
    }

  return (
    <TableContainer component={Paper} fullWidth>
        <Table aria-label="customized table">
            <TableBody>
                <StyledTableRow key={id} onClick={sendData}>
                    <StyledTableCell width={5}>{id}</StyledTableCell>
                    <StyledTableCell>{name}</StyledTableCell>
                    <StyledTableCell>{description}</StyledTableCell>
                </StyledTableRow> 
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TableData