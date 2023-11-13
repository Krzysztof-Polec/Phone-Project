import "./SafariAppSearchResult.scss"

const SafariAppSearchResult = ({ results, onSeeMore }) => {
  return(
    <div className="search-result">
      {results.map((result, index) =>(
        <div key={index} onClick={() => onSeeMore(result)}>
          <h3>{result.title}</h3>
          <p>{result.snippet}</p>
        </div>
      ))}
    </div>
  )
}

export default SafariAppSearchResult