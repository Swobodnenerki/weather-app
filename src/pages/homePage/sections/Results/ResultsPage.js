import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination} from "@mui/material";
import React, {useState} from "react";
import {ResultsPageBackground, Divider, Header, SvgContainer, Image} from './ResultsPageElements';
import { TableWrapper } from "./ResultsPageElements";
import Paper from '@mui/material/Paper';
import Photo from '../../../../photos/svg1.svg'
const ResultsPage = ({results}) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 
    return(
    <ResultsPageBackground id='results'>
      <Divider>
        <Header>
          Results
        </Header>
      </Divider>
    <TableWrapper>
    <Paper sx={{ width: '85%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{background: 'yellow', fontWeight: 900}}>
              <TableCell>City</TableCell>
              <TableCell align="right">Temperature (℃)</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, idx) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={idx} data={data}>
                    <TableCell component="th" scope="row">
                      {data.name}
                  </TableCell>
                  <TableCell align="right">{Math.round(data.main.temp * 10) / 10}</TableCell>
                  <TableCell align="right">{new Date().toLocaleDateString()}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={results.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </TableWrapper>
    <SvgContainer>
      <Image src={Photo}/>
    </SvgContainer>
    </ResultsPageBackground>
    );
  };
  export default ResultsPage;