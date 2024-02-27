import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
    const [city, setCity] = useState('')

    const handleSubmit = () => {
        console.log('city name', city);
    }
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignContent: 'center',
        width: '100%',
        marginTop: 5,
        justifyContent: 'space-around'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField sx={{ flexGrow: 1 }} variant="outlined" value={city} onChange={e => setCity(e.target.value)}/>
      <Button variant="contained" onClick={handleSubmit}>Get Weather</Button>
    </Box>
  )
}

export default Form