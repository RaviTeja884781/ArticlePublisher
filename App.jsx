import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Publisher from "./components/Publisher/Publisher";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <p>Publish Your Articles Here For Free...</p>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publish" element={<Publisher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
