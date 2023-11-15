import { Link } from "react-router-dom"
import "./HomeScreen.scss"
import Header from "../Header/Header"
import calculatorIcon from "../../icons/calculator.svg"
import cameraIcon from "../../icons/camera.svg"
import clockIcon from "../../icons/clock.svg"
import facetimeIcon from "../../icons/facetime.svg"
import findMyIcon from "../../icons/find-my.svg"
import messagesIcon from "../../icons/messages.svg"
import notesIcon from "../../icons/notes.svg"
import phoneIcon from "../../icons/phone.svg"
import photosIcon from "../../icons/photos.svg"
import remindersIcon from "../../icons/reminders.svg"
import settingsIcon from "../../icons/settings.svg"
import safariIcon from "../../icons/safari.svg"
import weatherIcon from "../../icons/weather.svg"
import mapsIcon from "../../icons/maps.svg"
import SmoothScreenTransition from "../SmoothScreenTransition/SmoothScreenTransition"

const HomeScreen = () => {
  return(
    <SmoothScreenTransition className="home-screen">
      <Header></Header>
      <div className="home-screen-content">
        <Link to={"/kalkulator" }>
          <img src={calculatorIcon} alt="calculator"></img>
        </Link>
        <Link to={"/aparat"}>
          <img src={cameraIcon} alt="camera"></img>
        </Link>
        <Link to={"/zegar"}>
          <img src={clockIcon} alt="clock"></img>
        </Link>
        <Link to={"/facetime"}>
          <img src={facetimeIcon} alt="facetime"></img>
        </Link>
        <Link to={"/znajdź"}>
          <img src={findMyIcon} alt="findMy"></img>
        </Link>
        <Link to={"/wiadomości"}>
          <img src={messagesIcon} alt="messages"></img>
        </Link>
        <Link to={"/notatki"}>
          <img src={notesIcon} alt="notes"></img>
        </Link>
        <Link to={"/telefon"}>
          <img src={phoneIcon} alt="phone"></img>
        </Link>
        <Link to={"/zdjęcia"}>
          <img src={photosIcon} alt="photos"></img>
        </Link>
        <Link to={"/przypomnienia"}>
          <img src={remindersIcon} alt="reminders"></img>
        </Link>
        <Link to={"/ustawienia"}>
          <img src={settingsIcon} alt="settings"></img>
        </Link>
        <Link to={"/safari"}>
          <img src={safariIcon} alt="safari"></img>
        </Link>
        <Link to={"/pogoda"}>
          <img src={weatherIcon} alt="weather"></img>
        </Link>
        <Link to={"/mapy"}>
          <img src={mapsIcon} alt="maps"></img>
        </Link>
      </div>
    </SmoothScreenTransition>
  )
}

export default HomeScreen