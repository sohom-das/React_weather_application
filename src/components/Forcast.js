import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Forecast = ({ result }) => {
    console.log('forecast', result);

    // Extract timings from the time property
    const timings = result.map(data => {
        const time = new Date(data.time);
        return `${time.getHours()}:00`;
    });

    // Extract temperature values
    const temperatureValues = result.map(data => data.temp);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {timings.map((time, index) => (
                            <TableCell key={index}>{time}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {temperatureValues.map((temp, index) => (
                            <TableCell key={index}>{temp} °C</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Forecast;
