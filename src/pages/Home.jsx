import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const [suggestion, setSuggetion] = useState([]);
  const getSuggestion = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzUxMjcyMGFmNmY0ZDUzNmY2YmY2MDEyNzBlNTRlMiIsInN1YiI6IjY1MTEyZDI5MjZkYWMxMDE0ZTIyYTgxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-09qdICI2J_-1b8VuFwZ8Vo1DuT2WSzMzI4MY2dUtk",
      },
    };
    const response = await axios.get(url, options);
    setSuggetion(response.data.results.map((res) => res.original_title));
  };
  return (
    <div className="flex flex-col h-screen py-8 items-center">
      <div className="text-2xl font-extrabold py-8">
        Welcome to Movie Libirary
      </div>
      <form className="flex sm:flex-col md:flex-row items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search......."
            className=" w-5/6 md:w-[40vw] p-4 rounded-sm text-blue-950 font-bold cursor-text border-2 border-blue-950 "
            onChange={(event) => {
              setQuery(event.target.value.trim(" "));
              if (query == "") setQuery = [];
              else getSuggestion();
            }}
          />
          <div className="absolute h-10 bottom-0 mx-[2rem] -mb-8 bg-white w-fit">
            {suggestion.map(
              (res, i) =>
                i < 5 && (
                  <div
                    className="bg-blue-100 text-sm py-[1px] px-[2px] rounded cursor-pointer mt-1"
                    key={res}
                    onClick={() => {
                      navigate(`/search/${res}`);
                    }}
                  >
                    {res}
                  </div>
                )
            )}
          </div>
        </div>

        <button
          className="px-12 m-2 bg-red-700 rounded-lg py-4 text-white"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/search/${query}`);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
