import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
const Trailler = () => {
  const { id } = useParams();
  const [defaultVideo, setkey] = useState({ key: "" });
  console.log(defaultVideo);
  const [traillors, setTraillors] = useState([]);
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
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
        );
        setTraillors(recentVideos.data.results);
        console.log(traillors[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className="flex">
        <div className="flex w-[20rem] flex-col gap-4 h-screen shadow-2xl shadow-blue-950 mx-4">
          {traillors.map((traillor, index) => (
            <Link
              to={`/watch/${traillor.key}/${id}`}
              key={index}
              className="py-4 bg-slate-400 rounded-md border my-3 mx-3 px-4 text-center"
            >
              <div>{traillor.name}</div>
            </Link>
          ))}
        </div>
        {/* <div>{<YouTube videoId={traillors[0].key || "vsBwcxu8bAQ"} />}</div> */}
      </div>
    </>
  );
};

export default Trailler;
