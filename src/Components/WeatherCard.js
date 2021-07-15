import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';


const WeatherCard = (props) => {
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
    const inputChanger = (e) => {
        setInputValue(e.target.value)
    }
    const [inputValue, setInputValue] = useState("")
    const classes = useStyles();
    const submit = (e) => {
        e.preventDefault();
        props.onSubmitChange(inputValue);
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item>
                        <form onSubmit={submit}>
                            <TextField id="standard-basic" label="Enter location" onChange={inputChanger} value={inputValue} />
                        </form>
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

export default WeatherCard;