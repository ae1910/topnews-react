import { StyledSearchCards } from "./styles/searchcards.styles";

const SearchCards = (result) => {
    return ( 
        <StyledSearchCards className="search-card" href={result.result.url}>
            <p className="search-date">{`${new Date(result.result.publishedAt).toLocaleString('default', { month: 'long' })} ${new Date(result.result.publishedAt).getDate()}, ${new Date(result.result.publishedAt).getFullYear()}`}</p>
            <div className="card-info">
                <div className="search-metadata">
                    {!result.result.source?.name ? <></> : <p className="source-name">{result.result.source?.name}</p>}
                    <h1>{result.result.title}</h1>
                    {!result.result.description ? <></> : <p className="card-description">{result.result.description}</p>}
                    {!result.result.author || result.result.author.substring(0, 4) == 'http' ? <></> : <p className="card-author">{`By: ${result.result.author}`}</p>}
                </div>
                {!result.result.urlToImage ? <></> : <img className="card-image" src={result.result.urlToImage} alt={result.title}/>}
            </div>
        </StyledSearchCards>
     );
}
 
export default SearchCards;