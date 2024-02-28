import { useState } from 'react';
import { Box, Paper, styled } from '@mui/material';
import Sunrise from '../assets/images/sunrise.jpg'
import Form from '../components/Form';
import Information from '../components/Information';
import Forcast from '../components/Forcast';

const Container = styled(Box)({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunrise})`,
    width: '100%',
    height: '30vh',
    backgroundSize: 'cover',
    borderRadius: '20px 20px 0 0'
})

const Content = styled(Paper)({
    width: '100%',
    padding: '20px',
    marginTop: '-15vh',
    zIndex: 1,
    '@media (min-width:600px)': {
        width: '60%',
    }
})

const Home = () => {
    const [result, setResult] = useState({})
    const [dayForcast, setDayForcastResult] = useState({})

    return (
        <Container>
            <Image />
            <Content elevation={3}>
                <Form setResult={setResult} setDayForcastResult={setDayForcastResult} />
                <Box ml={2} sx={{ display: 'flex'}}>
                    <Information result={result} />
                    {dayForcast && (
                    <Forcast result={dayForcast} />
                    )}
                </Box>
            </Content>
        </Container>
    )
}

export default Home;
