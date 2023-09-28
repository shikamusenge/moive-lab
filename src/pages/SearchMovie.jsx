import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
function SearchForMovie() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const { query } = useParams();
  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzUxMjcyMGFmNmY0ZDUzNmY2YmY2MDEyNzBlNTRlMiIsInN1YiI6IjY1MTEyZDI5MjZkYWMxMDE0ZTIyYTgxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-09qdICI2J_-1b8VuFwZ8Vo1DuT2WSzMzI4MY2dUtk",
      },
    };
    const response = await axios.get(url, options);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
    setTotalResults(response.data.total_results);
    setIsLoading(false);
    console.log(response);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchMovies();
  }, []);
  return (
    <div>
      {isLoading && (
        <div className="h-screen flex items-center justify-center">
          <img src="/loader_gif.gif" alt="Loading......." />
        </div>
      )}
      <div>{totalResults} resuls is found</div>
      {totalResults > 0 && (
        <>
          <div className="flex overflow-x-auto">
            {Array.from(Array(totalPages), (e, i) => {
              return (
                <div
                  key={i}
                  className="bg-blue-300 px-4 py-2 m-3 cursor-pointer rounded"
                  onClick={() => {
                    setPage(i + 1);
                    setIsLoading(true);
                    fetchMovies();
                  }}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7 px-8">
            {movies.map(
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
        </>
      )}
    </div>
  );
}

export default SearchForMovie;
