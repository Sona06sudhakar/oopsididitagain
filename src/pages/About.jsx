import React, { useState, useEffect } from 'react';
import { Heart, Shield, Users, BookOpen, Target, Eye, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const [language, setLanguage] = useState(null);
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [botMessageIndex, setBotMessageIndex] = useState(0);

  const content = {
    english: {
      hero: {
        title: "About Nari Suraksha Saathi",
        tagline: "Empowering Women Through Technology & Awareness"
      },
      intro: {
        title: "A Companion for Safety & Dignity",
        text: "Nari Suraksha Saathi (Women's Safety Companion) is a small yet powerful step toward empowering women — especially those in India's informal sector — with awareness, confidence, and access to help when they need it most. Every woman deserves to feel safe, heard, and informed. Unfortunately, many incidents of harassment and unsafe behavior go unreported due to fear, lack of support, or not knowing what to do next. Our mission is to bridge this gap with a simple, mobile-friendly tool that provides clear guidance, support connections, and a sense of protection — all in one place."
      },
      purpose: {
        title: "Our Purpose",
        subtitle: "Why We Built This Platform",
        points: [
          "Help women understand their legal rights under the POSH Act (Prevention of Sexual Harassment at Workplace, 2013) in easy, everyday language.",
          "Provide discreet reporting simulation to show how one can share their experience safely and confidentially — without fear or exposure.",
          "Offer reliable information and contacts of NGOs, legal aid groups, and women's organizations that support those facing harassment or workplace abuse.",
          "Share practical safety tips for everyday life — especially for women working in homes, markets, factories, and informal environments."
        ]
      },
      help: {
        title: "How We Aim to Help",
        subtitle: "Our goal is not only to create an app — but to create a sense of trust and empowerment",
        items: [
          {
            icon: "🗣️",
            title: "Encourage Speaking Up",
            description: "Help women recognize what harassment looks like and encourage them to speak up without fear."
          },
          {
            icon: "📞",
            title: "Easy Access to Help",
            description: "Provide quick access to verified support centers via simulated 'Call' and 'WhatsApp' links."
          },
          {
            icon: "📚",
            title: "Spread Awareness",
            description: "Share information about basic labor rights, safety measures, and self-protection strategies."
          },
          {
            icon: "💻",
            title: "Build Digital Confidence",
            description: "Keep everything clear, visual, and accessible for women with minimal tech exposure."
          }
        ]
      },
      matters: {
        title: "Why It Matters",
        text: "Many women in India's informal sector — such as domestic workers, daily wage earners, or helpers — lack the awareness or resources to understand their rights or report unsafe conditions. We believe technology can be a companion, not a barrier. Even a simple, offline-friendly web app can show what safety and awareness tools could look like, paving the way for larger, real-world solutions."
      },
      vision: {
        title: "Our Vision",
        subtitle: "A society where every woman is safe, heard, and empowered",
        points: [
          "Every woman knows her rights",
          "No one stays silent out of fear",
          "Safety and dignity at work are seen as basic human rights, not privileges"
        ],
        closing: "Nari Suraksha Saathi is our small step toward that vision — combining compassion, simplicity, and technology to make a meaningful impact."
      },
      disclaimer: {
        title: "Disclaimer",
        text: "This platform is a prototype (MVP) created to demonstrate the concept of discreet reporting and legal awareness. All data, forms, and contacts shown are simulated for educational purposes only. No actual reports are stored, shared, or transmitted. Our intention is purely to educate, inspire, and empower."
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
        title: "नारी सुरक्षा साथी के बारे में",
        tagline: "प्रौद्योगिकी और जागरूकता के माध्यम से महिलाओं को सशक्त बनाना"
      },
      intro: {
        title: "सुरक्षा और सम्मान के लिए एक साथी",
        text: "नारी सुरक्षा साथी महिलाओं को सशक्त बनाने की दिशा में एक छोटा लेकिन शक्तिशाली कदम है - विशेष रूप से भारत के अनौपचारिक क्षेत्र में काम करने वाली महिलाओं को जागरूकता, आत्मविश्वास और मदद तक पहुंच प्रदान करना। हर महिला सुरक्षित, सुनी हुई और सूचित महसूस करने की हकदार है। दुर्भाग्य से, कई उत्पीड़न की घटनाएं डर, समर्थन की कमी या आगे क्या करना है यह न जानने के कारण रिपोर्ट नहीं की जाती हैं। हमारा मिशन एक सरल, मोबाइल-फ्रेंडली टूल के साथ इस अंतर को पाटना है जो स्पष्ट मार्गदर्शन, समर्थन कनेक्शन और सुरक्षा की भावना प्रदान करता है।"
      },
      purpose: {
        title: "हमारा उद्देश्य",
        subtitle: "हमने यह प्लेटफ़ॉर्म क्यों बनाया",
        points: [
          "महिलाओं को पोश अधिनियम के तहत उनके कानूनी अधिकारों को सरल, रोजमर्रा की भाषा में समझने में मदद करना।",
          "गोपनीय रिपोर्टिंग सिमुलेशन प्रदान करना ताकि दिखाया जा सके कि कोई अपने अनुभव को सुरक्षित और गोपनीय रूप से कैसे साझा कर सकता है।",
          "एनजीओ, कानूनी सहायता समूहों और महिला संगठनों की विश्वसनीय जानकारी और संपर्क प्रदान करना।",
          "रोजमर्रा की जिंदगी के लिए व्यावहारिक सुरक्षा युक्तियां साझा करना - विशेष रूप से घरों, बाजारों, कारखानों में काम करने वाली महिलाओं के लिए।"
        ]
      },
      help: {
        title: "हम कैसे मदद करना चाहते हैं",
        subtitle: "हमारा लक्ष्य केवल एक ऐप बनाना नहीं है - बल्कि विश्वास और सशक्तिकरण की भावना पैदा करना है",
        items: [
          {
            icon: "🗣️",
            title: "बोलने के लिए प्रोत्साहित करें",
            description: "महिलाओं को यह पहचानने में मदद करें कि उत्पीड़न क्या दिखता है और उन्हें डर के बिना बोलने के लिए प्रोत्साहित करें।"
          },
          {
            icon: "📞",
            title: "मदद तक आसान पहुंच",
            description: "सिमुलेटेड 'कॉल' और 'व्हाट्सएप' लिंक के माध्यम से सत्यापित सहायता केंद्रों तक त्वरित पहुंच प्रदान करें।"
          },
          {
            icon: "📚",
            title: "जागरूकता फैलाएं",
            description: "बुनियादी श्रम अधिकारों, सुरक्षा उपायों और आत्म-सुरक्षा रणनीतियों के बारे में जानकारी साझा करें।"
          },
          {
            icon: "💻",
            title: "डिजिटल आत्मविश्वास बनाएं",
            description: "न्यूनतम तकनीकी जोखिम वाली महिलाओं के लिए सब कुछ स्पष्ट, दृश्य और सुलभ रखें।"
          }
        ]
      },
      matters: {
        title: "यह क्यों महत्वपूर्ण है",
        text: "भारत के अनौपचारिक क्षेत्र में कई महिलाएं - जैसे घरेलू कामगार, दिहाड़ी मजदूर - अपने अधिकारों को समझने या असुरक्षित परिस्थितियों की रिपोर्ट करने के लिए जागरूकता या संसाधनों की कमी रखती हैं। हम मानते हैं कि प्रौद्योगिकी एक साथी हो सकती है, बाधा नहीं। यहां तक कि एक सरल, ऑफ़लाइन-फ्रेंडली वेब ऐप भी दिखा सकता है कि सुरक्षा और जागरूकता उपकरण कैसे दिख सकते हैं।"
      },
      vision: {
        title: "हमारी दृष्टि",
        subtitle: "एक ऐसा समाज जहाँ हर महिला सुरक्षित, सुनी हुई और सशक्त हो",
        points: [
          "हर महिला अपने अधिकारों को जानती है",
          "कोई भी डर से चुप नहीं रहता",
          "काम पर सुरक्षा और सम्मान को बुनियादी मानव अधिकार के रूप में देखा जाता है, विशेषाधिकार के रूप में नहीं"
        ],
        closing: "नारी सुरक्षा साथी उस दृष्टि की ओर हमारा छोटा कदम है - करुणा, सरलता और प्रौद्योगिकी को मिलाकर एक सार्थक प्रभाव बनाना।"
      },
      disclaimer: {
        title: "अस्वीकरण",
        text: "यह प्लेटफ़ॉर्म एक प्रोटोटाइप (MVP) है जो विवेकपूर्ण रिपोर्टिंग और कानूनी जागरूकता की अवधारणा को प्रदर्शित करने के लिए बनाया गया है। दिखाए गए सभी डेटा, फॉर्म और संपर्क केवल शैक्षिक उद्देश्यों के लिए सिमुलेटेड हैं। कोई भी वास्तविक रिपोर्ट संग्रहीत, साझा या प्रसारित नहीं की जाती है। हमारा इरादा विशुद्ध रूप से शिक्षित करना, प्रेरित करना और सशक्त बनाना है।"
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
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%);
        }

        /* Hero Section */
        .about-hero {
          padding: 6rem 5%;
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .about-hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .about-tagline {
          font-size: 1.5rem;
          color: #ec4899;
          font-weight: 500;
        }

        /* Intro Section */
        .intro-section {
          padding: 4rem 5%;
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .intro-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .intro-section p {
          font-size: 1.1rem;
          color: #6b7280;
          line-height: 1.8;
          text-align: justify;
        }

        /* Purpose Section */
        .purpose-section {
          padding: 6rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ec4899;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #6b7280;
        }

        .purpose-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .purpose-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-left: 5px solid #9333ea;
          transition: transform 0.3s ease;
        }

        .purpose-card:hover {
          transform: translateY(-5px);
        }

        .purpose-card p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.8;
        }

        /* Help Section */
        .help-section {
          padding: 6rem 5%;
          background: linear-gradient(135deg, #fce7f3, #fef3c7);
        }

        .help-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .help-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .help-card:nth-child(1) {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
        }

        .help-card:nth-child(2) {
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
        }

        .help-card:nth-child(3) {
          background: linear-gradient(135deg, #ddd6fe, #c4b5fd);
        }

        .help-card:nth-child(4) {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        }

        .help-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        .help-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .help-card p {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.6;
        }

        /* Matters Section */
        .matters-section {
          padding: 6rem 5%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .matters-content {
          background: white;
          padding: 4rem;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .matters-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 2rem;
        }

        .matters-content p {
          font-size: 1.1rem;
          color: #6b7280;
          line-height: 1.8;
          text-align: justify;
        }

        /* Vision Section */
        .vision-section {
          padding: 6rem 5%;
          background: linear-gradient(90deg, #ec4899, #9333ea);
          color: white;
        }

        .vision-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .vision-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .vision-content .section-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
        }

        .vision-points {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .vision-point {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .vision-point-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .vision-point p {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .vision-closing {
          font-size: 1.2rem;
          line-height: 1.8;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 15px;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        /* Disclaimer Section */
        .disclaimer-section {
          padding: 4rem 5%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .disclaimer-content {
          background: linear-gradient(135deg, #fef3c7, #fed7aa);
          padding: 3rem;
          border-radius: 20px;
          border: 3px solid #f59e0b;
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.2);
        }

        .disclaimer-content h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #92400e;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .disclaimer-content p {
          font-size: 1rem;
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

        /* Responsive */
        @media (max-width: 1024px) {
          .purpose-grid,
          .help-grid {
            grid-template-columns: 1fr;
          }

          .vision-points {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }

          .about-tagline {
            font-size: 1.2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .intro-section,
          .matters-content,
          .disclaimer-content {
            padding: 2rem;
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
          className="about-hero"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>{currentContent.hero.title}</motion.h1>
          <motion.p className="about-tagline" variants={fadeInUp}>
            {currentContent.hero.tagline}
          </motion.p>
        </motion.div>

        {/* Intro Section */}
        <motion.div 
          className="intro-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{currentContent.intro.title}</h2>
          <p>{currentContent.intro.text}</p>
        </motion.div>

        {/* Purpose Section */}
        <div className="purpose-section">
          <div className="section-header">
            <h2 className="section-title">{currentContent.purpose.title}</h2>
            <p className="section-subtitle">{currentContent.purpose.subtitle}</p>
          </div>

          <motion.div 
            className="purpose-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {currentContent.purpose.points.map((point, idx) => (
              <motion.div 
                key={idx}
                className="purpose-card"
                variants={fadeInUp}
              >
                <p>{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* How We Help Section */}
        <div className="help-section">
          <div className="section-header">
            <h2 className="section-title">{currentContent.help.title}</h2>
            <p className="section-subtitle">{currentContent.help.subtitle}</p>
          </div>

          <motion.div 
            className="help-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {currentContent.help.items.map((item, idx) => (
              <motion.div 
                key={idx}
                className="help-card"
                variants={fadeInUp}
              >
                <div className="help-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why It Matters Section */}
        <div className="matters-section">
          <motion.div 
            className="matters-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{currentContent.matters.title}</h2>
            <p>{currentContent.matters.text}</p>
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <motion.div 
            className="vision-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>{currentContent.vision.title}</motion.h2>
            <motion.p className="section-subtitle" variants={fadeInUp}>
              {currentContent.vision.subtitle}
            </motion.p>

            <motion.div className="vision-points" variants={staggerContainer}>
              {currentContent.vision.points.map((point, idx) => (
                <motion.div 
                  key={idx}
                  className="vision-point"
                  variants={fadeInUp}
                >
                  <div className="vision-point-icon">
                    {idx === 0 ? '✨' : idx === 1 ? '🗣️' : '⚖️'}
                  </div>
                  <p>{point}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p className="vision-closing" variants={fadeInUp}>
              {currentContent.vision.closing}
            </motion.p>
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
            <h2>
              <AlertCircle size={32} />
              {currentContent.disclaimer.title}
            </h2>
            <p>{currentContent.disclaimer.text}</p>
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