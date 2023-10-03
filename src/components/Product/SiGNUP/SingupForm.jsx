import React, { useState } from "react";
import TextField from "../TextField";
import { json } from "react-router";
import { useNavigate } from "react-router";
const SingupForm = () => {
  const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
  const [user, setUser] = useState({});
  const [err, setErr] = useState({});
  const [validuname, setValidUsername] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="min-h-[10rem] border rounded-2xl w-fit p-8">
        <h1 className="text-center text-2xl font-bold text-red-800">
          Create New Account
        </h1>
        <div className="grid grid-cols-2">
          <TextField
            Error={err.fName}
            FieldName="First name / sureName"
            FieldType="text"
            fieldPlaceholder="Enter Your First Name"
            eventHandler={(e) => {
              const newData = user;
              newData.firstName = e.target.value;
              if (!/^(?=.*[A-Za-z]){1,}/.test(e.target.value)) {
                setErr({ fName: "Enter Valid Name" });
                e.target.classList.add("border-red-600");
                e.target.focus();
              } else {
                setErr({ fName: "" });
                e.target.classList.remove("border-red-600");
                const newData = user;
                setUser(newData);
              }
            }}
          />
          <TextField
            Error={err.lName}
            FieldName="Last Name / Other Name"
            FieldType="text"
            fieldPlaceholder="Enter Last First Name"
            eventHandler={(e) => {
              const newData = user;
              newData.lastName = e.target.value;
              if (!/^(?=.*[A-Za-z]){1,}/.test(e.target.value)) {
                setErr({ lName: "Enter Valid Name" });
                e.target.classList.add("border-red-600");
                e.target.focus();
              } else {
                setErr({ lName: "" });
                e.target.classList.remove("border-red-600");
                const newData = user;
                setUser(newData);
              }
            }}
          />
        </div>
        <div className="grid grid-cols-2">
          <TextField
            FieldName="Enter Your Email Address"
            FieldType="text"
            fieldPlaceholder="Example test@test.com"
            Error={err.email}
            eventHandler={(e) => {
              const newData = user;
              newData.email = e.target.value;
              let EmailTaken =
                usersData.filter((user) => user.email == e.target.value)
                  .length > 0;
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailPattern.test(e.target.value)) {
                e.target.classList.add("border-red-600");
                setValidEmail(false);
                setErr({ email: "Enter valid Email" });
              } else if (EmailTaken) {
                e.target.classList.add("border-red-600");
                setValidEmail(false);
                setErr({ email: "email is Taken" });
              } else {
                setErr({ email: "" });
                e.target.classList.remove("border-red-600");
                setValidEmail(true);
                setUser(newData);
              }
              setUser(newData);
            }}
          />
          <TextField
            FieldName="Username"
            FieldType="text"
            fieldPlaceholder="Example @ruganzu01"
            Error={err.uname}
            eventHandler={(e) => {
              const newData = user;
              newData.username = e.target.value;
              const userNameTaken =
                usersData.filter((user) => user.username == e.target.value)
                  .length > 0;
              if (userNameTaken) {
                e.target.classList.add("border-red-600");
                setValidUsername(false);
                setErr({ uname: "username taken?" });
              } else {
                setErr({ uname: "" });
                setValidUsername(true);
                e.target.classList.remove("border-red-600");
                setUser(newData);
              }
            }}
          />
        </div>

        <div className="grid grid-cols-2">
          <TextField
            Error={err.password}
            FieldName="New Password"
            FieldType="password"
            fieldPlaceholder="Enter Your new Password"
            eventHandler={(e) => {
              const myPass = e.target.value;
              if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!*?&])[A-z\d@$!*?&]{8,}$/.test(
                  myPass
                )
              ) {
                setErr({ password: "Enter Strong Password" });
                e.target.classList.add("border-red-600");
              } else {
                setErr({ password: "" });
                e.target.classList.remove("border-red-600");
                const newData = user;
                newData.password = e.target.value;
                setUser(newData);
              }
            }}
          />
          <TextField
            FieldName="Confirm New Password"
            Error={err.cpass}
            FieldType="password"
            fieldPlaceholder="Confirm New Password"
            eventHandler={(e) => {
              if (user.password != e.target.value) {
                setErr({ cpass: "password did not matching" });
                e.target.classList.add("border-red-600");
              } else {
                setErr({ cpass: "" });
                e.target.classList.remove("border-red-600");
              }
              setUser(newData);
            }}
          />
        </div>
        <div>
          <input
            type="submit"
            name="save"
            value="Signup"
            className="rounded-lg  h-10 w-full bg-[red] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (validEmail && validuname) {
                user.cpassword = "";
                usersData.push(user);
                localStorage.setItem("usersData", JSON.stringify(usersData));
                alert("new Acount Created");
                navigate("/login");
              } else {
                alert("Enter Valid Data");
              }
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SingupForm;
