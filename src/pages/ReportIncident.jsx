import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const translations = {
  english: {
    title: "Report Incident",
    confidential: "Confidential Reporting",
    confidentialText: "Your report will be handled with strict confidentiality. You can choose to report anonymously.",
    thankYou: "Thank You for Your Report",
    successText: "Your report has been submitted successfully. Our team will review it and take appropriate action.",
    reportId: "Report ID:",
    typeLabel: "Type of Incident *",
    types: [
      { value: "", label: "Select incident type" },
      { value: "physical", label: "Physical Harassment" },
      { value: "verbal", label: "Verbal Harassment" },
      { value: "sexual", label: "Sexual Harassment" },
      { value: "stalking", label: "Stalking" },
      { value: "discrimination", label: "Discrimination" },
      { value: "threat", label: "Threat or Intimidation" },
      { value: "other", label: "Other" }
    ],
    descLabel: "Description *",
    descPlaceholder: "Please describe what happened in detail...",
    locationLabel: "Location *",
    locationPlaceholder: "Where did this occur?",
    dateLabel: "Date *",
    timeLabel: "Time",
    anonymousLabel: "Report Anonymously?",
    anonymousYes: "Yes (Anonymous)",
    anonymousNo: "No (Provide Contact)",
    nameLabel: "Your Name",
    namePlaceholder: "Full name",
    emailLabel: "Email Address",
    emailPlaceholder: "your.email@example.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+91 XXXXX XXXXX",
    submitBtn: "Submit Report",
    fillRequired: "Please fill in all required fields",
    botMessages: [
      "Hello! I'm here to help you navigate this platform safely.",
      "Remember, you have the right to a safe workplace.",
      "Need help? I can guide you to the right resources.",
      "Your safety and wellbeing are our top priority.",
      "Don't hesitate to report any incidents - you're not alone."
    ]
  },
  hindi: {
    title: "घटना की रिपोर्ट करें",
    confidential: "गोपनीय रिपोर्टिंग",
    confidentialText: "आपकी रिपोर्ट को सख्त गोपनीयता के साथ संभाला जाएगा। आप गुमनाम रूप से रिपोर्ट करना चुन सकते हैं।",
    thankYou: "आपकी रिपोर्ट के लिए धन्यवाद",
    successText: "आपकी रिपोर्ट सफलतापूर्वक सबमिट की गई है। हमारी टीम इसकी समीक्षा करेगी और उचित कार्रवाई करेगी।",
    reportId: "रिपोर्ट आईडी:",
    typeLabel: "घटना का प्रकार *",
    types: [
      { value: "", label: "घटना का प्रकार चुनें" },
      { value: "physical", label: "शारीरिक उत्पीड़न" },
      { value: "verbal", label: "मौखिक उत्पीड़न" },
      { value: "sexual", label: "यौन उत्पीड़न" },
      { value: "stalking", label: "पीछा करना" },
      { value: "discrimination", label: "भेदभाव" },
      { value: "threat", label: "धमकी या डराना" },
      { value: "other", label: "अन्य" }
    ],
    descLabel: "विवरण *",
    descPlaceholder: "कृपया विस्तार से बताएं कि क्या हुआ...",
    locationLabel: "स्थान *",
    locationPlaceholder: "यह कहाँ हुआ?",
    dateLabel: "तारीख *",
    timeLabel: "समय",
    anonymousLabel: "गुमनाम रूप से रिपोर्ट करें?",
    anonymousYes: "हाँ (गुमनाम)",
    anonymousNo: "नहीं (संपर्क प्रदान करें)",
    nameLabel: "आपका नाम",
    namePlaceholder: "पूरा नाम",
    emailLabel: "ईमेल पता",
    emailPlaceholder: "your.email@example.com",
    phoneLabel: "फोन नंबर",
    phonePlaceholder: "+91 XXXXX XXXXX",
    submitBtn: "रिपोर्ट सबमिट करें",
    fillRequired: "कृपया सभी आवश्यक फ़ील्ड भरें",
    botMessages: [
      "नमस्ते! मैं इस प्लेटफ़ॉर्म को सुरक्षित रूप से नेविगेट करने में आपकी मदद के लिए यहाँ हूँ।",
      "याद रखें, आपको एक सुरक्षित कार्यस्थल का अधिकार है।",
      "मदद चाहिए? मैं आपको सही संसाधनों तक मार्गदर्शन कर सकता हूँ।",
      "आपकी सुरक्षा और भलाई हमारी सर्वोच्च प्राथमिकता है।",
      "किसी भी घटना की रिपोर्ट करने में संकोच न करें - आप अकेले नहीं हैं।"
    ]
  }
};

