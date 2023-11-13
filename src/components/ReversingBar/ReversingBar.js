import { Link } from "react-router-dom"
import "./ReversingBar.scss"

const ReversingBar = () => {
  return(
    <Link to={"/"} className="reversing-bar"><div></div></Link>
  )
}

export default ReversingBar