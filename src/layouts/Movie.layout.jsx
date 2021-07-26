import React, {useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";


//Components
import MovieNavbar from '../components/Navbar/movienavbar.component';

//CONTEXT
import { MovieContext } from '../context/movie.context';

const MovieLayout = (props) => {
    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);

        };
        requestMovie();

    }, [id]);


    return (
        <div>
             <MovieNavbar/>
        {props.children}
        </div>
    )
}

export default MovieLayout;