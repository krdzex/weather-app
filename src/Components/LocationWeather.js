import axios from "axios";


const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const apiUrl = "http://api.openweathermap.org/data/2.5/weather?"

const apiKey = "7220f5c667ff1617de464064d79c1118";


const getLocation = async (input, callback) => {
    await axios.get(`${apiUrl}`, {
        params: {
            appid: apiKey,
            q: input,
            units: "metric"
        }
    }, { headers })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

export { getLocation };