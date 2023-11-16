import { Link } from "react-router-dom"
import "./HomeScreen.scss"
import Header from "../Header/Header"
import calculatorIcon from "../../icons/calculator.svg"
import safariIcon from "../../icons/safari.svg"
import weatherIcon from "../../icons/weather.svg"
import SmoothScreenTransition from "../SmoothScreenTransition/SmoothScreenTransition"

const HomeScreen = () => {
  return(
    <SmoothScreenTransition className="home-screen">
      <Header></Header>
      <div className="home-screen-content">
        <Link to={"/kalkulator" }>
          <img src={calculatorIcon} alt="calculator"></img>
        </Link>
        <Link to={"/safari"}>
          <img src={safariIcon} alt="safari"></img>
        </Link>
        <Link to={"/pogoda"}>
          <img src={weatherIcon} alt="weather"></img>
        </Link>
      </div>
    </SmoothScreenTransition>
  )
}

export default HomeScreen