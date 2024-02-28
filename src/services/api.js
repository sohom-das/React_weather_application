import axios from "axios";

const API_KEY = 'ea4d5e6c172daee66dc7669bc1c434f1';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeather = async (city, country) => {
    try{
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api', error.message);
        return error.response;
    }
}

export const getForecast = async (city, country) => {
    try{
        let response = await axios.get(`${FORECAST_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api', error.message);
        return error.response;
    }
}