import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ padding, widthSm = "10rem", widthMd = "80vw" }) => {
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
    <form
      className="flex sm:flex-col md:flex-row items-center text-black"
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
        e.target.querySelector("input").value = "";
      }}
    >
      <div className="relative bg-white  h-fit rounded-lg">
        <div className="font-bold cursor-text border-2 border-blue-950 rounded-lg overflow-hidden w-fit flex bg-white justify-center ">
          <input
            type="text"
            placeholder="Search video here......."
            className={`w-[${widthSm}] md:w-[${widthMd}] p-${padding} text-blue-950 focus:outline-none`}
            onChange={(event) => {
              setQuery(event.target.value.trim(" "));
              if (query == "") setQuery([]);
              else getSuggestion();
            }}
          />
          <p
            className={`p-${padding} text-black cursor-pointer font-semibold bg-slate-200 flex justify-center items-center`}
            onClick={(e) => {
              const input =
                e.target.parentElement.parentElement.parentElement.querySelector(
                  "input"
                );
              input.value = "";
              navigate(`/search/${query}`);
            }}
          >
            <FaSearch />
          </p>
        </div>

        <div
          className={`absolute top-0 mp-[2rem] -mb-8 bg-white mt-8 h-fit z-30 w-full md:w-[${widthMd}] rounded-md`}
        >
          {suggestion.map(
            (res, i) =>
              i < 5 && (
                <div
                  className="bg-blue-100 text-sm py-[1px] px-[2px] rounded w-fit mx-2 cursor-pointer mt-1"
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
    </form>
  );
};

export default SearchBox;
