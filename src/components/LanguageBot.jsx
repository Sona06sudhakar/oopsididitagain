import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const botMessages = {
  english: [
    "Hello! I'm here to help you navigate this platform safely.",
    "Remember, you have the right to a safe workplace.",
    "Need help? I can guide you to the right resources.",
    "Your safety and wellbeing are our top priority.",
    "Don't hesitate to report any incidents - you're not alone."
  ],
  hindi: [
    "नमस्ते! मैं इस प्लेटफ़ॉर्म को सुरक्षित रूप से नेविगेट करने में आपकी मदद के लिए यहाँ हूँ।",
    "याद रखें, आपको एक सुरक्षित कार्यस्थल का अधिकार है।",
    "मदद चाहिए? मैं आपको सही संसाधनों तक मार्गदर्शन कर सकता हूँ।",
    "आपकी सुरक्षा और भलाई हमारी सर्वोच्च प्राथमिकता है।",
    "किसी भी घटना की रिपोर्ट करने में संकोच न करें - आप अकेले नहीं हैं।"
  ]
};

export default function LanguageBot() {
  const { language, setLanguage } = useLanguage();
  const [showLanguageSelect, setShowLanguageSelect] = useState(language === 'english' ? false : true);
  const [botMessageIndex, setBotMessageIndex] = useState(0);

  const messages = botMessages[language] || botMessages.english;

  useEffect(() => {
    // If language is already set, don't show language selection
    if (language && language !== 'english') {
      setShowLanguageSelect(false);
    }
  }, [language]);

  useEffect(() => {
    if (!showLanguageSelect) {
      const messageInterval = setInterval(() => {
        setBotMessageIndex((prev) => (prev + 1) % messages.length);
      }, 6000);
      return () => clearInterval(messageInterval);
    }
  }, [showLanguageSelect, messages.length]);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setShowLanguageSelect(false);
    setBotMessageIndex(0);
  };

  return (
    <>
      <style>{`
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
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
          line-height: 1.5;
        }

        .bot-speech-bubble p:last-child {
          margin-bottom: 0;
        }

        .language-buttons {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .lang-btn {
          flex: 1;
          padding: 0.75rem;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
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
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .bot-character:hover {
          transform: scale(1.1);
        }

        .bot-avatar {
          font-size: 2rem;
        }

        .toggle-lang-btn {
          background: linear-gradient(90deg, #9333ea, #ec4899);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          border: none;
          font-weight: 600;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
          width: 100%;
        }

        .toggle-lang-btn:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .language-bot {
            right: 1rem;
            bottom: 1rem;
          }

          .bot-speech-bubble {
            max-width: 240px;
            padding: 1rem;
          }

          .bot-character {
            width: 50px;
            height: 50px;
          }

          .bot-avatar {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="language-bot">
        <div className="bot-speech-bubble" key={showLanguageSelect ? "select" : botMessageIndex}>
          <p>
            {showLanguageSelect
              ? "Hello! Would you like to view this page in English or Hindi? / नमस्ते! क्या आप यह पेज अंग्रेजी या हिंदी में देखना चाहेंगे?"
              : messages[botMessageIndex]}
          </p>

          {showLanguageSelect ? (
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
          ) : (
            <button
              onClick={() => setShowLanguageSelect(true)}
              className="toggle-lang-btn"
            >
              {language === 'english' ? 'Switch to Hindi / हिंदी' : 'Switch to English / अंग्रेजी'}
            </button>
          )}
        </div>

        <div className="bot-character">
          <div className="bot-avatar">🤖</div>
        </div>
      </div>
    </>
  );
}