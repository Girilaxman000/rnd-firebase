import React, { useEffect } from "react";
import Home from "./components/pages/Home.page";
import { Routes, Route } from "react-router-dom";
import Apply from "./components/pages/Apply.page";

//use aos library
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;

// https://icons8.com/icons/set/lock
