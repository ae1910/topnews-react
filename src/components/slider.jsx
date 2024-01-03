import { Link } from "react-router-dom";
import { StyledSlider } from "./styles/slider.styles";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SliderItem = (article) => {
    return (
        <Link className="slider-item" to={{pathname: article.article?.url}} target="_blank">
            <div className="slide-image" style={{backgroundImage: `url(${article.article.urlToImage})`}}></div>
            <div className="metadata">
                <div>
                    {!article.article?.source?.name ? <></> : <p className="slider-source">{article.article.source?.name}</p>}
                    {!article.article?.author ? <></> : <p className="slider-author-date">{`${article.article.author} | ${new Date(article.article.publishedAt).toLocaleString('default', { month: 'long' })} ${new Date(article.article.publishedAt).getDate()}, ${new Date(article.article.publishedAt).getFullYear()}`}</p>}
                </div>
                <h1>{article.article?.title}</h1>
                {!article.article?.description ? <></> : <p className="slider-description">{article.article.description}</p>}
            </div>
        </Link>
    );
}

const Slider = (articles) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
      };
      let news = articles.articles.articles?.slice(0,5);
    return (
        <StyledSlider className="slider-container">
            {articles.articles.articles && (
                <Carousel 
                containerClass="slides"
                itemClass="slider"
                responsive={responsive}
                swipeable={true}
                draggable={true}
                arrows={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={8000}
                showDots={true}
                renderDotsOutside={true}
                >
                    {news?.map((article, i) => (
                        <SliderItem
                        key={i}
                        article={article}
                        />
                    ))}
                </Carousel>
            )}
        </StyledSlider>
    );
}


export default Slider;