import { useState } from 'react';
import { Box, Paper, styled } from '@mui/material';
import Form from '../components/Form';
import Information from '../components/Information';
import Forcast from '../components/Forcast';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Container = styled(Box)({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '30px'
})

const Content = styled(Paper)({
    width: '100%',
    padding: '20px',
    backgroundColor: '#EEEEEE',
    zIndex: 1,
    '@media (min-width:600px)': {
        width: '60%',
    },
})

const Home = () => {
    const [result, setResult] = useState({})
    const [dayForcast, setDayForcastResult] = useState({})
    const [daysForecast, setDaysForecastResult] = useState([])

    return (
        <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NewZapp
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        <Container>
            <Content elevation={3}>
                <Form setResult={setResult} setDayForcastResult={setDayForcastResult} setDaysForecastResult={setDaysForecastResult}/>
                <Box ml={2} sx={{ display: 'flex', flexDirection: 'column'}}>
                    {result && Object.keys(result).length > 0 && (
                        <Information result={result} />
                    )}
                    {dayForcast && Object.keys(dayForcast).length > 0 && (
                        <Forcast result={dayForcast} daysForecast={daysForecast}/>
                    )}
                </Box>
            </Content>
        </Container>
        </>
    )
}

export default Home;
