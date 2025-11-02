import React, { useState, useEffect } from 'react';
import { Heart, Shield, Users, BookOpen, Target, Eye, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const [language, setLanguage] = useState(null);
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [botMessageIndex, setBotMessageIndex] = useState(0);

  const content = {
    english: {
      hero: {
        subtitle: "EMPOWERING WOMEN",
        title: "Safety & Support for the Empowered Woman",
        tagline: "Your Journey to Safety",
        cta: "Learn More"
      },
      elevate: {
        title: "Elevate Your Safety"
      },
      welcome: {
        title: "Welcome",
        subtitle: "I'm Nari Suraksha Saathi",
        text: "Every woman deserves to feel safe, heard, and informed. Unfortunately, many incidents of harassment and unsafe behavior go unreported due to fear, lack of support, or not knowing what to do next. We bridge this gap with a simple, mobile-friendly tool that provides clear guidance, support connections, and a sense of protection — all in one place."
      },
      mission: {
        title: "What We Do",
        subtitle: "Our Mission & Purpose",
        items: [
          {
            title: "Know Your Rights",
            text: "Understanding legal rights under POSH Act in easy, everyday language for every woman."
          },
          {
            title: "Report Safely",
            text: "Discreet reporting simulation showing how to share experiences safely and confidentially."
          },
          {
            title: "Find Support",
            text: "Reliable contacts of NGOs, legal aid groups, and women's organizations for immediate help."
          },
          {
            title: "Stay Protected",
            text: "Practical safety tips for everyday life especially for women in informal work sectors."
          }
        ]
      },
      vision: {
        title: "Our Vision",
        points: [
          "Every woman knows her rights",
          "No one stays silent out of fear",
          "Safety and dignity at work are basic rights"
        ],
        closing: "Nari Suraksha Saathi is our small step toward that vision — combining compassion, simplicity, and technology to make a meaningful impact."
      },
      disclaimer: {
        title: "Important Note",
        text: "This platform is a prototype created to demonstrate discreet reporting and legal awareness. All data shown is simulated for educational purposes only. No actual reports are stored or transmitted."
      },
      botMessages: [
        "Hello! I'm here to help you navigate this platform safely.",
        "Remember, you have the right to a safe workplace.",
        "Need help? I can guide you to the right resources.",
        "Your safety and wellbeing are our top priority.",
        "Don't hesitate to report any incidents - you're not alone."
      ]
    },
    hindi: {
      hero: {
        subtitle: "महिलाओं को सशक्त बनाना",
        title: "सशक्त महिला के लिए सुरक्षा और समर्थन",
        tagline: "सुरक्षा की ओर आपकी यात्रा",
        cta: "और जानें"
      },
      elevate: {
        title: "अपनी सुरक्षा को बढ़ाएं"
      },
      welcome: {
        title: "स्वागत है",
        subtitle: "मैं नारी सुरक्षा साथी हूं",
        text: "हर महिला सुरक्षित, सुनी हुई और सूचित महसूस करने की हकदार है। दुर्भाग्य से, कई उत्पीड़न की घटनाएं डर, समर्थन की कमी या आगे क्या करना है यह न जानने के कारण रिपोर्ट नहीं की जाती हैं। हम एक सरल, मोबाइल-फ्रेंडली टूल के साथ इस अंतर को पाटते हैं जो स्पष्ट मार्गदर्शन, समर्थन कनेक्शन और सुरक्षा की भावना प्रदान करता है।"
      },
      mission: {
        title: "हम क्या करते हैं",
        subtitle: "हमारा मिशन और उद्देश्य",
        items: [
          {
            title: "अपने अधिकार जानें",
            text: "हर महिला के लिए पोश अधिनियम के तहत कानूनी अधिकारों को सरल भाषा में समझना।"
          },
          {
            title: "सुरक्षित रिपोर्ट करें",
            text: "गोपनीय रिपोर्टिंग सिमुलेशन जो दिखाता है कि अनुभवों को सुरक्षित रूप से कैसे साझा करें।"
          },
          {
            title: "समर्थन खोजें",
            text: "तत्काल मदद के लिए एनजीओ, कानूनी सहायता समूहों और महिला संगठनों के विश्वसनीय संपर्क।"
          },
          {
            title: "सुरक्षित रहें",
            text: "विशेष रूप से अनौपचारिक कार्य क्षेत्रों में महिलाओं के लिए रोजमर्रा की जिंदगी के लिए व्यावहारिक सुरक्षा युक्तियां।"
          }
        ]
      },
      vision: {
        title: "हमारी दृष्टि",
        points: [
          "हर महिला अपने अधिकारों को जानती है",
          "कोई भी डर से चुप नहीं रहता",
          "काम पर सुरक्षा और सम्मान बुनियादी अधिकार हैं"
        ],
        closing: "नारी सुरक्षा साथी उस दृष्टि की ओर हमारा छोटा कदम है - करुणा, सरलता और प्रौद्योगिकी को मिलाकर एक सार्थक प्रभाव बनाना।"
      },
      disclaimer: {
        title: "महत्वपूर्ण नोट",
        text: "यह प्लेटफ़ॉर्म विवेकपूर्ण रिपोर्टिंग और कानूनी जागरूकता को प्रदर्शित करने के लिए बनाया गया एक प्रोटोटाइप है। दिखाया गया सभी डेटा केवल शैक्षिक उद्देश्यों के लिए सिमुलेटेड है।"
      },
      botMessages: [
        "नमस्ते! मैं इस प्लेटफ़ॉर्म को सुरक्षित रूप से नेविगेट करने में आपकी मदद के लिए यहाँ हूँ।",
        "याद रखें, आपको एक सुरक्षित कार्यस्थल का अधिकार है।",
        "मदद चाहिए? मैं आपको सही संसाधनों तक मार्गदर्शन कर सकता हूँ।",
        "आपकी सुरक्षा और भलाई हमारी सर्वोच्च प्राथमिकता है।",
        "किसी भी घटना की रिपोर्ट करने में संकोच न करें - आप अकेले नहीं हैं।"
      ]
    }
  };

  const currentContent = language ? content[language] : content.english;

  useEffect(() => {
    if (!showLanguageSelect) {
      const messageInterval = setInterval(() => {
        setBotMessageIndex((prev) => (prev + 1) % currentContent.botMessages.length);
      }, 6000);
      return () => clearInterval(messageInterval);
    }
  }, [showLanguageSelect, currentContent.botMessages.length]);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setShowLanguageSelect(false);
    setBotMessageIndex(0);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        .about-page {
          min-height: 100vh;
          background: #faf5ff;
        }

        /* Hero Section */
        .hero-section {
          min-height: 90vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: linear-gradient(135deg, #fce7f3 0%, #fff7ed 100%);
          position: relative;
        }

        .hero-content {
          padding: 8rem 5% 4rem 8%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 3px;
          color: #9333ea;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 300;
          color: #581c87;
          line-height: 1.3;
          margin-bottom: 2rem;
        }

        .hero-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-style: italic;
          color: #ec4899;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .hero-cta {
          width: fit-content;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ec4899, #9333ea);
          color: white;
          border: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 1px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);
        }

        .hero-image {
          position: relative;
          overflow: hidden;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Elevate Section */
        .elevate-section {
          padding: 6rem 0;
          text-align: center;
          background: linear-gradient(135deg, #fce7f3, #fef3c7);
          position: relative;
        }

        .elevate-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          color: #581c87;
          letter-spacing: 2px;
        }

        .sparkle-icon {
          color: #ec4899;
          margin: 2rem auto;
        }

        /* Welcome Section */
        .welcome-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: #fff;
          align-items: center;
        }

        .welcome-image {
          height: 600px;
        }

        .welcome-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .welcome-content {
          padding: 4rem 8% 4rem 5%;
        }

        .welcome-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 300;
          color: #ec4899;
          margin-bottom: 1rem;
        }

        .welcome-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-style: italic;
          color: #581c87;
          margin-bottom: 2rem;
        }

        .welcome-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          line-height: 1.9;
          color: #6b7280;
          text-align: justify;
        }

        .welcome-cta {
          margin-top: 2.5rem;
          padding: 0.875rem 2rem;
          background: transparent;
          border: 2px solid #9333ea;
          color: #9333ea;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .welcome-cta:hover {
          background: #9333ea;
          color: white;
        }

        /* Mission Section */
        .mission-section {
          padding: 6rem 5%;
          background: linear-gradient(135deg, #faf5ff, #fce7f3);
        }

        .mission-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .mission-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .mission-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 2px;
          color: #9333ea;
        }

        .mission-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .mission-card {
          background: white;
          padding: 3rem;
          border-radius: 0;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .mission-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .mission-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 500;
          color: #ec4899;
          margin-bottom: 1.5rem;
        }

        .mission-card-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          line-height: 1.8;
          color: #6b7280;
        }

        /* Vision Section */
        .vision-section {
          padding: 6rem 5%;
          background: linear-gradient(90deg, #9333ea, #ec4899);
          color: white;
          text-align: center;
        }

        .vision-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .vision-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 3rem;
        }

        .vision-points {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .vision-point {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .vision-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .vision-point p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .vision-closing {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-style: italic;
          line-height: 1.8;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem 3rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        /* Disclaimer Section */
        .disclaimer-section {
          padding: 4rem 5%;
          background: linear-gradient(135deg, #fef3c7, #fed7aa);
        }

        .disclaimer-content {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 3rem;
          border: 3px solid #f59e0b;
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.2);
        }

        .disclaimer-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: #92400e;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .disclaimer-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          color: #78350f;
          line-height: 1.8;
        }

        /* Language Bot */
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
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
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
          font-family: 'Montserrat', sans-serif;
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

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section,
          .welcome-section {
            grid-template-columns: 1fr;
          }

          .hero-image,
          .welcome-image {
            height: 400px;
          }

          .mission-grid,
          .vision-points {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-content,
          .welcome-content {
            padding: 4rem 5%;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .elevate-title,
          .mission-title,
          .vision-title {
            font-size: 2rem;
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

      <div className="about-page">
        {/* Hero Section */}
        <motion.div 
          className="hero-section"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="hero-content" variants={fadeInUp}>
            <div className="hero-subtitle">{currentContent.hero.subtitle}</div>
            <h1 className="hero-title">{currentContent.hero.title}</h1>
            <div className="hero-tagline">{currentContent.hero.tagline}</div>
            <button className="hero-cta">{currentContent.hero.cta}</button>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/down7.jpg" alt="Empowered Woman" />
          </motion.div>
        </motion.div>

        {/* Elevate Section */}
        <motion.div 
          className="elevate-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="elevate-title">{currentContent.elevate.title}</h2>
          <Sparkles className="sparkle-icon" size={40} />
        </motion.div>

        {/* Welcome Section */}
        <motion.div 
          className="welcome-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="welcome-image"
            variants={fadeInUp}
          >
            <img src="/down5.jpg" alt="Welcome" />
          </motion.div>
          <motion.div className="welcome-content" variants={fadeInUp}>
            <h3 className="welcome-title">{currentContent.welcome.title}</h3>
            <h2 className="welcome-subtitle">{currentContent.welcome.subtitle}</h2>
            <p className="welcome-text">{currentContent.welcome.text}</p>
            <button className="welcome-cta">{currentContent.hero.cta}</button>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <div className="mission-section">
          <motion.div 
            className="mission-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mission-title">{currentContent.mission.title}</h2>
            <div className="mission-subtitle">{currentContent.mission.subtitle}</div>
          </motion.div>

          <motion.div 
            className="mission-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {currentContent.mission.items.map((item, idx) => (
              <motion.div 
                key={idx}
                className="mission-card"
                variants={fadeInUp}
              >
                <h3 className="mission-card-title">{item.title}</h3>
                <p className="mission-card-text">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <motion.div 
            className="vision-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="vision-title" variants={fadeInUp}>
              {currentContent.vision.title}
            </motion.h2>

            <motion.div className="vision-points" variants={staggerContainer}>
              {currentContent.vision.points.map((point, idx) => (
                <motion.div 
                  key={idx}
                  className="vision-point"
                  variants={fadeInUp}
                >
                  <div className="vision-icon">
                    {idx === 0 ? '✨' : idx === 1 ? '🗣️' : '⚖️'}
                  </div>
                  <p>{point}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="vision-closing" variants={fadeInUp}>
              {currentContent.vision.closing}
            </motion.div>
          </motion.div>
        </div>

        {/* Disclaimer Section */}
        <div className="disclaimer-section">
          <motion.div 
            className="disclaimer-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="disclaimer-title">
              <AlertCircle size={32} />
              {currentContent.disclaimer.title}
            </h2>
            <p className="disclaimer-text">{currentContent.disclaimer.text}</p>
          </motion.div>
        </div>
      </div>

      {/* Language Bot */}
      <div className="language-bot">
        <div className="bot-speech-bubble" key={showLanguageSelect ? "select" : botMessageIndex}>
          <p>
            {showLanguageSelect
              ? "Hello! Would you like to view this page in English or Hindi? / नमस्ते! क्या आप यह पेज अंग्रेजी या हिंदी में देखना चाहेंगे?"
              : currentContent.botMessages[botMessageIndex]}
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