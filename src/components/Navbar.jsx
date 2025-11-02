import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <div className="brand">
          <span className="brand-emoji">🌸</span>
          <div>
            <div className="brand-title">Nari Suraksha Saathi</div>
            <div className="brand-sub">Your discreet safety companion</div>
          </div>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/report" className={({isActive}) => isActive ? "active" : ""}>Report</NavLink>
        <NavLink to="/rights" className={({isActive}) => isActive ? "active" : ""}>My Rights</NavLink>
        <NavLink to="/help" className={({isActive}) => isActive ? "active" : ""}>Find Help</NavLink>
        <NavLink to="/tips" className={({isActive}) => isActive ? "active" : ""}>Safety Tips</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
      </nav>
    </header>
  );
}

