import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Main from "./Main";
import Resume from "./Resume"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<Resume/>} />
        <Route path="/" element={<Main/>} />
      </Routes>
    </Router>
  );
}