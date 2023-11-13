import { useState } from "react"
require('dotenv').config();

const SafariAppSearch = ({ onSeeMore }) => {
  const [query, setQuery] = useState("")

  const handleSearch = async () => {
    if(query.trim() !== ""){
      try{
        // TYPE YOUR API KEY
        const apiKey = process.env.API_KEY
        // TYPE YOUR CX
        const cx = process.env.CX

        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}`)

        if(!response.ok){
          console.error('Nieudane zapytanie do API. Status:', response.status)
        }

        const results = await response.json()
        onSeeMore(results.items || [])
      }catch(error){
        console.error('Błąd podczas wyszukiwania:', error)
      }
    }
  }

  return(
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Szukaj w Google"
      />
      <button onClick={handleSearch}>Szukaj</button>
    </div>
  )
}

export default SafariAppSearch