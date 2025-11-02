import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReportIncident from "./pages/ReportIncident";
import MyRights from "./pages/MyRights";
import FindHelp from "./pages/FindHelp";
import SafetyTips from "./pages/SafetyTips";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportIncident />} />
            <Route path="/rights" element={<MyRights />} />
            <Route path="/help" element={<FindHelp />} />
            <Route path="/tips" element={<SafetyTips />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <p>© {new Date().getFullYear()} Nari Suraksha Saathi — Prototype</p>
            <small>Prototype only. No data is stored or transmitted.</small>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
