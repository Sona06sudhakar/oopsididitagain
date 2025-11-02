import React, { useState } from "react";
import { Shield, Phone, MessageCircle, MapPin, Search, X, AlertCircle } from "lucide-react";

const ngos = [
  // Maharashtra
  { name: "Women's Safety Alliance", location: "Mumbai, Maharashtra", focus: "Workplace Harassment", description: "24/7 support for workplace harassment cases. Legal aid and counseling services.", phone: "+919876543210", whatsapp: "919876543210", verified: true },
  { name: "Pune Women's Shelter", location: "Pune, Maharashtra", focus: "Domestic Violence", description: "Safe shelter and rehabilitation for women facing domestic violence.", phone: "+919876543211", whatsapp: "919876543211", verified: true },
  { name: "Nagpur Mahila Kendra", location: "Nagpur, Maharashtra", focus: "Legal Rights", description: "Free legal consultation and court representation for women.", phone: "+919876543212", whatsapp: "919876543212", verified: true },
  
  // Gujarat
  { name: "Mahila Suraksha Kendra", location: "Vadodara, Gujarat", focus: "Emergency Response", description: "Immediate emergency response and police coordination services.", phone: "+919876543214", whatsapp: "919876543214", verified: true },
  { name: "Women Empowerment Centre", location: "Ahmedabad, Gujarat", focus: "Education & Training", description: "Self-defense training, legal awareness programs, and skill development.", phone: "+919876543215", whatsapp: "919876543215", verified: true },
  { name: "Surat Women's Aid", location: "Surat, Gujarat", focus: "Mental Health", description: "Counseling and therapy services for trauma survivors.", phone: "+919876543216", whatsapp: "919876543216", verified: false },
  
  // Delhi NCR
  { name: "Shakti Women Support", location: "Delhi, NCR", focus: "Domestic Violence", description: "Emergency shelter, legal assistance, and rehabilitation for survivors.", phone: "+919876543217", whatsapp: "919876543217", verified: true },
  { name: "Gurgaon Safety First", location: "Gurgaon, Haryana", focus: "Workplace Harassment", description: "Corporate harassment cases and workplace safety consulting.", phone: "+919876543218", whatsapp: "919876543218", verified: true },
  { name: "Noida Women's Forum", location: "Noida, Uttar Pradesh", focus: "Legal Rights", description: "Legal advocacy and women's rights awareness programs.", phone: "+919876543219", whatsapp: "919876543219", verified: true },
  
  // Karnataka
  { name: "Nari Shakti Foundation", location: "Bangalore, Karnataka", focus: "Legal Rights", description: "Free legal consultation and representation for women's rights cases.", phone: "+919876543220", whatsapp: "919876543220", verified: true },
  { name: "Mysore Women's Cell", location: "Mysore, Karnataka", focus: "Emergency Response", description: "24/7 emergency helpline and rapid response team.", phone: "+919876543221", whatsapp: "919876543221", verified: true },
  
  // Tamil Nadu
  { name: "Chennai Women's Collective", location: "Chennai, Tamil Nadu", focus: "Mental Health", description: "Psychological counseling and support groups for survivors.", phone: "+919876543222", whatsapp: "919876543222", verified: true },
  { name: "Coimbatore Safety Net", location: "Coimbatore, Tamil Nadu", focus: "Domestic Violence", description: "Safe houses and legal support for domestic violence survivors.", phone: "+919876543223", whatsapp: "919876543223", verified: true },
  
  // West Bengal
  { name: "Kolkata Women's Trust", location: "Kolkata, West Bengal", focus: "Education & Training", description: "Vocational training and self-defense classes for women.", phone: "+919876543224", whatsapp: "919876543224", verified: true },
  { name: "Bengal Mahila Samiti", location: "Howrah, West Bengal", focus: "Legal Rights", description: "Legal aid and advocacy for women's property rights.", phone: "+919876543225", whatsapp: "919876543225", verified: false },
  
  // Rajasthan
  { name: "Jaipur Women's Forum", location: "Jaipur, Rajasthan", focus: "Workplace Harassment", description: "Workplace harassment counseling and legal support.", phone: "+919876543226", whatsapp: "919876543226", verified: true },
  { name: "Udaipur Mahila Shakti", location: "Udaipur, Rajasthan", focus: "Domestic Violence", description: "Shelter homes and rehabilitation programs.", phone: "+919876543227", whatsapp: "919876543227", verified: true },
  
  // Telangana
  { name: "Hyderabad Women's Safety", location: "Hyderabad, Telangana", focus: "Emergency Response", description: "Police coordination and emergency shelter services.", phone: "+919876543228", whatsapp: "919876543228", verified: true },
  { name: "Cyberabad Women's Help", location: "Hyderabad, Telangana", focus: "Legal Rights", description: "Legal consultation and court support for women.", phone: "+919876543229", whatsapp: "919876543229", verified: true },
  
  // Punjab
  { name: "Chandigarh Women's Center", location: "Chandigarh, Punjab", focus: "Mental Health", description: "Trauma counseling and psychiatric support services.", phone: "+919876543230", whatsapp: "919876543230", verified: true },
  { name: "Ludhiana Safety Hub", location: "Ludhiana, Punjab", focus: "Workplace Harassment", description: "Corporate mediation and workplace safety training.", phone: "+919876543231", whatsapp: "919876543231", verified: false },
  
  // Kerala
  { name: "Kochi Women's Alliance", location: "Kochi, Kerala", focus: "Domestic Violence", description: "Crisis intervention and family counseling services.", phone: "+919876543232", whatsapp: "919876543232", verified: true },
  { name: "Thiruvananthapuram Aid", location: "Thiruvananthapuram, Kerala", focus: "Education & Training", description: "Women empowerment programs and skill development.", phone: "+919876543233", whatsapp: "919876543233", verified: true },
  
  // Madhya Pradesh
  { name: "Bhopal Women's Refuge", location: "Bhopal, Madhya Pradesh", focus: "Emergency Response", description: "Emergency shelter and rapid response services.", phone: "+919876543234", whatsapp: "919876543234", verified: true },
  { name: "Indore Safety Network", location: "Indore, Madhya Pradesh", focus: "Legal Rights", description: "Legal aid and women's rights advocacy.", phone: "+919876543235", whatsapp: "919876543235", verified: true },
];

