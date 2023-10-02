import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";
import { FaUserAlt, FaCheck } from "react-icons/fa";
import axios from "axios";
const Series = () => {
  const [recent, setRecent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedMovie, setSelected] = useState([]);
  const [adult, setAge] = useState(false);
  const initApp = () => {
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
        const url =
          "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
        const popularVideos = await fetchData(url);
        setSelected(popularVideos.data.results);
        setTotalPages(popularVideos.data.total_pages);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  };
  useEffect(() => {
    initApp();
  }, []);
  return (
    <div className="h-screen overflow-y-outo relative">
      {isLoading && (
        <div className="h-screen flex items-center justify-center">
          <img src="/loader_gif.gif" alt="Loading......." />
        </div>
      )}
      <div>
        <nav className=" bordered m-3 p-2 flex overflow-x-auto gap-3 bordered text-2xl h-fit bg-blue-200">
          {Array.from(Array(totalPages), (e, i) => {
            return (
              <div
                key={i}
                className="bg-blue-300 px-4 py-2 m-3 cursor-pointer rounded"
                onClick={() => {
                  setPage(i + 1);
                  setIsLoading(true);
                  initApp();
                }}
              >
                {i + 1}
              </div>
            );
          })}
        </nav>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-7 overflow-x-auto py-2 px-4">
          {selectedMovie.map((video, index) => (
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

export default Series;
