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
    <div className="flex justify-center items-center pt-6 w-full">
      <div></div>
      <div>
        <YouTube videoId={id} />
      </div>
    </div>
  );
};

export default WatchTrairor;
