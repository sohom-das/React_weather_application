import { Grid, Card, CardContent, Typography, Stack } from "@mui/material";
import { LocationOn, Thermostat, Dehaze, Opacity, Air, WbSunny, WbTwilight } from '@mui/icons-material';

const Information = ({ result }) => {

    return (
        result && Object.keys(result).length > 0 ? (
            <Grid container spacing={2} style={{ marginTop: '30px' }}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <LocationOn fontSize="small" /> Location
                            <Typography>
                                {result.name}, {result.sys.country}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Thermostat fontSize="small" /> Temperature
                            <Typography>
                                {Math.round(result.main.temp)}°C
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Dehaze fontSize="small" /> Condition
                            <Typography>
                            {result.weather[0].main} {Math.round(result.main.temp_min)}°C / {Math.round(result.main.temp_max)}°C
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Opacity fontSize="small" /> Humidity
                            <Typography>
                                {result.main.humidity}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Air fontSize="small" /> Wind Speed
                            <Typography>
                                {result.wind.speed} MPH
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <WbSunny fontSize="small" /> Sunrise
                            <Typography>
                                {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <WbTwilight fontSize="small" /> Sunset
                            <Typography>
                                {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        ) : null
    );
};

export default Information;
