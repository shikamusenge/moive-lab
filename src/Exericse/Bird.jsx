import React, { useEffect, useState } from "react";
import BirdCard from "./components/BirdCard";
import axios from "axios";
function Bird() {
  const [bird, setBird] = useState({});
  console.log(bird);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://random.dog/woof.json");
      setBird(res.data);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <BirdCard
        image={bird.url}
        event={() => {
          fetchData();
        }}
      />
    </div>
  );
}

export default Bird;
