import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"



export default function Detalles() {

    const [movieDetails, setMovieDetails] = useState({})
    const { movie_id } = useParams();

   

    useEffect(() => {
        const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b4ecc5cd8a009dbc4bd98033dfbdc884&language=en-US`
            fetch(`${MOVIE_DETAILS}`)
                .then(response => response.json())
                .then(data => setMovieDetails(data));
    }, []);

    return (
        <div>
            <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path} alt=""/>
            
        </div>
    )
} 