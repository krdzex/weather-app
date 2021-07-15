import { Button } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import WeatherCard from './Components/WeatherCard';
import { getLocation } from "./Components/LocationWeather";
import WeatherDisplay from './Components/WeatherDisplay';


function App() {

  const [allLocations, setAllLocation] = useState([])


  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      height: "50px",
      borderRadius: "50%",
      fontSize: "30px",
      bottom: 0,
      right: 0,
      position: "absolute"
    },
  }));
  const classes = useStyles();

  console.log(allLocations)
  const [newLocation, setNewLocation] = useState(false);

  const addNewLocation = () => {
    setNewLocation(true);
  }

  const onSubmitChange = (input) => {
    setNewLocation(false);
    getLocation(input, data => {
      setAllLocation([...allLocations, data]);
    });
  }

  return (
    <div className="App">
      <div className="grid">
        {allLocations.map((location, id) => {
          return <WeatherDisplay locationInfo={location} key={id} />
        })}
        {newLocation && <WeatherCard newLocation={newLocation} onSubmitChange={onSubmitChange} />}
      </div>


      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={addNewLocation}
        disabled={newLocation}
      >+</Button>
    </div>
  );
}

export default App;
