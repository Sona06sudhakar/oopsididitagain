import React, { useState, useEffect } from 'react';
import { Shield, Phone, AlertCircle, Users, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MyRights() {
  const [language, setLanguage] = useState(null);
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [botMessageIndex, setBotMessageIndex] = useState(0);

  const content = {
    english: {
      title: "Empowering",
      titleHighlight: "Women's Rights",
      subtitle: "Understanding Your Rights Under POSH Act",
      intro: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 provides comprehensive protection to women against sexual harassment at workplace. Know your rights, stay protected, and work with confidence.",
      ctaButton: "Learn More",
      sections: [
        {
          title: "What Constitutes Sexual Harassment?",
          icon: AlertCircle,
          points: [
            "Unwelcome physical contact and advances",
            "Demand or request for sexual favours",
            "Making sexually coloured remarks",
            "Showing pornography or explicit content",
            "Any other unwelcome physical, verbal or non-verbal conduct of sexual nature",
            "Creating a hostile or intimidating work environment"
          ]
        },
        {
          title: "Your Rights to Safety",
          icon: Shield,
          points: [
            "Right to work in a safe environment free from sexual harassment",
            "Right to file a complaint without fear of retaliation or victimization",
            "Right to confidentiality during the complaint process",
            "Right to be heard and present evidence",
            "Right to interim relief during the inquiry period",
            "Right to appeal against the decision of the Internal Committee"
          ]
        },
        {
          title: "How to Report Harassment",
          icon: FileText,
          points: [
            "File a written complaint to the Internal Complaints Committee (ICC)",
            "Complaint must be filed within 3 months of the incident (extendable to 6 months for valid reasons)",
            "ICC must complete inquiry within 90 days of filing complaint",
            "You can be accompanied by a person of your choice during proceedings",
            "Both parties have the right to be heard and present their case",
            "Committee's report must be sent to employer within 10 days of completing inquiry"
          ]
        },
        {
          title: "Internal Complaints Committee (ICC)",
          icon: Users,
          points: [
            "Every organization with 10+ employees must constitute an ICC",
            "ICC must have at least 4 members including a presiding officer (woman)",
            "At least 50% of ICC members should be women",
            "One member must be from an NGO or association working for women's rights",
            "ICC conducts confidential inquiries into complaints",
            "Committee has same powers as a civil court for investigation"
          ]
        }
      ],
      adventureTitle: "Choose Your Path to Justice",
      adventureSubtitle: "Every woman deserves to know her rights and have access to justice",
      adventures: [
        {
          icon: "📚",
          title: "Know Your Rights",
          description: "Understand the comprehensive protections provided under POSH Act and how they safeguard your workplace dignity."
        },
        {
          icon: "🛡️",
          title: "Report Safely",
          description: "Learn the step-by-step process to file complaints confidentially and without fear of retaliation."
        },
        {
          icon: "⚖️",
          title: "Seek Justice",
          description: "Access resources, helplines, and legal support to ensure your voice is heard and justice is served."
        }
      ],
      resourcesTitle: "Support & Resources",
      resourcesSubtitle: "We're here to help you navigate your rights",
      resources: [
        {
          icon: "📞",
          title: "24/7 Helplines",
          description: "Access immediate support through dedicated women's helplines available round the clock."
        },
        {
          icon: "📖",
          title: "Legal Guidance",
          description: "Get expert legal advice and understand your options for seeking justice and compensation."
        },
        {
          icon: "🤝",
          title: "Counseling Services",
          description: "Professional counseling and emotional support to help you through difficult times."
        }
      ],
      penalties: {
        title: "Penalties for Non-Compliance",
        points: [
          "Fine up to ₹50,000 for employers who fail to constitute ICC",
          "Cancellation of business license for repeated violations",
          "Disciplinary action against the harasser including termination",
          "Compensation to be paid to the victim"
        ]
      },
      contacts: {
        title: "Important Helplines",
        list: [
          { label: "Women Helpline", number: "1091", description: "24x7 support for women in distress" },
          { label: "Police Emergency", number: "100", description: "Immediate police assistance" },
          { label: "National Commission for Women", number: "7827-170-170", description: "Complaints and guidance" },
          { label: "One Stop Centre", number: "181", description: "Integrated support for women" }
        ]
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
      title: "सशक्त",
      titleHighlight: "महिला अधिकार",
      subtitle: "पोश अधिनियम के तहत अपने अधिकारों को समझें",
      intro: "कार्यस्थल पर महिलाओं का यौन उत्पीड़न (रोकथाम, निषेध और निवारण) अधिनियम, 2013 कार्यस्थल पर यौन उत्पीड़न के खिलाफ महिलाओं को व्यापक सुरक्षा प्रदान करता है। अपने अधिकारों को जानें, सुरक्षित रहें और आत्मविश्वास के साथ काम करें।",
      ctaButton: "और जानें",
      sections: [
        {
          title: "यौन उत्पीड़न क्या है?",
          icon: AlertCircle,
          points: [
            "अनचाहा शारीरिक संपर्क और प्रगति",
            "यौन सुविधा की मांग या अनुरोध",
            "यौन रंग की टिप्पणियां करना",
            "अश्लील सामग्री दिखाना",
            "यौन प्रकृति का कोई अन्य अनचाहा आचरण",
            "शत्रुतापूर्ण या डराने वाला कार्य वातावरण बनाना"
          ]
        },
        {
          title: "सुरक्षा के आपके अधिकार",
          icon: Shield,
          points: [
            "यौन उत्पीड़न मुक्त सुरक्षित वातावरण में काम करने का अधिकार",
            "प्रतिशोध के डर के बिना शिकायत दर्ज करने का अधिकार",
            "शिकायत प्रक्रिया के दौरान गोपनीयता का अधिकार",
            "सुने जाने और सबूत पेश करने का अधिकार",
            "जांच अवधि के दौरान अंतरिम राहत का अधिकार",
            "आंतरिक समिति के निर्णय के खिलाफ अपील करने का अधिकार"
          ]
        },
        {
          title: "उत्पीड़न की रिपोर्ट कैसे करें",
          icon: FileText,
          points: [
            "आंतरिक शिकायत समिति (ICC) को लिखित शिकायत दर्ज करें",
            "घटना के 3 महीने के भीतर शिकायत दर्ज करनी होगी",
            "ICC को शिकायत दर्ज करने के 90 दिनों में जांच पूरी करनी होगी",
            "आप कार्यवाही के दौरान अपनी पसंद के व्यक्ति के साथ हो सकते हैं",
            "दोनों पक्षों को सुने जाने और अपना पक्ष रखने का अधिकार है",
            "समिति की रिपोर्ट जांच पूरी होने के 10 दिनों में नियोक्ता को भेजी जानी चाहिए"
          ]
        },
        {
          title: "आंतरिक शिकायत समिति (ICC)",
          icon: Users,
          points: [
            "10+ कर्मचारियों वाले हर संगठन को ICC का गठन करना होगा",
            "ICC में एक अध्यक्ष (महिला) सहित कम से कम 4 सदस्य होने चाहिए",
            "कम से कम 50% ICC सदस्य महिलाएं होनी चाहिए",
            "एक सदस्य NGO या महिला अधिकारों के लिए काम करने वाली संस्था से होना चाहिए",
            "ICC शिकायतों की गोपनीय जांच करती है",
            "समिति के पास जांच के लिए सिविल कोर्ट जैसी शक्तियां हैं"
          ]
        }
      ],
      adventureTitle: "न्याय का अपना रास्ता चुनें",
      adventureSubtitle: "हर महिला को अपने अधिकार जानने और न्याय तक पहुंच का अधिकार है",
      adventures: [
        {
          icon: "📚",
          title: "अपने अधिकार जानें",
          description: "पोश अधिनियम के तहत प्रदान की गई व्यापक सुरक्षा को समझें और वे आपकी कार्यस्थल गरिमा की रक्षा कैसे करती हैं।"
        },
        {
          icon: "🛡️",
          title: "सुरक्षित रिपोर्ट करें",
          description: "गोपनीय रूप से और प्रतिशोध के डर के बिना शिकायत दर्ज करने की चरण-दर-चरण प्रक्रिया सीखें।"
        },
        {
          icon: "⚖️",
          title: "न्याय की तलाश करें",
          description: "संसाधनों, हेल्पलाइनों और कानूनी सहायता तक पहुंचें ताकि आपकी आवाज सुनी जाए और न्याय मिले।"
        }
      ],
      resourcesTitle: "सहायता और संसाधन",
      resourcesSubtitle: "हम आपके अधिकारों को नेविगेट करने में मदद के लिए यहां हैं",
      resources: [
        {
          icon: "📞",
          title: "24/7 हेल्पलाइन",
          description: "समर्पित महिला हेल्पलाइनों के माध्यम से तत्काल सहायता प्राप्त करें जो चौबीसों घंटे उपलब्ध हैं।"
        },
        {
          icon: "📖",
          title: "कानूनी मार्गदर्शन",
          description: "विशेषज्ञ कानूनी सलाह प्राप्त करें और न्याय और मुआवजे की मांग के लिए अपने विकल्पों को समझें।"
        },
        {
          icon: "🤝",
          title: "परामर्श सेवाएं",
          description: "कठिन समय में आपकी मदद के लिए पेशेवर परामर्श और भावनात्मक समर्थन।"
        }
      ],
      penalties: {
        title: "अनुपालन न करने पर दंड",
        points: [
          "ICC का गठन न करने पर नियोक्ता पर ₹50,000 तक का जुर्माना",
          "बार-बार उल्लंघन के लिए व्यापार लाइसेंस रद्द",
          "उत्पीड़क के खिलाफ समाप्ति सहित अनुशासनात्मक कार्रवाई",
          "पीड़ित को मुआवजा दिया जाना"
        ]
      },
      contacts: {
        title: "महत्वपूर्ण हेल्पलाइन",
        list: [
          { label: "महिला हेल्पलाइन", number: "1091", description: "संकट में महिलाओं के लिए 24x7 सहायता" },
          { label: "पुलिस आपातकालीन", number: "100", description: "तत्काल पुलिस सहायता" },
          { label: "राष्ट्रीय महिला आयोग", number: "7827-170-170", description: "शिकायत और मार्गदर्शन" },
          { label: "वन स्टॉप सेंटर", number: "181", description: "महिलाओं के लिए एकीकृत सहायता" }
        ]
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

        .rights-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%);
        }

        /* Hero Section */
        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 6rem 5%;
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #581c87;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .hero-highlight {
          color: #ec4899;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #9333ea;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .hero-text {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .cta-button {
          background: linear-gradient(90deg, #ec4899, #9333ea);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);
        }

        .hero-images {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-container {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .hero-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border: 8px solid white;
          transition: transform 0.3s ease;
        }

        .hero-img:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .hero-img:nth-child(1) {
          transform: rotate(-5deg);
          margin-top: 2rem;
        }

        .hero-img:nth-child(2) {
          transform: rotate(5deg);
          margin-bottom: 2rem;
        }

        /* About Section */
        .about-section {
          background: linear-gradient(135deg, #fce7f3, #fef3c7);
          padding: 6rem 5%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-image {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          border: 10px solid white;
        }

        .about-content {
          padding: 2rem;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1.5rem;
        }

        .about-text {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .learn-more-btn {
          background: linear-gradient(90deg, #10b981, #059669);
          color: white;
          border: none;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .learn-more-btn:hover {
          transform: translateY(-2px);
        }

        /* Adventure Section */
        .adventure-section {
          padding: 6rem 5%;
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .adventure-header {
          margin-bottom: 4rem;
        }

        .adventure-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ec4899;
          margin-bottom: 1rem;
        }

        .adventure-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
        }

        .adventure-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .adventure-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .adventure-card:nth-child(1) {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
        }

        .adventure-card:nth-child(2) {
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
        }

        .adventure-card:nth-child(3) {
          background: linear-gradient(135deg, #ddd6fe, #c4b5fd);
        }

        .adventure-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .adventure-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .adventure-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .adventure-card-desc {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.6;
        }

        /* Resources Section */
        .resources-section {
          background: linear-gradient(135deg, #faf5ff, #fce7f3);
          padding: 6rem 5%;
        }

        .resources-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .resources-info h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .resources-info p {
          font-size: 1.1rem;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .resource-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .resource-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .resource-icon {
          font-size: 2.5rem;
          min-width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ec4899, #9333ea);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(236, 72, 153, 0.3);
        }

        .resource-text h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 0.5rem;
        }

        .resource-text p {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        .resources-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          border: 10px solid white;
        }

        /* Detailed Sections */
        .detailed-sections {
          padding: 6rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 3rem;
          margin-bottom: 2.5rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #9333ea, #ec4899);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #581c87;
        }

        .points-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          list-style: none;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: #faf5ff;
          border-radius: 12px;
          border-left: 4px solid #9333ea;
        }

        .bullet {
          color: #9333ea;
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1;
        }

        .point-text {
          color: #374151;
          line-height: 1.6;
          flex: 1;
        }

        /* Penalties Card */
        .penalties-card {
          background: linear-gradient(135deg, #fef3c7, #fed7aa);
          border-radius: 20px;
          padding: 3rem;
          border: 3px solid #f59e0b;
          margin-bottom: 2.5rem;
        }

        /* Contacts Card */
        .contacts-card {
          background: linear-gradient(90deg, #ec4899, #9333ea);
          border-radius: 20px;
          padding: 3rem;
          color: white;
        }

        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .contact-item {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 1.75rem;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
        }

        .contact-label {
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .contact-number {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .contact-desc {
          font-size: 0.95rem;
          opacity: 0.95;
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
          .hero-section,
          .about-section,
          .resources-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .adventure-cards {
            grid-template-columns: 1fr;
          }

          .points-list {
            grid-template-columns: 1fr;
          }

          .contacts-grid {
            grid-template-columns: 1fr;
          }

          .hero-images {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .hero-section,
          .about-section,
          .detailed-sections,
          .adventure-section,
          .resources-section {
            padding: 3rem 5%;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .section-card {
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

      <div className="rights-page">
        {/* Hero Section */}
        <motion.div 
          className="hero-section"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="hero-content" variants={fadeInUp}>
            <h1>
              {currentContent.title}<br />
              <span className="hero-highlight">{currentContent.titleHighlight}</span>
            </h1>
            <p className="hero-subtitle">{currentContent.subtitle}</p>
            <p className="hero-text">{currentContent.intro}</p>
            <button className="cta-button">
              {currentContent.ctaButton}
              <ChevronRight size={20} />
            </button>
          </motion.div>

          <motion.div className="hero-images" variants={fadeInUp}>
            <div className="hero-image-container">
              <img 
                src="/down5.jpg" 
                alt="Empowered Woman" 
                className="hero-img"
              />
              <img 
                src="/down6.jpg" 
                alt="Professional Woman" 
                className="hero-img"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* About Owner Section */}
        <motion.div 
          className="about-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img 
            src="/down7.jpg" 
            alt="Understanding Rights" 
            className="about-image"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          
          <motion.div 
            className="about-content"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-title">{currentContent.sections[1].title}</h2>
            <p className="about-text">
              Every woman deserves to work in an environment free from harassment and discrimination. 
              The POSH Act ensures your safety, dignity, and right to justice. Understanding these rights 
              is the first step towards creating a safer workplace for everyone.
            </p>
            <button className="learn-more-btn">{currentContent.ctaButton}</button>
          </motion.div>
        </motion.div>

        {/* Choose Adventure Section */}
        <motion.div 
          className="adventure-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="adventure-header" variants={fadeInUp}>
            <h2 className="adventure-title">{currentContent.adventureTitle}</h2>
            <p className="adventure-subtitle">{currentContent.adventureSubtitle}</p>
          </motion.div>

          <motion.div className="adventure-cards" variants={staggerContainer}>
            {currentContent.adventures.map((adventure, idx) => (
              <motion.div 
                key={idx}
                className="adventure-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <span className="adventure-icon">{adventure.icon}</span>
                <h3 className="adventure-card-title">{adventure.title}</h3>
                <p className="adventure-card-desc">{adventure.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Resources Section */}
        <div className="resources-section">
          <motion.div 
            className="resources-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="resources-info" variants={fadeInUp}>
              <h2>{currentContent.resourcesTitle}</h2>
              <p>{currentContent.resourcesSubtitle}</p>
              
              <div className="resource-items">
                {currentContent.resources.map((resource, idx) => (
                  <motion.div 
                    key={idx}
                    className="resource-item"
                    variants={fadeInUp}
                  >
                    <div className="resource-icon">{resource.icon}</div>
                    <div className="resource-text">
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.img 
              src="d1.jpg" 
              alt="Support Resources" 
              className="resources-image"
              variants={fadeInUp}
            />
          </motion.div>
        </div>

        {/* Detailed Sections */}
        <div className="detailed-sections">
          {currentContent.sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div 
                key={idx}
                className="section-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="section-header">
                  <div className="section-icon">
                    <Icon size={28} />
                  </div>
                  <h2 className="section-title">{section.title}</h2>
                </div>
                <ul className="points-list">
                  {section.points.map((point, i) => (
                    <li key={i} className="point-item">
                      <span className="bullet">•</span>
                      <span className="point-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Penalties Card */}
          <motion.div 
            className="penalties-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-header">
              <div className="section-icon" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                <AlertCircle size={28} />
              </div>
              <h2 className="section-title" style={{color: '#92400e'}}>{currentContent.penalties.title}</h2>
            </div>
            <ul className="points-list">
              {currentContent.penalties.points.map((point, i) => (
                <li key={i} className="point-item" style={{background: '#fef3c7', borderLeftColor: '#f59e0b'}}>
                  <span className="bullet" style={{color: '#b45309'}}>•</span>
                  <span className="point-text" style={{color: '#78350f'}}>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacts Card */}
          <motion.div 
            className="contacts-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-header">
              <div className="section-icon" style={{background: 'rgba(255, 255, 255, 0.3)'}}>
                <Phone size={28} />
              </div>
              <h2 className="section-title" style={{color: 'white'}}>{currentContent.contacts.title}</h2>
            </div>
            <div className="contacts-grid">
              {currentContent.contacts.list.map((contact, i) => (
                <a 
                  key={i}
                  href={`tel:${contact.number}`}
                  className="contact-item"
                >
                  <div className="contact-label">{contact.label}</div>
                  <div className="contact-number">{contact.number}</div>
                  <div className="contact-desc">{contact.description}</div>
                </a>
              ))}
            </div>
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