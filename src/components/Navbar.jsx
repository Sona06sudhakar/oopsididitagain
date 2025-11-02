import React from "react";
import { NavLink } from "react-router-dom";
import { Shield, AlertCircle, Book, Heart, Lightbulb, Info } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-container">
        <NavLink to="/" className="nav-brand">
          <Shield className="nav-logo" />
          <div>
            <div className="brand-title">Nari Suraksha Saathi</div>
            <div className="brand-sub">Your discreet safety companion</div>
          </div>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Shield size={16} /> Home
          </NavLink>
          <NavLink to="/report" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <AlertCircle size={16} /> Report
          </NavLink>
          <NavLink to="/rights" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Book size={16} /> My Rights
          </NavLink>
          <NavLink to="/help" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Heart size={16} /> Find Help
          </NavLink>
          <NavLink to="/tips" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Lightbulb size={16} /> Safety Tips
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Info size={16} /> About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}