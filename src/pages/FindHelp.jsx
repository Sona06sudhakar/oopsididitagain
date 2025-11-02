import React, { useState } from "react";
import { ngos } from "../data/ngos";

export default function FindHelp() {
  const [q, setQ] = useState("");

  const filtered = ngos.filter((n) => {
    const t = `${n.name} ${n.focus} ${n.location}`.toLowerCase();
    return t.includes(q.toLowerCase());
  });

  return (
    <section className="page help-page">
      <h2>Find Support Near You</h2>
      <p className="disclaimer">All contacts are simulated for prototype purposes.</p>

      <div className="search-row">
        <input
          type="search"
          placeholder="Search by name, focus, or city"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="list">
        {filtered.length === 0 ? (
          <div className="card muted">No results found. Try different keywords.</div>
        ) : (
          filtered.map((ngo, i) => (
            <div className="ngo-card" key={i}>
              <div className="ngo-head">
                <h3>{ngo.name}</h3>
                <small className="muted">{ngo.location} • {ngo.focus}</small>
              </div>

              <p className="muted small">{ngo.description}</p>

              <div className="ngo-actions">
                <a className="btn" href={`tel:${ngo.phone}`}>📞 Call</a>
                <a className="btn" href={`https://wa.me/${ngo.whatsapp}`} target="_blank" rel="noreferrer">💬 WhatsApp</a>
                {ngo.website && <a className="btn outline" href={ngo.website} target="_blank" rel="noreferrer">🌐 Site</a>}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
