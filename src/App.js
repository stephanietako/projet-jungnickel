import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";
// Styles
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        {JSON.parse(process.env.REACT_APP_MODE_MAINTENANCE) ? (
          <Route path="/" element={<Maintenance />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </Router>
  </div>
);

export default App;
