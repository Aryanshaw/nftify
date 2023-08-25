import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Home/Sidebar";
import TokenAddress from "./TokenAddress/TokenAddress";
import PairAddress from "./PairAddress/PairAddress";
// import './App.css'

const App = () => {
  return (
    <Router>
      <div className="layout-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/token" element={<TokenAddress />} />
            <Route path="/pair" element={<PairAddress />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
