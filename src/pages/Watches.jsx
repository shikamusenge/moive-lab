import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";
import axios from "axios";
import NetworkError from "../components/NetworkError";
const Watches = () => {
  const [recent, setRecent] = useState([]);
  const [order, setOrderBy] = useState("now_playing");
  const [networkError, setNetErro] = useState(false);
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
        const recentVideos = await fetchData(
          "https://api.themoviedb.org/3/movie/now_playing"
        );
        setRecent(recentVideos.data.results);
        const popularVideos = await fetchData(
          `https://api.themoviedb.org/3/movie/${order}?include_adult=${adult}&include_video=true&images=true&language=en-US&page=${page}`
        );
        setSelected(popularVideos.data.results);
        setTotalPages(popularVideos.data.total_pages);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setNetErro(true);
      }
    };
    getData();
  };
  console.log(selectedMovie);
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
        {networkError && <NetworkError />}
        <div>{!isLoading && "#Recent videos"}</div>
        <div className="grid grid-cols-2 md:grid-cols-7 overflow-x-auto py-2 px-4">
          {!isLoading &&
            recent.map(
              (video, index) =>
                index < 7 && (
                  <Link
                    to={`/trailor/${video.id}`}
                    key={video.id}
                    className="w-full min-w-fi justify-end flex"
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

export default Watches;
