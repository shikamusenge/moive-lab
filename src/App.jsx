import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watches from "./pages/Watches";
import Trailler from "./pages/Trailler";
import WatchTrairor from "./pages/WatchTrairor";
import SearchMovi from "./pages/SearchMovi";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/trailor/:id" element={<Trailler />} />
        <Route path="/watch/:id/:mid" element={<WatchTrairor />} />
        <Route path="/search/:query" element={<SearchMovi />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
