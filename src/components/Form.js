import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getWeather, getForecast } from '../services/api';
import Alert from '@mui/material/Alert';


const Form = ({ setResult, setDayForcastResult, setDaysForecastResult, setHistory }) => {
    const [data, setData] = useState({ city:'', country: '' });
    const [alertBar, setAlertBar] = useState(false);

    const handleSubmit = async (city, country) => {

        if (city === '' && country === '') {
            setAlertBar(true)
            return;
        }

        if (!alertBar)
        {
            let result = await getWeather(city, country);
            setResult(result);

            let forecastResult = await getForecast(city, country);

            const dayResult = forecastResult.list.slice(0, 5).map(item => {
                return {
                    time: item.dt_txt,
                    temp: Math.round(item.main.temp)
                }
            });
            setDayForcastResult(dayResult);

            const DaysForecast = () => {
                const filteredData = forecastResult.list.filter((item, index, arr) => {
                    const day = new Date(item.dt_txt).getDay();
                    return arr.findIndex(element => new Date(element.dt_txt).getDay() === day) === index;
                });

                const daysResult = filteredData.map((item, index) => {
                    return {
                        time: item.dt_txt,
                        temp: item.main.temp
                    }
                })

                setDaysForecastResult(daysResult);
        
                return null;
            }

            DaysForecast();

            const localStorageData = {
                date: new Date().toLocaleTimeString(),
                temp: result.main.temp,
                city,
            }

            const getHistory = JSON.parse(localStorage.getItem('history')) || [];
            setHistory([...getHistory, localStorageData])
            localStorage.setItem('history', JSON.stringify([...getHistory, localStorageData]))

        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
        setAlertBar(false);
    };

    return (
        <>
        <Box
            component="form"
            sx={{
                display: 'flex',
                alignContent: 'center',
                width: '100%',
                marginTop: 5,
                justifyContent: 'space-around',
            }}
        >
            <TextField 
                sx={{ flexGrow: 1, marginRight: 2 }} 
                variant="outlined" 
                placeholder='City' 
                name="city" 
                value={data.city} 
                onChange={handleChange}
            />
            <TextField 
                sx={{ flexGrow: 1, marginRight: 2 }}  
                variant="outlined" 
                placeholder='Country' 
                name="country" 
                value={data.country} 
                onChange={handleChange}
            />
            <Button variant="contained" onClick={() => handleSubmit(data.city, data.country)}>Get Weather</Button>
        </Box>
        {alertBar && (
            <Alert severity="error">All Fields required</Alert>
        )}
        </>
    );
};

export default Form;
