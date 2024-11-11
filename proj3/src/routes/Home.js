import { useEffect, useState } from "react";
import Movie from "../components/Movie"

function Home() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const movie = async() => {
        const json = await(
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
        ).json()
        console.log(json.data.movies);
        setData(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        movie()
    },[])
    return(
        <div>
        {loading ? (
        <div>
            <span>Loading...</span>
        </div>
        ) : (
        <div style={{display:"flex", flexWrap:"wrap", margin:"auto", width:"1800px", marginTop:"150px"}}>
            {data.map((item) => ( 
                <Movie
                    key = {item.id}
                    id = {item.id}
                    year={item.year}
                    coverImg = {item.medium_cover_image} 
                    title = {item.title} 
                    summary = {item.summary} 
                    genres = {item.genres} 
                /> 
            ))}
        </div>
        )}
        </div>
    )
}

export default Home;