import React, { useState, useEffect } from 'react';
import { Heart, Shield, Users, Sparkles, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stories() {
  const [language, setLanguage] = useState(null);
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [botMessageIndex, setBotMessageIndex] = useState(0);

  const content = {
    english: {
      hero: {
        subtitle: "VOICES OF COURAGE",
        title: "Inspiring Stories of Strength and Resilience",
        tagline: "Real Stories, Real Courage",
        description: "Every story shared here represents a brave woman who chose to speak up, seek help, and reclaim her dignity. These are not just stories—they are testaments to the power of courage, awareness, and collective action."
      },
      intro: {
        title: "Are You Feeling Scared? Confused? Unsure?",
        subtitle: "You're Not Alone",
        text: "Many women have walked this path before you. They felt the same fear, confusion, and doubt. But they found their voice, took action, and emerged stronger. Their stories are proof that change is possible—and that you deserve safety, respect, and justice. Let their courage inspire yours."
      },
      stories: [
        {
          name: "Meena",
          location: "Bengaluru",
          age: "40-year-old community worker",
          title: "Meena's Courage",
          emoji: "🌸",
          story: "Meena faced years of harassment from a local man who followed and intimidated her on her way home. For months, she chose silence—fearing disbelief and retaliation. One evening, she decided enough was enough. With help from a women's helpline and a local NGO, she filed a report and courageously pursued the case until justice was served.",
          impact: "Today, Meena helps other women recognize their right to safety and respect. Her story reminds us that speaking up may be hard, but it can break the cycle of fear for many others.",
          image: "/down7.jpg",
          hasImage: true
        },
        {
          name: "Anonymous",
          location: "Delhi",
          age: "Domestic worker",
          title: "The Voice Behind the Screen",
          emoji: "🌷",
          story: "A domestic worker in Delhi began receiving threatening and abusive messages from an unknown man who found her phone number online. She didn't know where to turn or whether anyone would take her seriously. With the support of a local shelter, she learned about online harassment laws and how to block, document, and report such behavior.",
          impact: "She now shares this knowledge with other women in her neighborhood, proving that awareness can turn fear into power—even when the harassment happens through a screen.",
          image: null,
          hasImage: false
        },
        {
          name: "Rekha",
          location: "Surat",
          age: "Garment factory worker",
          title: "Rekha's Second Chance",
          emoji: "🌼",
          story: "Rekha endured verbal and physical harassment from a supervisor for months. She stayed silent because her job supported her children. During a community awareness drive, she learned about the POSH Act and that all workplaces—even factories—must have a complaint committee.",
          impact: "With support from an NGO, Rekha filed a formal complaint and was reassigned to a safer department. Her story shows that laws mean little until women know they exist—and dare to use them.",
          image: "/down5.jpg",
          hasImage: true
        },
        {
          name: "Anonymous",
          location: "Mumbai",
          age: "32-year-old cleaner",
          title: "The Invisible Battle",
          emoji: "🌺",
          story: "For a 32-year-old cleaner in Mumbai, harassment wasn't a single event—it was everyday comments, unwanted touches, and mockery she had learned to ignore. When a co-worker finally spoke up, she realized silence had protected the abusers, not her dignity.",
          impact: "Together, the women decided to document incidents and approach a local women's group for help. Their collective strength forced management to take action. Sometimes, the loudest voice starts with just two people refusing to stay quiet.",
          image: null,
          hasImage: false
        },
        {
          name: "Leena",
          location: "College Student",
          age: "Young woman",
          title: "Leena's Digital Nightmare",
          emoji: "🌻",
          story: "Leena discovered fake social media accounts using her photos. Fear and shame kept her isolated for weeks, but a friend encouraged her to contact a cybercrime helpline. The police traced the perpetrator—someone from her own class.",
          impact: "While justice took time, Leena learned that no form of harassment is 'too small' to report. Her story highlights the importance of digital safety and the strength that comes from reclaiming one's identity online.",
          image: "/down6.jpg",
          hasImage: true
        },
        {
          name: "Anonymous",
          location: "Chennai",
          age: "Cook in private homes",
          title: "Strength in Silence – Then Voice",
          emoji: "🌹",
          story: "An anonymous woman from Chennai spent years working as a cook in several homes. One employer often cornered her with inappropriate remarks. She couldn't risk losing income, so she said nothing. One day, she attended a community meeting where volunteers discussed women's rights and safe reporting channels.",
          impact: "Hearing others speak gave her courage to tell her story—quietly, but powerfully. She now mentors young women joining domestic work, teaching them that self-worth and safety are not privileges—they are rights.",
          image: null,
          hasImage: false
        }
      ],
      cta: {
        title: "Your Story Matters Too",
        text: "If you're facing harassment or unsafe conditions, know that help is available. You don't have to face this alone. Reach out, speak up, and let us support you on your journey to safety and justice.",
        button: "Get Help Now"
      },
      botMessages: [
        "These stories show that courage comes in many forms.",
        "You are not alone—many have walked this path before you.",
        "Every woman deserves safety, dignity, and respect.",
        "Speaking up is the first step toward change.",
        "Your story matters, and we're here to support you."
      ]
    },
    hindi: {
      hero: {
        subtitle: "साहस की आवाजें",
        title: "शक्ति और लचीलेपन की प्रेरक कहानियां",
        tagline: "असली कहानियां, असली साहस",
        description: "यहां साझा की गई प्रत्येक कहानी एक बहादुर महिला का प्रतिनिधित्व करती है जिसने बोलने, मदद लेने और अपनी गरिमा को पुनः प्राप्त करने का विकल्प चुना। ये केवल कहानियां नहीं हैं—ये साहस, जागरूकता और सामूहिक कार्रवाई की शक्ति के प्रमाण हैं।"
      },
      intro: {
        title: "क्या आप डरी हुई हैं? भ्रमित हैं? अनिश्चित हैं?",
        subtitle: "आप अकेली नहीं हैं",
        text: "कई महिलाओं ने आपसे पहले यह रास्ता तय किया है। उन्होंने वही डर, भ्रम और संदेह महसूस किया। लेकिन उन्होंने अपनी आवाज पाई, कार्रवाई की, और मजबूत बनकर उभरीं। उनकी कहानियां सबूत हैं कि परिवर्तन संभव है—और आप सुरक्षा, सम्मान और न्याय की हकदार हैं।"
      },
      stories: [
        {
          name: "मीना",
          location: "बेंगलुरु",
          age: "40 वर्षीय सामुदायिक कार्यकर्ता",
          title: "मीना का साहस",
          emoji: "🌸",
          story: "मीना को एक स्थानीय व्यक्ति से वर्षों तक उत्पीड़न का सामना करना पड़ा जो उसका पीछा करता था और घर जाते समय धमकाता था। महीनों तक, उसने चुप्पी चुनी—अविश्वास और प्रतिशोध के डर से। एक शाम, उसने फैसला किया कि अब बहुत हो गया।",
          impact: "महिला हेल्पलाइन और स्थानीय एनजीओ की मदद से, उसने रिपोर्ट दर्ज की और साहसपूर्वक मामले को तब तक आगे बढ़ाया जब तक न्याय नहीं मिला। आज मीना अन्य महिलाओं को उनके सुरक्षा और सम्मान के अधिकार को पहचानने में मदद करती है।",
          image: "/down7.jpg",
          hasImage: true
        },
        {
          name: "अनाम",
          location: "दिल्ली",
          age: "घरेलू कामगार",
          title: "स्क्रीन के पीछे की आवाज",
          emoji: "🌷",
          story: "दिल्ली में एक घरेलू कामगार को एक अज्ञात व्यक्ति से धमकी भरे और अपमानजनक संदेश मिलने लगे जिसने ऑनलाइन उसका फोन नंबर पाया था। उसे नहीं पता था कि कहां जाना है या कोई उसे गंभीरता से लेगा भी या नहीं।",
          impact: "स्थानीय आश्रय के समर्थन से, उसने ऑनलाइन उत्पीड़न कानूनों के बारे में सीखा। अब वह अपने पड़ोस की अन्य महिलाओं के साथ यह ज्ञान साझा करती है, यह साबित करते हुए कि जागरूकता डर को शक्ति में बदल सकती है।",
          image: null,
          hasImage: false
        },
        {
          name: "रेखा",
          location: "सूरत",
          age: "गारमेंट फैक्ट्री कार्यकर्ता",
          title: "रेखा का दूसरा मौका",
          emoji: "🌼",
          story: "रेखा को महीनों तक एक पर्यवेक्षक से मौखिक और शारीरिक उत्पीड़न सहना पड़ा। वह चुप रही क्योंकि उसकी नौकरी उसके बच्चों का समर्थन करती थी। एक सामुदायिक जागरूकता अभियान के दौरान, उसने पोश अधिनियम के बारे में सीखा।",
          impact: "एनजीओ के समर्थन से, रेखा ने औपचारिक शिकायत दर्ज की और एक सुरक्षित विभाग में स्थानांतरित कर दी गई। उसकी कहानी दिखाती है कि कानून का मतलब तब तक कम है जब तक महिलाएं नहीं जानतीं कि वे मौजूद हैं।",
          image: "/down5.jpg",
          hasImage: true
        },
        {
          name: "अनाम",
          location: "मुंबई",
          age: "32 वर्षीय सफाई कर्मचारी",
          title: "अदृश्य लड़ाई",
          emoji: "🌺",
          story: "मुंबई में एक 32 वर्षीय सफाई कर्मचारी के लिए, उत्पीड़न एक घटना नहीं थी—यह रोजमर्रा की टिप्पणियां, अनचाहा स्पर्श और उपहास था जिसे उसने नजरअंदाज करना सीख लिया था।",
          impact: "जब एक सहकर्मी ने आखिरकार बोला, तो उसे एहसास हुआ कि चुप्पी ने दुर्व्यवहार करने वालों की रक्षा की थी, न कि उसकी गरिमा की। महिलाओं की सामूहिक शक्ति ने प्रबंधन को कार्रवाई करने के लिए मजबूर किया।",
          image: null,
          hasImage: false
        },
        {
          name: "लीना",
          location: "कॉलेज की छात्रा",
          age: "युवा महिला",
          title: "लीना का डिजिटल दुःस्वप्न",
          emoji: "🌻",
          story: "लीना ने अपनी तस्वीरों का उपयोग करने वाले नकली सोशल मीडिया खाते खोजे। डर और शर्म ने उसे हफ्तों तक अलग-थलग रखा, लेकिन एक दोस्त ने उसे साइबर क्राइम हेल्पलाइन से संपर्क करने के लिए प्रोत्साहित किया।",
          impact: "पुलिस ने अपराधी का पता लगाया—उसकी अपनी कक्षा का कोई। हालांकि न्याय में समय लगा, लीना ने सीखा कि उत्पीड़न का कोई भी रूप रिपोर्ट करने के लिए 'बहुत छोटा' नहीं है।",
          image: "/down6.jpg",
          hasImage: true
        },
        {
          name: "अनाम",
          location: "चेन्नई",
          age: "निजी घरों में रसोइया",
          title: "चुप्पी में शक्ति – फिर आवाज",
          emoji: "🌹",
          story: "चेन्नई की एक अनाम महिला ने कई घरों में रसोइया के रूप में काम करते हुए वर्षों बिताए। एक नियोक्ता अक्सर उसे अनुचित टिप्पणियों के साथ घेरता था। वह आय खोने का जोखिम नहीं उठा सकती थी, इसलिए उसने कुछ नहीं कहा।",
          impact: "एक दिन, उसने एक सामुदायिक बैठक में भाग लिया जहां स्वयंसेवकों ने महिलाओं के अधिकारों पर चर्चा की। दूसरों को बोलते हुए सुनकर उसे अपनी कहानी बताने का साहस मिला। अब वह युवा महिलाओं को सलाह देती है।",
          image: null,
          hasImage: false
        }
      ],
      cta: {
        title: "आपकी कहानी भी मायने रखती है",
        text: "यदि आप उत्पीड़न या असुरक्षित स्थितियों का सामना कर रही हैं, तो जान लें कि मदद उपलब्ध है। आपको इसका अकेले सामना नहीं करना है। संपर्क करें, बोलें, और हमें सुरक्षा और न्याय की आपकी यात्रा में आपका समर्थन करने दें।",
        button: "अभी मदद पाएं"
      },
      botMessages: [
        "ये कहानियां दिखाती हैं कि साहस कई रूपों में आता है।",
        "आप अकेली नहीं हैं—कई लोगों ने आपसे पहले यह रास्ता तय किया है।",
        "हर महिला सुरक्षा, गरिमा और सम्मान की हकदार है।",
        "बोलना परिवर्तन की ओर पहला कदम है।",
        "आपकी कहानी मायने रखती है, और हम आपका समर्थन करने के लिए यहां हैं।"
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

        .stories-page {
          min-height: 100vh;
          background: #faf5ff;
        }

        /* Hero Section */
        .hero-section {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 8rem 5% 4rem;
          background: linear-gradient(135deg, #fce7f3 0%, #fff7ed 100%);
          position: relative;
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
          font-size: 4rem;
          font-weight: 400;
          color: #581c87;
          line-height: 1.3;
          margin-bottom: 2rem;
          max-width: 900px;
        }

        .hero-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-style: italic;
          color: #ec4899;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .hero-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #6b7280;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Intro Section */
        .intro-section {
          padding: 6rem 5%;
          text-align: center;
          background: linear-gradient(135deg, #faf5ff, #fce7f3);
        }

        .intro-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .intro-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 400;
          color: #581c87;
          margin-bottom: 1rem;
        }

        .intro-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-style: italic;
          color: #ec4899;
          margin-bottom: 2rem;
        }

        .intro-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.05rem;
          line-height: 1.9;
          color: #6b7280;
        }

        /* Story Card */
        .story-section {
          padding: 4rem 0;
          background: white;
        }

        .story-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .story-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-bottom: 4rem;
          background: white;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
        }

        .story-card.reverse {
          direction: rtl;
        }

        .story-card.reverse > * {
          direction: ltr;
        }

        .story-image {
          height: 500px;
          overflow: hidden;
        }

        .story-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .story-card:hover .story-image img {
          transform: scale(1.05);
        }

        .story-content {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .story-emoji {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .story-header {
          margin-bottom: 1.5rem;
        }

        .story-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 500;
          color: #ec4899;
          margin-bottom: 0.5rem;
        }

        .story-details {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: #9333ea;
          font-weight: 500;
        }

        .story-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 1.5rem;
        }

        .story-impact {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #6b7280;
          font-style: italic;
          padding-left: 1.5rem;
          border-left: 4px solid #ec4899;
        }

        /* Anonymous Story Card */
        .anonymous-card {
          background: linear-gradient(135deg, #fce7f3, #fef3c7);
          padding: 4rem;
        }

        .anonymous-card .story-name {
          color: #581c87;
        }

        .anonymous-card .story-text,
        .anonymous-card .story-impact {
          color: #4b5563;
        }

        .quote-icon {
          color: #ec4899;
          opacity: 0.3;
          margin-bottom: 1rem;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 5%;
          text-align: center;
          background: linear-gradient(90deg, #9333ea, #ec4899);
          color: white;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 400;
          margin-bottom: 2rem;
        }

        .cta-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .cta-button {
          padding: 1rem 3rem;
          background: white;
          color: #9333ea;
          border: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
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
          .story-card {
            grid-template-columns: 1fr;
          }

          .story-card.reverse {
            direction: ltr;
          }

          .story-image {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-tagline {
            font-size: 1.5rem;
          }

          .story-content,
          .anonymous-card {
            padding: 2.5rem;
          }

          .story-name {
            font-size: 2rem;
          }

          .cta-title {
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

      <div className="stories-page">
        {/* Hero Section */}
        <motion.div 
          className="hero-section"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="hero-subtitle" variants={fadeInUp}>
            {currentContent.hero.subtitle}
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeInUp}>
            {currentContent.hero.title}
          </motion.h1>
          <motion.div className="hero-tagline" variants={fadeInUp}>
            {currentContent.hero.tagline}
          </motion.div>
          <motion.p className="hero-description" variants={fadeInUp}>
            {currentContent.hero.description}
          </motion.p>
        </motion.div>

        {/* Intro Section */}
        <motion.div 
          className="intro-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="intro-content">
            <h2 className="intro-title">{currentContent.intro.title}</h2>
            <div className="intro-subtitle">{currentContent.intro.subtitle}</div>
            <p className="intro-text">{currentContent.intro.text}</p>
          </div>
        </motion.div>

        {/* Stories Section */}
        <div className="story-section">
          <div className="story-container">
            {currentContent.stories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {story.hasImage ? (
                  <div className={`story-card ${idx % 2 === 1 ? 'reverse' : ''}`}>
                    <div className="story-image">
                      <img src={story.image} alt={story.name} />
                    </div>
                    <div className="story-content">
                      <div className="story-emoji">{story.emoji}</div>
                      <div className="story-header">
                        <h3 className="story-name">{story.name}</h3>
                        <p className="story-details">{story.age} • {story.location}</p>
                      </div>
                      <p className="story-text">{story.story}</p>
                      <p className="story-impact">{story.impact}</p>
                    </div>
                  </div>
                ) : (
                  <div className="story-card anonymous-card">
                    <div className="story-content">
                      <Quote className="quote-icon" size={60} />
                      <div className="story-emoji">{story.emoji}</div>
                      <div className="story-header">
                        <h3 className="story-name">{story.name}</h3>
                        <p className="story-details">{story.age} • {story.location}</p>
                      </div>
                      <p className="story-text">{story.story}</p>
                      <p className="story-impact">{story.impact}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">{currentContent.cta.title}</h2>
            <p className="cta-text">{currentContent.cta.text}</p>
            <button className="cta-button">{currentContent.cta.button}</button>
          </div>
        </motion.div>
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