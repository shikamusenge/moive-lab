import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import SearchBox from "../components/SearchBox";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen py-8 items-center">
      <div className="text-2xl font-extrabold py-8">
        Welcome to Movie Libirary
      </div>
      <SearchBox padding={4} widthMd="40vw" widthSm="80vw" key={"homeSearch"} />
    </div>
  );
};

export default Home;
