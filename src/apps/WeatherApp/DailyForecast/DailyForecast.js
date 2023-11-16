import "./DailyForecast.scss"

const DailyForecast = ({ dailyForecast }) => {
  return(
    <div className="weather-daily-forecast">
      <div className="weather-daily-forecast-header">
        <p>PROGNOZA (3 DNI)</p>
      </div>
      <div>
        {dailyForecast.map((day, index) => {
          const daysOfWeek = ["Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob.", "Niedz."]
          const currentDate = new Date()
          currentDate.setDate(currentDate.getDate() + index)
          const dayOfWeek = daysOfWeek[currentDate.getDay()]

          return(
            <div key={index}>
              <p>{index === 0 ? "Dziś" : dayOfWeek}</p>
              <img src={day.day.condition.icon} alt="icon"></img>
              <p>{day.day.mintemp_c.toFixed(0)}°</p>
              <span></span>
              <p>{day.day.maxtemp_c.toFixed(0)}°</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DailyForecast