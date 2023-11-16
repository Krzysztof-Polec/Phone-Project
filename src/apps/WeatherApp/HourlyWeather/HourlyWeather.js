import "./HourlyWeather.scss"

const HourlyWeather = ({ hourlyForecast }) => {
  return(
    <div className="hourly-weather-info">
      {hourlyForecast.map((hour, index) => (
        <div key={index}>
          <p>{hour.time}</p>
          <img src={hour.icon} alt="icon"></img>
          <p>{hour.temperature}°</p>
        </div>
      ))}
    </div>
  )
}

export default HourlyWeather