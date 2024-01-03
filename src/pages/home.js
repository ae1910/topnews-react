import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/slider";
import Cards from "../components/cards";

const Homepage = () => {
    const [latestNews, setLatestNews] = useState([]);
    const [categoryNews, setCategoryNews] = useState([]);
    
    async function getLatestNews() {
        try {
            const response = await fetch(`https://topnews-api.onrender.com/latest`);
            const json = await response.json();
            setLatestNews(json);
        } catch (error) {
            console.log(error);
        }
    }
    
    const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];
    async function getCategoryNews() {
        let data = [];
        for(let i = 0; i < categories.length; i++) {
            let category = categories[i];
            try {
                const response = await fetch(`https://topnews-api.onrender.com/category/${category}`);
                const json = await response.json();
                data.push({category, json});
            } catch (error) {
                console.log(error);
            }
        }

        setCategoryNews(data);
    }

    useEffect(() => {
        getLatestNews();
        getCategoryNews();
    }, []);

    return (
        <>
            <Slider articles={latestNews} />
        
            <main>
            {categoryNews?.map((item, i) =>
                <div key={i}>
                    <div className="section-title">
                        <h2>{item.category.toUpperCase()}</h2>
                        <hr/>
                        <Link to={ `/category/${item.category}`}>See More</Link>
                    </div>
                    <Cards item={item.json.articles?.slice(0,4)} />
                </div>
            )}
            </main>
        </>
    );
}
 
export default Homepage;