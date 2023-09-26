import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";
import axios from "axios";
const Watches = () => {
  const [recent, setRecent] = useState([]);
  const [popular, setPopuler] = useState([]);
  const [gener, setGener] = useState([]);
  const [choosen, setChoosen] = useState();
  useEffect(() => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzUxMjcyMGFmNmY0ZDUzNmY2YmY2MDEyNzBlNTRlMiIsInN1YiI6IjY1MTEyZDI5MjZkYWMxMDE0ZTIyYTgxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-09qdICI2J_-1b8VuFwZ8Vo1DuT2WSzMzI4MY2dUtk",
      },
    };
    const fetchData = async (url) => {
      const response = await axios.get(url, options);
      return response;
    };
    const getData = async () => {
      try {
        const recentVideos = await fetchData(
          "https://api.themoviedb.org/3/movie/now_playing"
        );
        setRecent(recentVideos.data.results);
        const popularVideos = await fetchData(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
        );
        setPopuler(popularVideos.data.results);
        const generVideos = await fetchData(
          "https://api.themoviedb.org/3/genre/movie/list?language=en"
        );
        setGener(generVideos);
        setChoosen(popular);
        console.log(recent);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="h-[22rem]">
      <div>
        <div className="grid grid-cols-7 overflow-x-auto py-2 px-4">
          {recent.map(
            (video, index) =>
              index < 7 && (
                <Link
                  to={`/trailor/${video.id}`}
                  key={video.id}
                  className="w-full"
                >
                  <VideoCard
                    name={video.original_title}
                    image={video.backdrop_path}
                  />
                </Link>
              )
          )}
        </div>
      </div>
      <div>
        <nav>
          <button
            onClick={() => {
              setChoosen(recent);
            }}
          >
            recent
          </button>
          <button
            onClick={() => {
              setChoosen(popular);
            }}
          >
            popular
          </button>
          <button
            onClick={() => {
              setChoosen(gener);
            }}
          >
            Genre
          </button>
        </nav>
      </div>
      <div>
        <div className="grid grid-cols-7 overflow-x-auto py-2 px-4">
          {popular.map((video, index) => (
            <Link to={`/trailor/${video.id}`} key={video.id} className="w-full">
              <VideoCard
                name={video.original_title}
                image={video.backdrop_path}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watches;
