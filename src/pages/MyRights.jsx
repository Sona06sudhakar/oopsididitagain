import React, { useState } from "react";

const CONTENT = {
  en: {
    what: [
      "Unwelcome comments, gestures, or sexual remarks.",
      "Unwanted touching or physical advances.",
      "Coercion, threats or intimidation related to work.",
      "Repeated unwelcome messages or stalking at work."
    ],
    rights: [
      "You have the right to a safe workplace free from harassment.",
      "You can raise a complaint without fear of retaliation.",
      "You can seek help from local NGOs or legal aid organizations."
    ],
    how: [
      "Document what happened (date, place, witnesses if any).",
      "Seek a trusted person or NGO for guidance.",
      "If available, report to an Internal Complaints Committee (formal workplaces)."
    ]
  },
  hi: {
    what: [
      "अप्रिय टिप्पणियाँ, इशारे, या यौन टिप्पणी।",
      "अनचाहा स्पर्श या शारीरिक प्रयास।",
      "काम से संबंधित दबाव, धमकी या डराना।",
      "काम पर बार-बार मिलने वाले अनचाहे संदेश।"
    ],
    rights: [
      "आपको उत्पीड़न से मुक्त सुरक्षित कार्यस्थल का अधिकार है।",
      "आप बिना प्रतिशोध के शिकायत दर्ज कर सकती हैं।",
      "आप स्थानीय एनजीओ या कानूनी सहायता से मदद ले सकती हैं।"
    ],
    how: [
      "क्या हुआ उसका रिकॉर्ड रखें (तारीख, स्थान, गवाह)।",
      "मार्गदर्शन के लिए किसी भरोसेमंद व्यक्ति या एनजीओ से संपर्क करें।",
      "यदि संभव हो तो आंतरिक शिकायत समिति को रिपोर्ट करें (औपचारिक कार्यस्थलों में)।"
    ]
  }
};

export default function MyRights() {
  const [lang, setLang] = useState("en");

  return (
    <section className="page rights-page">
      <div className="card">
        <div className="rights-header">
          <h2>Your Rights under POSH (Prototype)</h2>
          <div>
            <button className="btn small" onClick={() => setLang(lang === "en" ? "hi" : "en")}>
              {lang === "en" ? "हिंदी में देखें" : "View in English"}
            </button>
          </div>
        </div>

        <h3>What is Harassment?</h3>
        <ul>
          {CONTENT[lang].what.map((t, i) => <li key={i}>{t}</li>)}
        </ul>

        <h3>Your Rights to Safety</h3>
        <ul>
          {CONTENT[lang].rights.map((t, i) => <li key={i}>{t}</li>)}
        </ul>

        <h3>How to Report (General)</h3>
        <ul>
          {CONTENT[lang].how.map((t, i) => <li key={i}>{t}</li>)}
        </ul>

        <p className="small muted">Based on POSH Act, 2013 and general labour rights. This is simplified informational content for demo purposes.</p>
      </div>
    </section>
  );
}
