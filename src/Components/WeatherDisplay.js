import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const WeatherDisplay = (props) => {

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
    }));

    const classes = useStyles();

    const temp = Math.round(props.locationInfo.main.temp)
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer', textAlign: "center" }}>
                            {props.locationInfo.name}
                        </Typography>
                        <Typography variant="body2" style={{ cursor: 'pointer', textAlign: "center" }}>
                            {temp}°C
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer', textAlign: "center" }}>
                            Remove
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default WeatherDisplay;