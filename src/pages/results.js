import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import search from '../img/icons8-search-30.png';
import SearchCards from "../components/search-card";

const Results = () => {
    const [text, setText] = useState("");
    const [currentList, setCurrentList] = useState(10);
    const [jsonArr, setJsonArr] = useState();
    const [searchResults, setSearchResults] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');
    const sort = searchParams.get('sort');

    async function getSearchResults(query, sort) {
        try {
            const response = await fetch(`https://topnews-api.onrender.com/results/${query}/${sort}`);
            const json = await response.json();
            setJsonArr(json);
            setCurrentList(10);
            setSearchResults(json?.articles?.slice(0, 10));
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleClick = () => {
        setCurrentList(currentList + 10);
        setSearchResults(jsonArr?.articles?.slice(0, currentList));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== "") {
            setSearchParams(prev => {
                prev.set('query', text);
                return prev;
            }, {replace: true})
        }

        setCurrentList(10);
    }
    

    useEffect(() => {
        setText(query);
        getSearchResults(query, sort);
    }, [query, sort]);
    

    return ( 
        <main>
            <div className="search-title">
              <h2>SEARCH RESULTS</h2>
            </div>
            <form className="main-search" id="main-search-bar" onSubmit={handleSubmit}>
                <input 
                className="search-txt"
                id="newsQuery"
                name="searchtxt"
                type="text"
                placeholder="Search..."
                value={text} 
                onChange={e => setText(e.target.value)}/>
                <button className="submit"><img src={search} alt=""/></button>
            </form>
            <div className="search-data">
                {jsonArr?.totalResults == 0 || jsonArr?.totalResults == undefined || jsonArr?.totalResults == null ? <p>{`Showing 0 results`}</p> : <p>{`Showing ${jsonArr?.totalResults} results`}</p>}
                <select 
                name="sort-by"
                value={sort} 
                onChange={e => setSearchParams(prev => {
                    prev.set('sort', e.target.value)
                    return prev
                }, {replace: true})}>
                    <option value="relevancy">Sort by Relevancy</option>
                    <option value="popularity">Sort by Popularity</option>
                    <option value="publishedAt">Sort by Newest</option>
                </select>
            </div>
            {jsonArr?.totalResults == 0 || jsonArr?.totalResults == undefined || jsonArr?.totalResults == null ?
                <div className="search-grid">
                    <p className="no-results">No results.</p>
                </div>
                : <div className="search-grid">
                    {searchResults?.map((result, i) =>
                        <SearchCards 
                        key={i}
                        result={result}/>
                    )}
                </div>
            }
            {jsonArr?.articles?.length - currentList > 0 && (
                <button className="show-more" onClick={handleClick}>SHOW MORE</button>
            )}
        </main>
     );
}
 
export default Results;