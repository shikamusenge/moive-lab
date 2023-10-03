import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {} from "react-icons/fa";
import LandingPage1 from "./all/Landing1/LandingPage1";
import LandingPage2 from "./all/Landing2/Landing2";
const TasksPage = () => {
  const navigate = useNavigate();
  const { taskNo } = useParams();
  const [taskNumber, setTaskNumber] = useState(taskNo);
  return (
    <div className="min-h-screen absolute z-50  top-0 bg-white w-screen ">
      {/* <div>
        <Link to="/exercises/tasks/1">
          <i className="fa fa-tasks"></i> Landing paage 1
        </Link>
        <Link to="/exercises/tasks/2">
          <i className="fa fa-tasks"></i>Landing paage 2
        </Link>
      </div> */}
      <div>
        {taskNo == 1 && <LandingPage1 />}
        {taskNo == 2 && <LandingPage2 />}
      </div>
    </div>
  );
};

export default TasksPage;
