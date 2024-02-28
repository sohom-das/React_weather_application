import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Forecast = ({ result, daysForecast }) => {

    const timings = (data) => {
      const time = new Date(data);
      return `${time.getHours()}:00`;
    }

    const formatDate = (data) => {
      const date = new Date(data);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  }
  

    return (
      result && Object.keys(result).length > 0 ? (
        <>
        <Box sx={{ mt: 2 }}>
          <Typography variant='h6'>Hourly Forecast</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {result.map((item, index) => (
                                <TableCell key={index}>{timings(item.time)}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {result.map((item, index) => (
                                <TableCell key={index}>{item.temp} °C</TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

      <Box sx={{ mt: 2 }}>
      <Typography variant='h6'>5 Days Forecast</Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {daysForecast.map((item, index) => (
                            <TableCell key={index}>{formatDate(item.time)}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {daysForecast.map((item, index) => (
                            <TableCell key={index}>{Math.round(item.temp)} °C</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
      </Box>
      </>
      ) : null
    );
}

export default Forecast;
