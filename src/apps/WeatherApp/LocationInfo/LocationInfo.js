import "./LocationInfo.scss"

const LocationInfo = ({ location, temperature, condition, minTemperature, maxTemperature }) => {
  return(
    <div className="weather-app-main-info">
      <p className="location">{location}</p>
      <p className="temperature">{temperature - 1}°</p>
      <p className="description">{condition}</p>
      <p className="min-max-temperature">Od {minTemperature}° do {maxTemperature}°</p>
    </div>
  )
}

export default LocationInfo