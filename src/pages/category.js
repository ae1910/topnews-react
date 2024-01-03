import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Cards from "../components/cards";

const Category = () => {
    const {category} = useParams();
    const [categoryNews, setCategoryNews] = useState([]);

    async function getCategoryNews(category) {
        try {
            const response = await fetch(`https://topnews-api.onrender.com/category/${category}`);
            const json = await response.json();
            setCategoryNews(json);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getCategoryNews(category);
    }, [category]);
    return ( 
        <main>
            <div className="category-title">
                <h2>{category.toUpperCase()}</h2>
            </div>
                <Cards item={categoryNews.articles} />
        </main>
    );
}

export default Category;