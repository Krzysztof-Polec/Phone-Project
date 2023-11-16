import dropletIcon from "../../../icons/droplet.svg"
import gaugeIcon from "../../../icons/gauge.svg"
import sunIcon from "../../../icons/sun.svg"
import sunsetIcon from "../../../icons/sunset.svg"
import temperatureIcon from "../../../icons/temperature.svg"
import windIcon from "../../../icons/wind.svg"
import "./OtherInfo.scss"

const OtherInfo = ({ uvIndex, sunsetTime, windSpeed, feelsLike, pressure, rainChance }) => {
  return(
    <div className="weather-other-info">
      <div>
        <div>
          <img src={sunIcon} alt="sunIcon"></img>
          <p>INDEKS UV</p>
        </div>
        <p>{uvIndex}</p>
      </div>
      <div>
        <div>
          <img src={sunsetIcon} alt="sunsetIcon"></img>
          <p>ZACHÓD SŁOŃCA</p>
        </div>
        <p>{sunsetTime}</p>
      </div>
      <div>
        <div>
          <img src={windIcon} alt="windIcon"></img>
          <p>WIATR</p>
        </div>
        <p>{windSpeed}km/h</p>
      </div>
      <div>
        <div>
          <img src={temperatureIcon} alt="temperatureIcon"></img>
          <p>ODCZUWALNA</p>
        </div>
        <p>{feelsLike}°</p>
      </div>
      <div>
        <div>
          <img src={gaugeIcon} alt="gaugeIcon"></img>
          <p>CIŚNIENIE</p>
        </div>
        <p>{pressure}hPa</p>
      </div>
      <div>
        <div>
          <img src={dropletIcon} alt="dropletIcon"></img>
          <p>OPADY</p>
        </div>
        <p>{rainChance}%</p>
      </div>
    </div>
  )
}

export default OtherInfo
