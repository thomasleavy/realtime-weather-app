# Real-time Weather App

Welcome to the Real-time Weather App! This application enables users to check the current weather conditions of various cities worldwide. It uses HTML, CSS, JavaScript, and the React framework to provide a responsive and interactive experience.

## Features

- **Real-time Weather Data**: Fetches current weather information using a third-party API.
- **Temperature Display**: Shows temperature in Celsius for the selected city.
- **Feels Like Temperature**: Displays the perceived temperature considering wind and humidity.
- **Wind Speed**: Indicates wind speed in kilometres (KPH).
- **Humidity**: Provides the current humidity level as a percentage.

## Technologies Used

- **React**: Front-end framework for building user interfaces.
- **HTML/CSS**: Structuring and styling the web application.
- **JavaScript**: Programming language used for functionality and interactivity.
- **API Integration**: Uses a weather API to get real-time data.

## Getting Started

To run the app locally or contribute to its development, follow these steps:

**Clone the Repository:**

   bash
   git clone https://github.com/thomasleavy/realtime-weather-app.git
   cd realtime-weather-app

## Install Dependencies:
bash
Copy code
npm install
Obtain API Key:

Visit OpenWeatherMap to obtain an API key.

## Set API Key:

Replace YOUR_API_KEY in src/App.js with your actual API key:

javascript
Copy code
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=YOUR_API_KEY`;

## Run the Application:
bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the app.
