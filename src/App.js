import React, { useState } from "react";
// import "./App.css";

import Image from "./Image";
import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "./HomePage";
function App() {
  const [data, setData] = useState({
    image: "?",
    name: "?",
    fname: "?",
  });
  const sendData = (data) => {
    setData(data);
  };
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Image sendData={sendData} />} />
        <Route path="/output" element={<HomePage data={data} page-view={33} />} />
      </Routes>
    </>
  );
}

export default App;
