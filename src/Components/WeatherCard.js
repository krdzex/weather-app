import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { getLocation } from './LocationWeather';

const WeatherCard = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: 250,
            margin: "5px 5px"
        },
        paper: {
            padding: "15px 15px",
            margin: 'auto',
            maxWidth: 500,
            height: 100
        },
    }));
    const inputChanger = (e) => {
        setInputValue(e.target.value)
    }
    const [inputError, setInputError] = useState(false);
    const [inputValue, setInputValue] = useState("")
    const classes = useStyles();
    const submit = (e) => {
        e.preventDefault();
        getLocation(inputValue, data => {
            if (data !== false) {
                props.onSubmitChange(data);
                setInputError(false);
            } else {
                setInputError(true);
            }
        });
    }



    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item style={{}}>
                        <form onSubmit={submit}>
                            <TextField id="standard-basic" label="Enter location" onChange={inputChanger} value={inputValue} autoFocus />
                        </form>
                        {inputError && < Typography variant="body2" style={{ color: "red" }} onClick={() => props.removePopup()}>
                            We dont have that city,try again
                        </Typography>}
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer', textAlign: "center", color: "blue", bottom: 0 }} onClick={() => props.removePopup()}>
                            Remove
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
};

export default WeatherCard;