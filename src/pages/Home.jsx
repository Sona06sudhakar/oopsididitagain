import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Shield, Phone, Book, Heart, Lightbulb, Info, AlertCircle } from "lucide-react";

const translations = {
  english: {
    title: "Nari Suraksha Saathi",
    tagline: "Your trusted safety and support companion",
    cards: [
      { 
        text: "Report Incident", 
        desc: "Share your experience anonymously and safely", 
        link: "/report", 
        icon: AlertCircle,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
      },
      { 
        text: "My Rights", 
        desc: "Know your legal rights under POSH Act", 
        link: "/rights", 
        icon: Book,
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop"
      },
      { 
        text: "Find Help", 
        desc: "Connect with NGOs and support services", 
        link: "/help", 
        icon: Heart,
        image: "download6.jpg"
      },
      { 
        text: "Safety Tips", 
        desc: "Essential safety guidelines for workers", 
        link: "/tips", 
        icon: Lightbulb,
        image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=400&h=300&fit=crop"
      }
    ],
    emergency: "Emergency Support",
    emergencyText: "If you are in immediate danger, please contact:",
    police: "Police: 100",
    helpline: "Women Helpline: 1091",
    disclaimer: "⚠️ This is a prototype for demonstration only. No real data is sent or stored.",
    botMessages: [
      "Hello! I'm here to help you navigate this platform safely.",
      "Remember, you have the right to a safe workplace.",
      "Need help? I can guide you to the right resources.",
      "Your safety and wellbeing are our top priority.",
      "Don't hesitate to report any incidents - you're not alone."
    ]
  },
  hindi: {
    title: "नारी सुरक्षा साथी",
    tagline: "आपका विश्वसनीय सुरक्षा और सहायता साथी",
    cards: [
      { 
        text: "घटना की रिपोर्ट करें", 
        desc: "अपना अनुभव गुमनाम रूप से और सुरक्षित रूप से साझा करें", 
        link: "/report", 
        icon: AlertCircle,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
      },
      { 
        text: "मेरे अधिकार", 
        desc: "POSH अधिनियम के तहत अपने कानूनी अधिकार जानें", 
        link: "/rights", 
        icon: Book,
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop"
      },
      { 
        text: "मदद खोजें", 
        desc: "एनजीओ और सहायता सेवाओं से जुड़ें", 
        link: "/help", 
        icon: Heart,
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
      },
      { 
        text: "सुरक्षा सुझाव", 
        desc: "कर्मचारियों के लिए आवश्यक सुरक्षा दिशानिर्देश", 
        link: "/tips", 
        icon: Lightbulb,
        image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=400&h=300&fit=crop"
      }
    ],
    emergency: "आपातकालीन सहायता",
    emergencyText: "यदि आप तत्काल खतरे में हैं, तो कृपया संपर्क करें:",
    police: "पुलिस: 100",
    helpline: "महिला हेल्पलाइन: 1091",
    disclaimer: "⚠️ यह केवल प्रदर्शन के लिए एक प्रोटोटाइप है। कोई वास्तविक डेटा नहीं भेजा या संग्रहीत नहीं किया जाता है।",
    botMessages: [
      "नमस्ते! मैं इस प्लेटफ़ॉर्म को सुरक्षित रूप से नेविगेट करने में आपकी मदद के लिए यहाँ हूँ।",
      "याद रखें, आपको एक सुरक्षित कार्यस्थल का अधिकार है।",
      "मदद चाहिए? मैं आपको सही संसाधनों तक मार्गदर्शन कर सकता हूँ।",
      "आपकी सुरक्षा और भलाई हमारी सर्वोच्च प्राथमिकता है।",
      "किसी भी घटना की रिपोर्ट करने में संकोच न करें - आप अकेले नहीं हैं।"
    ]
  }
};

const carouselImages = [
  "/download1.jpg",
  "/diwnload2.jpg",
  "/download3.jpg",
  "/down;oad5.jpg",
  "/download4.jpg"
];


export default function Home() {
  const [language, setLanguage] = useState(null);
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [botMessageIndex, setBotMessageIndex] = useState(0);

  const content = language ? translations[language] : translations.english;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      <section className="home-page">
        <div className="hero">
          <h1 className="hero-title" key={content.title}>
            {content.title}
          </h1>

          <p className="tagline" key={content.tagline}>
            {content.tagline}
          </p>

          {/* Carousel */}
          <div className="carousel-container">
            <div className="carousel-slide">
              <img
                src={carouselImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="carousel-image"
              />
            </div>

            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid">
            {content.cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.link}
                  to={card.link}
                  className="card"
                >
                  <div className="card-image-wrapper">
                    <img src={card.image} alt={card.text} className="card-image" />
                    <div className="card-icon-overlay">
                      <Icon size={28} />
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{card.text}</h3>
                    <p className="card-desc">{card.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Emergency Section */}
          <div className="emergency-section">
            <h2>{content.emergency}</h2>
            <p>{content.emergencyText}</p>
            <div className="emergency-buttons">
              <a href="tel:100" className="emergency-btn police-btn">
                <Phone size={24} />
                {content.police}
              </a>
              <a href="tel:1091" className="emergency-btn helpline-btn">
                <Phone size={24} />
                {content.helpline}
              </a>
            </div>
          </div>

          <p className="disclaimer" key={content.disclaimer}>
            {content.disclaimer}
          </p>
        </div>
      </section>

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