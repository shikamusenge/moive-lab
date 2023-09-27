import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  return (
    <div className="flex flex-col h-screen py-8 items-center">
      <div className="text-2xl font-extrabold py-8">
        Welcome to Movie Libirary
      </div>
      <form>
        <input
          type="text"
          placeholder="Search......."
          className="w-[30vw] p-4 rounded-sm text-blue-950 font-bold cursor-text border-2 border-blue-950 "
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
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
