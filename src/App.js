import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapComponent from "./MapComponent";
import AQIPrediction from "./AQIPrediction"; // Make sure to create this component
import CompareAQI from "./CompareAQI";       // Make sure to create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/predict" element={<AQIPrediction />} />
        <Route path="/compare" element={<CompareAQI />} />
      </Routes>
    </Router>
  );
}

export default App;