const translations = {
  en: {
    title: "Find Support Near You",
    subtitle: "Connect with verified organizations ready to help",
    search: "Search by name, focus, or city",
    noResults: "No results found. Try different keywords.",
    call: "Call",
    whatsapp: "WhatsApp",
    verified: "Verified",
    emergency: "National Emergency: 1091 (Women Helpline)",
    botGreeting: "Hello! Would you like to view this page in English or Hindi?",
    botQuestion: "नमस्ते! क्या आप यह पेज अंग्रेज़ी या हिंदी में देखना चाहेंगे?",
    english: "English",
    hindi: "हिंदी"
  },
  hi: {
    title: "अपने आस-पास सहायता खोजें",
    subtitle: "सत्यापित संगठनों से जुड़ें जो मदद के लिए तैयार हैं",
    search: "नाम, फोकस या शहर से खोजें",
    noResults: "कोई परिणाम नहीं मिला। अलग कीवर्ड आज़माएं।",
    call: "कॉल करें",
    whatsapp: "व्हाट्सएप",
    verified: "सत्यापित",
    emergency: "राष्ट्रीय आपातकाल: 1091 (महिला हेल्पलाइन)",
    botGreeting: "Hello! Would you like to view this page in English or Hindi?",
    botQuestion: "नमस्ते! क्या आप यह पेज अंग्रेज़ी या हिंदी में देखना चाहेंगे?",
    english: "English",
    hindi: "हिंदी"
  }
};

