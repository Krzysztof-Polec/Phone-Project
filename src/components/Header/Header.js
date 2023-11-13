import { useState, useEffect } from "react"
import "./Header.scss"
import signal from "../../icons/signal.svg"
import wifi from "../../icons/wifi.svg"

const Header = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date())
    }

    const intervalId = setInterval(updateClock, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formattedTime = time.toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"})

  return(
    <header>
      <div className="time">
        {formattedTime}
      </div>
      <div className="information-about-phone">
        <img src={signal} alt="signal"></img>
        <img src={wifi} alt="wifi"></img>
      </div>
    </header>
  )
}

export default Header