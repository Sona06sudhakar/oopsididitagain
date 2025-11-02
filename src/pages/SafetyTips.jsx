import React, { useState, useEffect } from 'react';

import { Shield, Phone, MapPin, Camera, Users, AlertTriangle, Clock, MessageCircle, Bell, Navigation, Eye, Home, Briefcase, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SafetyTips() {
  const [language, setLanguage] = useState(null);
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [botMessageIndex, setBotMessageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const content = {
    english: {
      categories: [
        { id: 'all', label: 'All Tips', icon: Shield },
        { id: 'workplace', label: 'Workplace', icon: Briefcase },
        { id: 'travel', label: 'Travel', icon: Navigation },
        { id: 'emergency', label: 'Emergency', icon: AlertTriangle }
      ],
      botMessages: [
        "Hello! I'm here to help you navigate this platform safely.",
        "Remember, you have the right to a safe workplace.",
        "Need help? I can guide you to the right resources.",
        "Your safety and wellbeing are our top priority.",
        "Don't hesitate to report any incidents - you're not alone."
      ]
    },
    hindi: {
      categories: [
        { id: 'all', label: 'सभी सुझाव', icon: Shield },
        { id: 'workplace', label: 'कार्यस्थल', icon: Briefcase },
        { id: 'travel', label: 'यात्रा', icon: Navigation },
        { id: 'emergency', label: 'आपातकालीन', icon: AlertTriangle }
      ],
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
  const categories = currentContent.categories;

  const translations = {
    english: {
      heroTag: "🛡️ Your Safety Guide",
      heroTitle1: "Your Safety Is",
      heroTitle2: "What Makes You",
      heroTitle3: "Empowered",
      heroSubtitle: "Comprehensive safety tips and guidelines designed specifically for women workers in India. Stay informed, stay safe, and work with confidence knowing your rights and safety measures.",
      ctaButton: "Explore Safety Tips",
      welcomeTitle: "Welcome To Your Safety Hub",
      welcomeText: "Every woman deserves to work in a safe and secure environment. These safety tips are carefully curated based on Indian workplace contexts, legal requirements, and real-world scenarios. From workplace harassment prevention to travel safety, we cover everything you need to know to protect yourself.",
      sectionTitle: "Essential Safety Guidelines",
      sectionSubtitle: "Choose a category to filter tips, or view all comprehensive safety guidelines",
      transformTitle: "We Can Help Empower You",
      transformSubtitle: "Access resources and support designed to keep you safe and informed",
      expertiseTitle: "Building Our Safety Expertise",
      expertiseText1: "Our safety guidelines are developed in consultation with legal experts, women's rights organizations, and experienced workers across India. We understand the unique challenges faced by women in different sectors and regions.",
      expertiseText2: "From construction sites to corporate offices, from urban centers to rural areas - we provide contextual safety advice that works in real-world situations. Your safety is not just our concern, it's our mission.",
      learnMore: "Learn More About Us",
      stats: [
        { number: '1091', label: 'Women Helpline', description: '24/7 Support' },
        { number: '181', label: 'One Stop Centre', description: 'Integrated Support' },
        { number: '100', label: 'Police Emergency', description: 'Immediate Help' }
      ],
      transformCards: [
        {
          icon: "🎓",
          title: "Safety Training",
          desc: "Free workshops and resources on self-defense and workplace safety"
        },
        {
          icon: "📱",
          title: "24/7 Helpline",
          desc: "Round-the-clock support through dedicated women's helplines"
        },
        {
          icon: "⚖️",
          title: "Legal Support",
          desc: "Expert guidance on POSH Act and your legal rights"
        },
        {
          icon: "🤝",
          title: "Community",
          desc: "Connect with other women workers and share experiences"
        }
      ],
      tips: [
        {
          category: 'workplace',
          title: 'Inform Before Visiting',
          description: 'Always inform a family member, friend, or colleague before visiting a new workplace or meeting location.',
          icon: MessageCircle,
          color: '#ec4899'
        },
        {
          category: 'emergency',
          title: 'Emergency Contacts Ready',
          description: 'Keep emergency contacts saved on speed dial. Include police (100), women helpline (1091), and trusted contacts.',
          icon: Phone,
          color: '#f59e0b'
        },
        {
          category: 'workplace',
          title: 'Avoid Isolated Areas',
          description: 'Try to work in groups or well-populated areas. Avoid isolated places, especially during early morning or late evening.',
          icon: Users,
          color: '#9333ea'
        },
        {
          category: 'emergency',
          title: 'Carry Safety Devices',
          description: 'Always carry a whistle, pepper spray (legal in India), or a small personal safety alarm that can alert others.',
          icon: Bell,
          color: '#ec4899'
        },
        {
          category: 'workplace',
          title: 'Trust Your Instincts',
          description: 'If a situation feels uncomfortable or unsafe, trust your gut feeling and leave immediately. Your safety comes first.',
          icon: Heart,
          color: '#f59e0b'
        },
        {
          category: 'emergency',
          title: 'Document Evidence',
          description: 'If safe, take photos or videos of harassment, note time, date, and location. Save messages or emails as evidence.',
          icon: Camera,
          color: '#9333ea'
        },
        {
          category: 'travel',
          title: 'Share Live Location',
          description: 'Use WhatsApp, Google Maps, or other apps to share your live location with trusted contacts when traveling for work.',
          icon: MapPin,
          color: '#ec4899'
        },
        {
          category: 'workplace',
          title: 'Know Your Rights',
          description: 'Familiarize yourself with POSH Act and your workplace policies. Every organization with 10+ employees must have an ICC.',
          icon: Shield,
          color: '#f59e0b'
        },
        {
          category: 'travel',
          title: 'Use Verified Transport',
          description: 'Use official company transport or verified cab services. Share vehicle details and driver info with someone you trust.',
          icon: Navigation,
          color: '#9333ea'
        },
        {
          category: 'workplace',
          title: 'Maintain Professional Boundaries',
          description: 'Keep communication professional. Avoid sharing personal details unnecessarily with colleagues or clients.',
          icon: Eye,
          color: '#ec4899'
        },
        {
          category: 'emergency',
          title: 'Learn Basic Self-Defense',
          description: 'Attend self-defense workshops offered by local police or women\'s organizations. Knowledge is empowerment.',
          icon: Shield,
          color: '#f59e0b'
        },
        {
          category: 'workplace',
          title: 'Report Immediately',
          description: 'Report any harassment to your ICC or supervisor within 3 months. Don\'t suffer in silence - speak up.',
          icon: AlertTriangle,
          color: '#9333ea'
        }
      ]
    },
    hindi: {
      heroTag: "🛡️ आपकी सुरक्षा गाइड",
      heroTitle1: "आपकी सुरक्षा ही",
      heroTitle2: "आपको बनाती है",
      heroTitle3: "सशक्त",
      heroSubtitle: "भारत में महिला कर्मचारियों के लिए विशेष रूप से डिज़ाइन किए गए व्यापक सुरक्षा सुझाव और दिशानिर्देश। सूचित रहें, सुरक्षित रहें और अपने अधिकारों और सुरक्षा उपायों को जानते हुए आत्मविश्वास के साथ काम करें।",
      ctaButton: "सुरक्षा सुझाव देखें",
      welcomeTitle: "आपके सुरक्षा केंद्र में आपका स्वागत है",
      welcomeText: "हर महिला एक सुरक्षित वातावरण में काम करने की हकदार है। ये सुरक्षा सुझाव भारतीय कार्यस्थल संदर्भों, कानूनी आवश्यकताओं और वास्तविक परिदृश्यों के आधार पर सावधानीपूर्वक तैयार किए गए हैं। कार्यस्थल उत्पीड़न रोकथाम से लेकर यात्रा सुरक्षा तक, हम आपकी सुरक्षा के लिए आवश्यक सब कुछ कवर करते हैं।",
      sectionTitle: "आवश्यक सुरक्षा दिशानिर्देश",
      sectionSubtitle: "सुझाव फ़िल्टर करने के लिए एक श्रेणी चुनें, या सभी व्यापक सुरक्षा दिशानिर्देश देखें",
      transformTitle: "हम आपको सशक्त बनाने में मदद कर सकते हैं",
      transformSubtitle: "आपको सुरक्षित और सूचित रखने के लिए डिज़ाइन किए गए संसाधनों और समर्थन तक पहुंचें",
      expertiseTitle: "हमारी सुरक्षा विशेषज्ञता का निर्माण",
      expertiseText1: "हमारे सुरक्षा दिशानिर्देश भारत भर में कानूनी विशेषज्ञों, महिला अधिकार संगठनों और अनुभवी कर्मचारियों के परामर्श से विकसित किए गए हैं। हम विभिन्न क्षेत्रों और क्षेत्रों में महिलाओं के सामने आने वाली अनूठी चुनौतियों को समझते हैं।",
      expertiseText2: "निर्माण स्थलों से लेकर कॉर्पोरेट कार्यालयों तक, शहरी केंद्रों से लेकर ग्रामीण क्षेत्रों तक - हम संदर्भात्मक सुरक्षा सलाह प्रदान करते हैं जो वास्तविक दुनिया की स्थितियों में काम करती है। आपकी सुरक्षा केवल हमारी चिंता नहीं है, यह हमारा मिशन है।",
      learnMore: "हमारे बारे में और जानें",
      stats: [
        { number: '1091', label: 'महिला हेल्पलाइन', description: '24/7 सहायता' },
        { number: '181', label: 'वन स्टॉप सेंटर', description: 'एकीकृत सहायता' },
        { number: '100', label: 'पुलिस आपातकालीन', description: 'तत्काल मदद' }
      ],
      transformCards: [
        {
          icon: "🎓",
          title: "सुरक्षा प्रशिक्षण",
          desc: "आत्मरक्षा और कार्यस्थल सुरक्षा पर मुफ्त कार्यशालाएं और संसाधन"
        },
        {
          icon: "📱",
          title: "24/7 हेल्पलाइन",
          desc: "समर्पित महिला हेल्पलाइनों के माध्यम से चौबीसों घंटे सहायता"
        },
        {
          icon: "⚖️",
          title: "कानूनी सहायता",
          desc: "POSH अधिनियम और आपके कानूनी अधिकारों पर विशेषज्ञ मार्गदर्शन"
        },
        {
          icon: "🤝",
          title: "समुदाय",
          desc: "अन्य महिला कर्मचारियों से जुड़ें और अनुभव साझा करें"
        }
      ],
      tips: [
        {
          category: 'workplace',
          title: 'जाने से पहले सूचित करें',
          description: 'किसी नए कार्यस्थल या बैठक स्थान पर जाने से पहले हमेशा परिवार के सदस्य, मित्र या सहकर्मी को सूचित करें।',
          icon: MessageCircle,
          color: '#ec4899'
        },
        {
          category: 'emergency',
          title: 'आपातकालीन संपर्क तैयार रखें',
          description: 'आपातकालीन संपर्क स्पीड डायल पर सहेजें। पुलिस (100), महिला हेल्पलाइन (1091), और विश्वसनीय संपर्क शामिल करें।',
          icon: Phone,
          color: '#f59e0b'
        },
        {
          category: 'workplace',
          title: 'अलग-थलग क्षेत्रों से बचें',
          description: 'समूहों में या जनसंख्या वाले क्षेत्रों में काम करने का प्रयास करें। सुबह जल्दी या देर शाम अलग-थलग स्थानों से बचें।',
          icon: Users,
          color: '#9333ea'
        },
        {
          category: 'emergency',
          title: 'सुरक्षा उपकरण साथ रखें',
          description: 'हमेशा एक सीटी, मिर्च स्प्रे (भारत में कानूनी), या एक छोटा व्यक्तिगत सुरक्षा अलार्म साथ रखें।',
          icon: Bell,
          color: '#ec4899'
        },
        {
          category: 'workplace',
          title: 'अपनी प्रवृत्ति पर भरोसा करें',
          description: 'यदि कोई स्थिति असहज या असुरक्षित महसूस होती है, तो अपनी आंतरिक भावना पर भरोसा करें और तुरंत चले जाएं।',
          icon: Heart,
          color: '#f59e0b'
        },
        {
          category: 'emergency',
          title: 'साक्ष्य दस्तावेज़ बनाएं',
          description: 'यदि सुरक्षित है, तो उत्पीड़न की फोटो या वीडियो लें, समय, तारीख और स्थान नोट करें।',
          icon: Camera,
          color: '#9333ea'
        },
        {
          category: 'travel',
          title: 'लाइव लोकेशन साझा करें',
          description: 'काम के लिए यात्रा करते समय WhatsApp, Google Maps या अन्य ऐप का उपयोग करके अपना लाइव स्थान साझा करें।',
          icon: MapPin,
          color: '#ec4899'
        },
        {
          category: 'workplace',
          title: 'अपने अधिकार जानें',
          description: 'POSH अधिनियम और अपनी कार्यस्थल नीतियों से परिचित हों। 10+ कर्मचारियों वाले हर संगठन में ICC होना चाहिए।',
          icon: Shield,
          color: '#f59e0b'
        },
        {
          category: 'travel',
          title: 'सत्यापित परिवहन का उपयोग करें',
          description: 'आधिकारिक कंपनी परिवहन या सत्यापित कैब सेवाओं का उपयोग करें। वाहन विवरण और ड्राइवर जानकारी साझा करें।',
          icon: Navigation,
          color: '#9333ea'
        },
        {
          category: 'workplace',
          title: 'पेशेवर सीमाएं बनाए रखें',
          description: 'संचार को पेशेवर रखें। सहकर्मियों या ग्राहकों के साथ अनावश्यक रूप से व्यक्तिगत विवरण साझा करने से बचें।',
          icon: Eye,
          color: '#ec4899'
        },
        {
          category: 'emergency',
          title: 'बुनियादी आत्मरक्षा सीखें',
          description: 'स्थानीय पुलिस या महिला संगठनों द्वारा दी जाने वाली आत्मरक्षा कार्यशालाओं में भाग लें।',
          icon: Shield,
          color: '#f59e0b'
        },
        {
          category: 'workplace',
          title: 'तुरंत रिपोर्ट करें',
          description: '3 महीने के भीतर अपने ICC या पर्यवेक्षक को किसी भी उत्पीड़न की रिपोर्ट करें। चुप न रहें - बोलें।',
          icon: AlertTriangle,
          color: '#9333ea'
        }
      ]
    }
  };

  const currentLang = language ? translations[language] : translations.english;
  const tips = currentLang.tips;

  const filteredTips = activeCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === activeCategory);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
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

        .tips-page {
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

        .hero-content {
          padding: 2rem 0;
        }

        .hero-tag {
          display: inline-block;
          background: linear-gradient(90deg, #ec4899, #9333ea);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-title {
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
          font-size: 1.1rem;
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
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-main-image {
          width: 400px;
          height: 500px;
          object-fit: cover;
          border-radius: 200px 200px 50px 50px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          border: 10px solid white;
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
        }

        .floating-decoration {
          position: absolute;
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          font-size: 1.8rem;
        }

        .decoration-1 {
          top: 10%;
          left: -5%;
        }

        .decoration-2 {
          bottom: 15%;
          right: -5%;
        }

        /* Welcome Section */
        .welcome-section {
          background: linear-gradient(135deg, #fce7f3, #fef3c7);
          padding: 6rem 5%;
        }

        .welcome-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .welcome-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 200px 200px 50px 50px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          border: 10px solid white;
          background: linear-gradient(135deg, #fbcfe8, #fce7f3);
        }

        .welcome-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1.5rem;
        }

        .welcome-text p {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .stat-box {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #ec4899;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: #581c87;
          margin-bottom: 0.25rem;
        }

        .stat-desc {
          font-size: 0.85rem;
          color: #6b7280;
        }

        /* Categories Section */
        .categories-section {
          padding: 4rem 5%;
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 3rem;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .category-btn {
          background: white;
          border: 2px solid #e5e7eb;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .category-btn:hover {
          border-color: #ec4899;
          color: #ec4899;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.2);
        }

        .category-btn.active {
          background: linear-gradient(90deg, #ec4899, #9333ea);
          color: white;
          border-color: transparent;
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.3);
        }

        /* Tips Grid */
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .tip-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tip-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #ec4899, #9333ea);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .tip-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .tip-card:hover::before {
          transform: scaleX(1);
        }

        .tip-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }

        .tip-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .tip-description {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.7;
        }

        /* Help Transform Section */
        .transform-section {
          background: white;
          padding: 6rem 5%;
          margin: 4rem 0;
        }

        .transform-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .transform-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .transform-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 4rem;
        }

        .transform-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .transform-card {
          background: linear-gradient(135deg, #faf5ff, #fce7f3);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .transform-card:hover {
          transform: translateY(-10px);
        }

        .transform-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .transform-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 0.75rem;
        }

        .transform-card-desc {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.6;
        }

        /* Expertise Section */
        .expertise-section {
          padding: 6rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .expertise-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .expertise-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #581c87;
          margin-bottom: 1.5rem;
        }

        .expertise-text p {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .expertise-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 200px 200px 50px 50px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          border: 10px solid white;
          background: linear-gradient(135deg, #fef3c7, #fed7aa);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section,
          .welcome-content,
          .expertise-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .transform-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-section,
          .welcome-section,
          .categories-section,
          .transform-section,
          .expertise-section {
            padding: 3rem 5%;
          }

          .hero-title {
            font-size: 2rem;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }

          .transform-grid {
            grid-template-columns: 1fr;
          }

          .hero-main-image,
          .welcome-image,
          .expertise-image {
            height: 400px;
          }
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
          line-height: 1.6;
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
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
      `}</style>

      <div className="tips-page">
        {/* Hero Section */}
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="hero-content"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-tag">{currentLang.heroTag}</div>
            <h1 className="hero-title">
              {currentLang.heroTitle1}<br />
              <span className="hero-highlight">{currentLang.heroTitle2}</span><br />
              {currentLang.heroTitle3}
            </h1>
            <p className="hero-subtitle">
              {currentLang.heroSubtitle}
            </p>
            <button className="cta-button">{currentLang.ctaButton}</button>
          </motion.div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img 
              src="/d4.jpg" 
              alt="Empowered Woman" 
              className="hero-main-image"
            />
            <motion.div 
              className="floating-decoration decoration-1"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🛡️
            </motion.div>
            <motion.div 
              className="floating-decoration decoration-2"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              💪
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Welcome Section */}
        <div className="welcome-section">
          <motion.div 
            className="welcome-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src="d2.jpg" 
              alt="Safe Workplace" 
              className="welcome-image"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            
            <motion.div 
              className="welcome-text"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>{currentLang.welcomeTitle}</h2>
              <p>
                {currentLang.welcomeText}
              </p>
              
              <div className="stats-row">
                {currentLang.stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    className="stat-box"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-desc">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Categories & Tips */}
        <div className="categories-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">{currentLang.sectionTitle}</h2>
            <p className="section-subtitle">
              {currentLang.sectionSubtitle}
            </p>

            <div className="category-filters">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <motion.button
                    key={cat.id}
                    className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="tips-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredTips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={idx}
                  className="tip-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div 
                    className="tip-icon" 
                    style={{ background: `linear-gradient(135deg, ${tip.color}, ${tip.color}dd)` }}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="tip-title">{tip.title}</h3>
                  <p className="tip-description">{tip.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Transform Section */}
        <div className="transform-section">
          <div className="transform-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="transform-title">{currentLang.transformTitle}</h2>
              <p className="transform-subtitle">
                {currentLang.transformSubtitle}
              </p>
            </motion.div>

            <motion.div 
              className="transform-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {currentLang.transformCards.map((card, idx) => (
                <motion.div key={idx} className="transform-card" variants={itemVariants}>
                  <div className="transform-icon">{card.icon}</div>
                  <h3 className="transform-card-title">{card.title}</h3>
                  <p className="transform-card-desc">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="expertise-section">
          <motion.div 
            className="expertise-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="expertise-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>{currentLang.expertiseTitle}</h2>
              <p>
                {currentLang.expertiseText1}
              </p>
              <p>
                {currentLang.expertiseText2}
              </p>
              <button className="cta-button">{currentLang.learnMore}</button>
            </motion.div>

            <motion.img 
              src="d3.jpg" 
              alt="Women Empowerment" 
              className="expertise-image"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
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