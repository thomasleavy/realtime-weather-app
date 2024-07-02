import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for making HTTP requests

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&&units=metric&appid=fd5d38e5ea288e3e291e2f2238c97b45`
  //i got this from https://openweathermap.org/current. i put my API key in at {API key}. 
  //i put $location in at {city name} and &&units=metric

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      }).catch((error) => { //if the user enters somewhere that doesn't exist
        console.error("Error, try again", error);
      });
    }
  };


  return (
    <div className="app">
        <div className='header'>
          <h2>Real-time Weather App</h2>
          </div>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        {data.name && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed} KPH</p> : null}
              <p>Winds</p>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;