export default function ReportIncident() {
  const [language, setLanguage] = useState(null);
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [botMessageIndex, setBotMessageIndex] = useState(0);
  
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    location: '',
    date: '',
    time: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    anonymous: 'no'
  });
  const [submitted, setSubmitted] = useState(false);

  const content = language ? translations[language] : translations.english;

  useEffect(() => {
    if (!showLanguageSelect) {
      const messageInterval = setInterval(() => {
        setBotMessageIndex((prev) => (prev + 1) % content.botMessages.length);
      }, 6000);
      return () => clearInterval(messageInterval);
    }
  }, [showLanguageSelect, content.botMessages.length]);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setShowLanguageSelect(false);
    setBotMessageIndex(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.type || !formData.description || !formData.location || !formData.date) {
      alert(content.fillRequired);
      return;
    }
    
    console.log('Incident reported:', formData);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        type: '',
        description: '',
        location: '',
        date: '',
        time: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        anonymous: 'no'
      });
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .report-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%);
          padding: 2rem 1rem;
        }

        .report-container {
          max-width: 768px;
          margin: 0 auto;
        }

        .report-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2.25rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1.5rem;
        }

        .info-box {
          background: #dbeafe;
          border-left: 4px solid #3b82f6;
          padding: 1rem;
          margin-bottom: 2rem;
          border-radius: 0 8px 8px 0;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .info-icon {
          width: 24px;
          height: 24px;
          color: #1e40af;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .info-content {
          flex: 1;
        }

        .info-title {
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 0.25rem;
        }

        .info-text {
          font-size: 0.875rem;
          color: #1e40af;
        }

        .success-box {
          background: #d1fae5;
          border-left: 4px solid #10b981;
          padding: 1.5rem;
          border-radius: 0 8px 8px 0;
          text-align: center;
        }

        .success-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #065f46;
          margin-bottom: 0.5rem;
        }

        .success-text {
          color: #047857;
          margin-bottom: 1rem;
        }

        .success-id {
          font-size: 0.875rem;
          color: #059669;
        }

        .report-form {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          display: block;
          color: #374151;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #9333ea;
          box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
        }

        .form-textarea {
          height: 128px;
          resize: vertical;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .radio-group {
          display: flex;
          gap: 1rem;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(90deg, #9333ea, #ec4899);
          color: white;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.125rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
        }

        .language-bot {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          z-index: 1000;
        }

        .bot-speech-bubble {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          max-width: 320px;
          position: relative;
        }

        .bot-speech-bubble::after {
          content: '';
          position: absolute;
          bottom: 20px;
          right: -10px;
          width: 0;
          height: 0;
          border-left: 15px solid white;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
        }

        .bot-speech-bubble p {
          margin: 0 0 1rem 0;
          color: #374151;
        }

        .bot-speech-bubble p:last-child {
          margin-bottom: 0;
        }

        .language-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .lang-btn {
          flex: 1;
          padding: 0.75rem;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .english-btn {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          color: white;
        }

        .hindi-btn {
          background: linear-gradient(90deg, #f59e0b, #d97706);
          color: white;
        }

        .lang-btn:hover {
          transform: translateY(-2px);
        }

        .bot-character {
          background: linear-gradient(135deg, #9333ea, #ec4899);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(147, 51, 234, 0.4);
        }

        .bot-avatar {
          font-size: 2rem;
        }

        @media (max-width: 768px) {
          .report-title {
            font-size: 1.75rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .report-form {
            padding: 1.5rem;
          }

          .language-bot {
            right: 1rem;
            bottom: 1rem;
          }

          .bot-speech-bubble {
            max-width: 240px;
          }
        }
      `}</style>

      <div className="report-page">
        <div className="report-container">
          <h1 className="report-title">{content.title}</h1>
          
          <div className="info-box">
            <AlertCircle className="info-icon" />
            <div className="info-content">
              <p className="info-title">{content.confidential}</p>
              <p className="info-text">{content.confidentialText}</p>
            </div>
          </div>

          {submitted ? (
            <div className="success-box">
              <h2 className="success-title">{content.thankYou}</h2>
              <p className="success-text">{content.successText}</p>
              <p className="success-id">
                {content.reportId} {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="report-form">
              <div className="form-group">
                <label className="form-label">{content.typeLabel}</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  {content.types.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{content.descLabel}</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder={content.descPlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">{content.locationLabel}</label>
                <input 
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={content.locationPlaceholder}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">{content.dateLabel}</label>
                  <input 
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{content.timeLabel}</label>
                  <input 
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{content.anonymousLabel}</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input 
                      type="radio"
                      name="anonymous"
                      value="yes"
                      checked={formData.anonymous === 'yes'}
                      onChange={handleChange}
                    />
                    <span>{content.anonymousYes}</span>
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio"
                      name="anonymous"
                      value="no"
                      checked={formData.anonymous === 'no'}
                      onChange={handleChange}
                    />
                    <span>{content.anonymousNo}</span>
                  </label>
                </div>
              </div>

              {formData.anonymous === 'no' && (
                <>
                  <div className="form-group">
                    <label className="form-label">{content.nameLabel}</label>
                    <input 
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder={content.namePlaceholder}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{content.emailLabel}</label>
                    <input 
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className="form-input"
                      placeholder={content.emailPlaceholder}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{content.phoneLabel}</label>
                    <input 
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder={content.phonePlaceholder}
                    />
                  </div>
                </>
              )}

              <button type="submit" className="submit-btn">
                {content.submitBtn}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Language Bot */}
      <div className="language-bot">
        <div className="bot-speech-bubble" key={showLanguageSelect ? "select" : botMessageIndex}>
          <p>
            {showLanguageSelect
              ? "Hello! Would you like to view this page in English or Hindi? / नमस्ते! क्या आप यह पेज अंग्रेजी या हिंदी में देखना चाहेंगे?"
              : content.botMessages[botMessageIndex]}
          </p>

          {showLanguageSelect && (
            <div className="language-buttons">
              <button
                onClick={() => handleLanguageSelect("english")}
                className="lang-btn english-btn"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageSelect("hindi")}
                className="lang-btn hindi-btn"
              >
                हिंदी
              </button>
            </div>
          )}
        </div>

        <div className="bot-character">
          <div className="bot-avatar">🤖</div>
        </div>
      </div>
    </>
  );
}