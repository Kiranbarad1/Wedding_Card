import React, { useState } from "react";
import Image from "./Image";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import Collect from "./Collect";
import HedderAndFooter from "./HedderAndFooter";
import { Card } from "./Card";

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
    
    <HedderAndFooter />
      <Routes>
        <Route path="/" element={<Collect />} />
        <Route path="/custom" element={<Image sendData={sendData} />} />
        <Route path="/output" element={<HomePage data={data}  />} />
        <Route path="/card" element={<Card  />} />
      </Routes>
    </>
  );
}

export default App;
