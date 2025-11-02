import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page home-page">
      <div className="hero">
        <h1>Nari Suraksha Saathi</h1>
        <p className="tagline">Your discreet safety and support companion.</p>

        <div className="grid">
          <Link to="/report" className="card primary">Report Incident</Link>
          <Link to="/rights" className="card">My Rights</Link>
          <Link to="/help" className="card">Find Help</Link>
          <Link to="/tips" className="card">Safety Tips</Link>
        </div>

        <p className="disclaimer small">
          ⚠️ This is a prototype for demonstration only. No real data is sent or stored.
        </p>
      </div>
    </section>
  );
}
