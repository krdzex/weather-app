import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import WeatherCard from './Components/WeatherCard';
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

  const [newLocation, setNewLocation] = useState(false);

  const addNewLocation = () => {
    setNewLocation(true);
  }


  const onSubmitChange = (data) => {
    setNewLocation(false);
    setAllLocation([...allLocations, data])
  }

  const removePopup = () => {
    setNewLocation(false)
  }
  useEffect(() => {
    const locationsData = JSON.parse(localStorage.getItem("allLocations"));
    setAllLocation(locationsData)
  }, [])

  useEffect(() => {
    localStorage.setItem("allLocations", JSON.stringify(allLocations));
  }, [allLocations])

  const removeLocation = (locationId) => {
    const locationsCopy = allLocations.slice();
    for (let i = 0; i < locationsCopy.length; i++) {
      if (i === locationId) {
        locationsCopy.splice(i, 1);
      }
    }
    setAllLocation(locationsCopy)
  }
  return (
    <div className="App">
      <header>Weather app</header>
      <div className="grid">
        {allLocations.map((location, id) => {
          return <WeatherDisplay locationInfo={location} key={id} removeLocation={removeLocation} id={id} />
        })}
        {newLocation && <WeatherCard newLocation={newLocation} onSubmitChange={onSubmitChange} removePopup={removePopup} />}
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
