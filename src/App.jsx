import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watches from "./pages/Watches";
import Trailler from "./pages/Trailler";
import WatchTrairor from "./pages/WatchTrairor";
import SearForchMovie from "./pages/SearchMovie";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import ExericePage from "./Exericse/ExericePage";
import Bird from "./Exericse/Bird";
import Series from "./pages/Series";
import TasksPage from "./Exericse/tasks/TasksPage";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/series" element={<Series />} />
        <Route path="/trailor/:id" element={<Trailler />} />
        <Route path="/watch/:id/:mid" element={<WatchTrairor />} />
        <Route path="/search/:query" element={<SearForchMovie />} />
        <Route path="/exercises/:Sname/:Sage" element={<ExericePage />} />
        <Route path="/tasks/:taskNo" element={<TasksPage />} />
        <Route path="/exercises/dogs" element={<Bird />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
