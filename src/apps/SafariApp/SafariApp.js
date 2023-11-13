import { useState } from "react"
import SafariAppSerch from "./SafariAppSearch/SafariAppSearch"
import SafariAppSerchResult from "./SafariAppSearchResult/SafariAppSearchResult"
import Header from "../../components/Header/Header"
import "./SafariApp.scss"
import ReversingBar from "../../components/ReversingBar/ReversingBar"

const SafariApp = () => {
  const [searchResults, setSearchResults] = useState([])
  const [selectedResult, setSelectedResult] = useState(null)

  const handleSeeMore = (result) => {
    setSelectedResult(result)
  }

  return(
    <div className="safari-app app">
      <div className="header">
        <Header></Header>
        {!selectedResult && (<SafariAppSerch onSeeMore={setSearchResults}></SafariAppSerch>)}
      </div>
      {selectedResult ? (
        <div>
          <iframe title="Selected Result" src={selectedResult.link}></iframe>
        </div>
      ) : (
        <SafariAppSerchResult results={searchResults} onSeeMore={handleSeeMore}></SafariAppSerchResult>
      )}
      <ReversingBar></ReversingBar>
    </div>
  )
}

export default SafariApp