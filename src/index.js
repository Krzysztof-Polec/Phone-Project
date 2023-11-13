import React from "react"
import ReactDOM from "react-dom/client"
import "./sass/globalStyles.scss"
import Phone from "./components/Phone/Phone"

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(
  <React.StrictMode>
    <Phone></Phone>
  </React.StrictMode>
)