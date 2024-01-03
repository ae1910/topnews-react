import { StyledCards } from "./styles/cards.styles";

const Cards = (item) => {
    return ( 
        <StyledCards className="article-grid">
            {item.item?.slice(0,1).map((article, i) =>
                <a className="main-card" href={article.url} key={i}>
                    <div className="card-metadata">
                        <div className="card-top-row">
                            {!article.source.name ? <></> : <p className="source-name">{article.source?.name}</p>}
                            {!article.author ? <></> : <p className="card-author">{`By: ${article.author}`}</p>}
                        </div>
                        <h1>{article.title}</h1>
                        {!article.description ? <></> : <p className="card-description">{article.description}</p>}
                        <p className="card-date">{`${new Date(article.publishedAt).toLocaleString('default', { month: 'long' })} ${new Date(article.publishedAt).getDate()}, ${new Date(article.publishedAt).getFullYear()}`}</p>
                    </div>
                    {!article.urlToImage ? <></> : <img className="card-image" src={article.urlToImage} alt={article.title}/>}
                </a>
            )}
            {item.item?.slice(1).map((article, i) =>
                <a className="preview-card" href={article.url} key={i}>
                    {!article.urlToImage ? <></> : <img className="card-image" src={article.urlToImage} alt={article.title}/>}
                    <div className="card-metadata">
                        <div className="card-top-row">
                            {!article.source.name ? <></> : <p className="source-name">{article.source?.name}</p>}
                            {!article.author || article.author.substring(0, 4) == 'http' ? <></> : <p className="card-author">{`By: ${article.author}`}</p>}
                        </div>
                        <h1>{article.title}</h1>
                        <p className="card-date">{`${new Date(article.publishedAt).toLocaleString('default', { month: 'long' })} ${new Date(article.publishedAt).getDate()}, ${new Date(article.publishedAt).getFullYear()}`}</p>
                    </div>
                </a>
            )}
        </StyledCards>
     );
}
 
export default Cards;