import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Country from "flagit";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const WeatherDisplay = (props) => {


    const speedDeg = props.locationInfo.wind.deg;

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: 250,
            margin: "5px 5px"
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        icon: {
            transform: "rotate(" + speedDeg + "deg)"
        }
    }));

    const classes = useStyles();
    const weather = props.locationInfo.weather[0].icon;
    const weatherIcon = "http://openweathermap.org/img/wn/" + weather + ".png";
    const temp = Math.round(props.locationInfo.main.temp);
    const speed = Math.round(props.locationInfo.wind.speed * 18 / 5);
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="body2" style={{
                            textAlign: "center", display: "flex",
                            justifyContent: "space-between", fontSize: "20px"
                        }}>
                            {props.locationInfo.name}
                            <Country countryShort={props.locationInfo.sys.country} size="md" />
                        </Typography>
                        <Typography variant="body2" style={{
                            display: "flex",
                            justifyContent: "space-between", alignItems: "center"
                        }}>
                            {temp}°C
                            <img src={weatherIcon} alt="country flag"></img>
                            {speed} km/h <ArrowRightAltIcon className={classes.icon} />
                        </Typography>
                        <Typography variant="body2" style={{ cursor: 'pointer', textAlign: "center", color: "blue" }} onClick={() => props.removeLocation(props.id)}>
                            Remove
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
};

export default WeatherDisplay;