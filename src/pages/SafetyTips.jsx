import React from "react";

const TIPS = [
  "Inform someone before visiting a new workplace.",
  "Keep emergency contacts saved and quick to access.",
  "Avoid isolated areas when possible and work in groups.",
  "Carry a whistle or small safety alarm.",
  "Trust your instincts — leave if you feel unsafe.",
  "Take photos of evidence if it is safe to do so and note the time.",
  "Share your location with a trusted contact when traveling for work."
];

export default function SafetyTips() {
  return (
    <section className="page tips-page">
      <h2>Safety Tips for Workers</h2>
      <div className="tips-grid">
        {TIPS.map((t, i) => (
          <div key={i} className="tip-card">
            <div className="tip-index">#{i + 1}</div>
            <p>{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
