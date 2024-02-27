import { Box, Hidden, styled } from '@mui/material';
import Sunrise from '../assets/images/sunrise.jpg'
import Form from '../components/Form';
import Information from '../components/Information';

const Component = styled(Box)({
    marginTop: '10px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden'

})

const Image = styled(Box)({
    backgroundImage: `url(${Sunrise})`,
    width: '80%',
    height: '30%',
    backgroundSize: 'cover',
    borderRadius: '20px 20px 0 0'
})

const Home = () => {
    return(
        <Component>
                <Image></Image>
                <Form />
                <Information />
        </Component>
    )
}

export default Home;