import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
const WatchTrairor = () => {
  const { id, mid } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movie);
  const setUp = () => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${mid}?language=en-US`;
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzUxMjcyMGFmNmY0ZDUzNmY2YmY2MDEyNzBlNTRlMiIsInN1YiI6IjY1MTEyZDI5MjZkYWMxMDE0ZTIyYTgxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-09qdICI2J_-1b8VuFwZ8Vo1DuT2WSzMzI4MY2dUtk",
        },
      };
      const response = await axios.get(url, options);
      setMovie(response.data);
    };
    getData();
  };
  useEffect(() => {
    setUp();
  }, []);
  return (
    <div className="flex mt-0 justify-between w-full h-screen">
      <div className="bg-blue-300 shadow-md shadow-blue-400 md:w-[500px] h-full p-4">
        <div>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`}
            alt={movie.title}
            className="md:w-[9rem] rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{movie.title}</h1>
          <p className="text-gray-600 grid grid-cols-2">
            <span className="font-bold">Movie Release</span>
            {movie.release_date}
          </p>
          <p className="text-gray-600 grid grid-cols-2">
            <span className="font-bold">Vote average</span>
            {movie.vote_average}
          </p>
          <hr />
          <p className="text-gray-600 felx flex-col">
            <span className="font-bold">Overview</span>
            {movie.overview}
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center py-4 w-1/2">
        <YouTube videoId={id} />
      </div>
    </div>
  );
};

export default WatchTrairor;