export default function FindHelp() {
  const [q, setQ] = useState("");
  const [showBot, setShowBot] = useState(true);
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  const filtered = ngos.filter((n) => {
    const searchText = `${n.name} ${n.focus} ${n.location}`.toLowerCase();
    return searchText.includes(q.toLowerCase());
  });

  const handleLanguageChange = (selectedLang) => {
    setLang(selectedLang);
    setShowBot(false);
  };

  return (
    <div className="find-help-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        .find-help-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%);
          padding: 2rem 1rem;
        }

        .hero-section {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: #581c87;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 10px rgba(88, 28, 135, 0.1);
        }

        .page-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: #64748b;
        }

        .emergency-banner {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          padding: 1rem;
          border-radius: 12px;
          margin: 0 auto 2rem;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .search-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin: 0 auto 2rem;
          max-width: 1200px;
        }

        .search-bar {
          position: relative;
        }

        .search-bar input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .search-bar input:focus {
          outline: none;
          border-color: #9333ea;
          box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .ngo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .ngo-card {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
          border: 2px solid transparent;
        }

        .ngo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(147, 51, 234, 0.15);
          border-color: #9333ea;
        }

        .ngo-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .ngo-title {
          flex: 1;
        }

        .ngo-title h3 {
          font-family: 'Poppins', sans-serif;
          color: #1f2937;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .ngo-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .verified-badge {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          white-space: nowrap;
        }

        .focus-tag {
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          color: #9333ea;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          display: inline-block;
          font-family: 'Poppins', sans-serif;
        }

        .ngo-description {
          font-family: 'Inter', sans-serif;
          color: #4b5563;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .ngo-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .action-btn {
          flex: 1;
          min-width: 120px;
          padding: 0.75rem;
          border: none;
          border-radius: 12px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
          color: white;
        }

        .action-btn.primary:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);
        }

        .action-btn.secondary {
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          color: white;
        }

        .action-btn.secondary:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
        }

        .no-results {
          text-align: center;
          padding: 3rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          max-width: 1200px;
          margin: 0 auto;
        }

        .no-results-icon {
          color: #9ca3af;
          margin-bottom: 1rem;
        }

        .no-results p {
          font-family: 'Inter', sans-serif;
          color: #6b7280;
          font-size: 1.1rem;
        }

        .language-bot {
          position: fixed;
          top: 50%;
          right: 30px;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
        }

        .bot-speech-bubble {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 8px 30px rgba(147, 51, 234, 0.15);
          max-width: 320px;
          animation: fadeIn 0.4s ease;
          order: 2;
        }

        .bot-character {
          animation: float 3s ease-in-out infinite;
          order: 1;
        }

        .bot-avatar {
          font-size: 4rem;
          background: white;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.2);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .bot-avatar:hover {
          transform: scale(1.1);
        }

        .bot-speech-bubble p {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 0;
        }

        .language-buttons {
          display: flex;
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .lang-btn {
          flex: 1;
          padding: 0.7rem 1.2rem;
          border: none;
          border-radius: 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .english-btn {
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
          color: white;
        }

        .hindi-btn {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
        }

        .lang-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s;
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .close-btn:hover {
          color: #4b5563;
        }

        .bot-speech-bubble-wrapper {
          position: relative;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          .find-help-page {
            padding: 1rem 0.5rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }

          .ngo-grid {
            grid-template-columns: 1fr;
          }

          .language-bot {
            right: 20px;
          }

          .bot-speech-bubble {
            max-width: 280px;
            padding: 1rem;
          }

          .bot-avatar {
            width: 60px;
            height: 60px;
            font-size: 3rem;
          }
        }
      `}</style>

      <div className="hero-section">
        <h1 className="page-title">{t.title}</h1>
        <p className="page-subtitle">{t.subtitle}</p>
      </div>

      <div className="emergency-banner">
        <AlertCircle size={20} />
        {t.emergency}
      </div>

      <div className="search-section">
        <div className="search-bar">
          <Search className="search-icon" size={20} />
          <input
            type="search"
            placeholder={t.search}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="no-results">
          <Search className="no-results-icon" size={48} />
          <p>{t.noResults}</p>
        </div>
      ) : (
        <div className="ngo-grid">
          {filtered.map((ngo, i) => (
            <div className="ngo-card" key={i}>
              <div className="ngo-header">
                <div className="ngo-title">
                  <h3>{ngo.name}</h3>
                  <div className="ngo-meta">
                    <div className="meta-row">
                      <MapPin size={14} />
                      <span>{ngo.location}</span>
                    </div>
                  </div>
                </div>
                {ngo.verified && (
                  <div className="verified-badge">
                    <Shield size={12} />
                    {t.verified}
                  </div>
                )}
              </div>

              <div className="focus-tag">{ngo.focus}</div>

              <p className="ngo-description">{ngo.description}</p>

              <div className="ngo-actions">
                <a className="action-btn primary" href={`tel:${ngo.phone}`}>
                  <Phone size={16} />
                  {t.call}
                </a>
                <a className="action-btn secondary" href={`https://wa.me/${ngo.whatsapp}`} target="_blank" rel="noreferrer">
                  <MessageCircle size={16} />
                  {t.whatsapp}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="language-bot">
        {showBot ? (
          <>
            <div className="bot-character">
              <div className="bot-avatar">🤖</div>
            </div>
            <div className="bot-speech-bubble-wrapper">
              <div className="bot-speech-bubble">
                <button className="close-btn" onClick={() => setShowBot(false)}>
                  <X size={20} />
                </button>
                <p>{t.botGreeting}</p>
                <p>{t.botQuestion}</p>
                <div className="language-buttons">
                  <button className="lang-btn english-btn" onClick={() => handleLanguageChange('en')}>
                    {t.english}
                  </button>
                  <button className="lang-btn hindi-btn" onClick={() => handleLanguageChange('hi')}>
                    {t.hindi}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bot-character">
            <div className="bot-avatar" onClick={() => setShowBot(true)}>🤖</div>
          </div>
        )}
      </div>
    </div>
  );
}