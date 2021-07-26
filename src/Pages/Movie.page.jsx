import {FaCcPaypal} from "react-icons/fa";
import {SiVisa} from "react-icons/si";
import React, { useContext, useState, useEffect  } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";

//Component
import Moviehero from "../components/MovieHero/Moviehero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


//config
import TempPosters from "../Config/tempPostersconfig"
//context
import { MovieContext } from "../context/movie.context";


const Movie = () => {
  const {id} = useParams();
  const {movie} = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(()=>{
    const requestCast = async() => {
      const getCast =await axios(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();

  }, [id])

  useEffect(() => {
    const requestSimilarMovies = async () => {
        const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
        setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();

}, [id]);

useEffect(() => {
  const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`)
      setRecommended(getRecommendedMovies.data.results);
  };
  requestRecommendedMovies();

}, [id]);


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
      





    return (
        <>
            <Moviehero/>
            <div className="my-12 container  px-4 lg:ml-20 lg:w-2/3">
               <div className="flex flex-col items-start gap-3">
               <h2 className="font-bold text-black-800 text-2xl">About the movie</h2>
                <p>{movie.overview}</p>
               </div>
               <div className="my-8">
                   <hr/>
               </div>
               <div className="my-8">
                   <h1 className="font-bold text-black-800 text-2xl mb-3">Applicable offers</h1>
                  <div className="flex flex-col gap-3 lg:flex-row">
                  <div className="flex items-start bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                   <div className="w-8 h-6"><SiVisa className="w-full h-full mt-1"/></div>
                   <div className="flex flex-col items-start gap-2">
                       <h3 className="text-black-700 text-xl font-bold">Visa Stream offer</h3>
                       <p className="text-gray-600">Get 50% off upto INR 150 on all Visa Card* on BookMyShow Stream</p>
                   </div>
                   </div>
                   <div className="flex items-start bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                   <div className="w-8 h-6"><FaCcPaypal className="w-full h-full mt-1"/></div>
                   <div className="flex flex-col items-start gap-2">
                       <h3 className="text-black-700 text-xl font-bold">Filmy pass</h3>
                       <p className="text-gray-600">Get Rs.758 off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                   </div>
                   </div>
                  </div>
               </div>
               <div className="my-8">
                   <hr/>
               </div>
           <div className="my-8">
           <h2 className="font-bold text-black-800 text-2xl mb-4">Cast and Crew</h2>
             <Slider {...settingsCast}>
             {cast.map((castData) =>(
              <Cast image={`https://image.tmdb.org/t/p/original/${castData.profile_path}`} castName={castData.original_name} Role={castData.charecter}/>
             ))}
             </Slider>
           </div>
           <div className="my-8">
                   <hr/>
               </div>
           <div className="my-8">
           <PosterSlider config={settings} images={similarMovies} title="You Might also Like" isDark={false} />
           </div>
           <div className="my-8">
                   <hr/>
               </div>
           <div className="my-8">
           <PosterSlider config={settings} images={recommended} title="BMS XCLUSIV" isDark={false} />
           </div>
           </div>
           
        </>
    )
};
 export default Movie;