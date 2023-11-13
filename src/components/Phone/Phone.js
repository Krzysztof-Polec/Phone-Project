import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import phoneImg from "../../images/phone.webp"
import "./Phone.scss"
import HomeScreen from "../HomeScreen/HomeScreen"
import CalculatorApp from "../../apps/CalculatorApp/CalculatorApp"
import CameraApp from "../../apps/CameraApp/CameraApp"
import ClockApp from "../../apps/ClockApp/ClockApp"
import FacetimeApp from "../../apps/FacetimeApp/FacetimeApp"
import FindMyApp from "../../apps/FindMyApp/FindMyApp"
import MessagesApp from "../../apps/MessagesApp/MessagesApp"
import NotesApp from "../../apps/NotesApp/NotesApp"
import PhoneApp from "../../apps/PhoneApp/PhoneApp"
import PhotosApp from "../../apps/PhotosApp/PhotosApp"
import RemindersApp from "../../apps/RemindersApp/RemindersApp"
import SettingsApp from "../../apps/SettingsApp/SettingsApp"
import SafariApp from "../../apps/SafariApp/SafariApp"
import MapsApp from "../../apps/MapsApp/MapsApp"
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
            <Route path="/aparat" element={<CameraApp></CameraApp>}></Route>
            <Route path="/zegar" element={<ClockApp></ClockApp>}></Route>
            <Route path="/facetime" element={<FacetimeApp></FacetimeApp>}></Route>
            <Route path="/znajdź" element={<FindMyApp></FindMyApp>}></Route>
            <Route path="/wiadomości" element={<MessagesApp></MessagesApp>}></Route>
            <Route path="/notatki" element={<NotesApp></NotesApp>}></Route>
            <Route path="/telefon" element={<PhoneApp></PhoneApp>}></Route>
            <Route path="/zdjęcia" element={<PhotosApp></PhotosApp>}></Route>
            <Route path="/przypomnienia" element={<RemindersApp></RemindersApp>}></Route>
            <Route path="/ustawienia" element={<SettingsApp></SettingsApp>}></Route>
            <Route path="/mapy" element={<MapsApp></MapsApp>}></Route>
            <Route path="/safari" element={<SafariApp></SafariApp>}></Route>
            <Route path="/pogoda" element={<WeatherApp></WeatherApp>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default Phone