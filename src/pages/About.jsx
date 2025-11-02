import React from "react";

export default function About() {
  return (
    <section className="page about-page">
      <div className="card">
        <h2>About / Disclaimer</h2>
        <p>
          This web app is a student project prototype that demonstrates a discreet reporting and resource-access concept for women in informal work. It is not a live service — no data is stored, transmitted, or acted upon.
        </p>

        <h3>Purpose</h3>
        <p>To show how a simple, mobile-first interface can reduce barriers to reporting and increase awareness of rights and support options.</p>

        <h3>Limitations</h3>
        <ul>
          <li>No backend — all actions are simulated.</li>
          <li>Contact details are placeholders for demo purposes.</li>
          <li>Not a replacement for legal counsel or emergency services.</li>
        </ul>

        <p className="small muted">For accurate legal guidance, consult verified government or NGO resources and local legal aid.</p>
      </div>
    </section>
  );
}
