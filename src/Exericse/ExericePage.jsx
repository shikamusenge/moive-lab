import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import Img from "../components/Img";
function ExericePage() {
  //   const students = [];
  const { Sname, Sage } = useParams();
  const [students, updateStudent] = useState([]);
  const [girls, setGrils] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const fetchData = () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((Result) => console.log(Result))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <form className="m-4 flex">
        <p>
          <label htmlFor="name">Names</label>{" "}
          <input
            type="text"
            name=""
            id="name"
            onChange={(e) => {
              e.preventDefault();
              setName(document.getElementById("name").value);
            }}
            className="border-2 border-black p-1"
          />
        </p>
        <p>
          <label htmlFor="age">Age</label>{" "}
          <input
            type="text"
            name=""
            id="age"
            onChange={(e) => {
              e.preventDefault();
              setAge(document.getElementById("age").value);
            }}
            className="border-2 border-black p-1"
          />
        </p>
        <p>
          <button
            onClick={(e) => {
              e.preventDefault();
              updateStudent([...students, { name: name, age: age }]);
            }}
            className="bg-blue-900 text-white px-2 rounded m-1 cursor-pointer"
          >
            Submit
          </button>
        </p>
      </form>
      <Card name={Sname} age={Sage} />
      <div className="flex">
        {students.map((item, index) => {
          return <Card key={index} name={item.name} age={item.age} />;
        })}
      </div>
      {girls.map((item, index) => {
        return <Img detail={"test"} ulr={"/logo.png"} />;
      })}
    </div>
  );
}

export default ExericePage;
