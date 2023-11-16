import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import phoneImg from "../../images/phone.webp"
import "./Phone.scss"
import HomeScreen from "../HomeScreen/HomeScreen"
import CalculatorApp from "../../apps/CalculatorApp/CalculatorApp"
import SafariApp from "../../apps/SafariApp/SafariApp"
import WeatherApp from "../../apps/WeatherApp/WeatherApp"

const Phone = () => {
  return(
    <div className="phone">
      <img src={phoneImg} alt="phone" className="phone-image"></img>
      <div className="phone-screen">
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
            <Route path="/kalkulator" element={<CalculatorApp></CalculatorApp>}></Route>
            <Route path="/safari" element={<SafariApp></SafariApp>}></Route>
            <Route path="/pogoda" element={<WeatherApp></WeatherApp>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default Phone