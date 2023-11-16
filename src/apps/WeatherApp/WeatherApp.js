import { useState, useEffect } from "react"
import axios from "axios"
import SmoothScreenTransition from "../../components/SmoothScreenTransition/SmoothScreenTransition"
import Header from "../../components/Header/Header"
import "./WeatherApp.scss"
import ReversingBar from "../../components/ReversingBar/ReversingBar"
import LocationInfo from "./LocationInfo/LocationInfo"
import HourlyWeather from "./HourlyWeather/HourlyWeather"
import DailyForecast from "./DailyForecast/DailyForecast"
import OtherInfo from "./OtherInfo/OtherInfo"

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },(error) => {
          console.error("Błąd pobierania współrzędnych:", error)
        }
      )
    }else{
      console.error("Twoja przeglądarka nie obsługuje API geolokalizacji.")
    }
  }, [])

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API
    const apiUrl = `/api/pogoda/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=3&lang=pl`

    if(latitude !== null && longitude !== null){
      axios.get(apiUrl).then((response) => {
          setWeatherData(response.data)
          console.log(response.data)
        }).catch((error) => {
          console.error("Błąd pobierania danych pogodowych:", error)
        })
    }
  }, [latitude, longitude])

  if(weatherData){
    const temperature = parseInt(weatherData.current.temp_c.toFixed(0))
    const minTemperature = weatherData.forecast.forecastday[0].day.mintemp_c.toFixed(0)
    const maxTemperature = weatherData.forecast.forecastday[0].day.maxtemp_c.toFixed(0)
  
    const weatherHourlyForecastToday = weatherData.forecast.forecastday[0].hour.map(hour => {
      const forecastTime = parseInt(hour.time.slice(-5, -3))
      const temperature = hour.temp_c.toFixed(0)
      const icon = hour.condition.icon
    
      return { time: forecastTime, temperature: temperature, icon: icon }
    })
  
    const weatherHourlyForecastTomorrow = weatherData.forecast.forecastday[1].hour.map(hour => {
      const forecastTime = parseInt(hour.time.slice(-5, -3))
      const temperature = hour.temp_c.toFixed(0)
      const icon = hour.condition.icon
    
      return { time: forecastTime, temperature: temperature, icon: icon }
    })
  
    const currentTime = new Date().getHours()

    const filteredWeatherHourlyForecastToday = weatherHourlyForecastToday.filter(hour => hour.time > currentTime)

    const filteredWeatherHourlyForecast = [...filteredWeatherHourlyForecastToday, ...weatherHourlyForecastTomorrow]

    const sunsetTimeHours = parseInt(weatherData.forecast.forecastday[0].astro.sunset.slice(0,2))
    const sunsetTimeMinutes = weatherData.forecast.forecastday[0].astro.sunset.slice(3,5)

    const sunsetTime = `${sunsetTimeHours+12}:${sunsetTimeMinutes}`

    return(
      <SmoothScreenTransition className={"weather-app app"}>
        <Header></Header>
        <div className="weather-app-content">
          <LocationInfo
            location={weatherData.location.name}
            temperature={temperature - 1}
            condition={weatherData.current.condition.text}
            minTemperature={minTemperature}
            maxTemperature={maxTemperature}
          ></LocationInfo>
          <HourlyWeather hourlyForecast={filteredWeatherHourlyForecast}></HourlyWeather>
          <DailyForecast dailyForecast={weatherData.forecast.forecastday}></DailyForecast>
          <OtherInfo
            uvIndex={weatherData.current.uv}
            sunsetTime={sunsetTime}
            windSpeed={weatherData.current.wind_kph}
            feelsLike={weatherData.current.feelslike_c.toFixed(0)}
            pressure={weatherData.current.pressure_mb}
            rainChance={weatherData.forecast.forecastday[0].day.daily_chance_of_rain}
          ></OtherInfo>
        </div>
        <ReversingBar></ReversingBar>
      </SmoothScreenTransition>
    )
  }else{
    <SmoothScreenTransition className={"weather-app app"}>
      <Header></Header> 
      <ReversingBar></ReversingBar>
    </SmoothScreenTransition>
  }
}

export default WeatherApp