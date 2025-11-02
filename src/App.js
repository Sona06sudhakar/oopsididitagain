import React, { useState } from 'react';
import { Shield, Phone, MapPin, Book, Lightbulb, Info, Menu, X, AlertCircle, Heart, Users, FileText, Search, MessageCircle } from 'lucide-react';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Navbar navigateTo={navigateTo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} currentPage={currentPage} />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        {currentPage === 'report' && <ReportIncident />}
        {currentPage === 'rights' && <MyRights />}
        {currentPage === 'help' && <FindHelp />}
        {currentPage === 'tips' && <SafetyTips />}
        {currentPage === 'about' && <About />}
      </main>

      <footer className="bg-purple-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">© {new Date().getFullYear()} Nari Suraksha Saathi — Prototype</p>
          <small className="text-purple-200">Prototype only. No data is stored or transmitted.</small>
        </div>
      </footer>
    </div>
  );
}

// Navbar Component
function Navbar({ navigateTo, mobileMenuOpen, setMobileMenuOpen, currentPage }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Shield },
    { id: 'report', label: 'Report', icon: AlertCircle },
    { id: 'rights', label: 'My Rights', icon: Book },
    { id: 'help', label: 'Find Help', icon: Heart },
    { id: 'tips', label: 'Safety Tips', icon: Lightbulb },
    { id: 'about', label: 'About', icon: Info }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => navigateTo('home')} className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-purple-900">Nari Suraksha Saathi</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition ${
                    currentPage === item.id 
                      ? 'bg-purple-600 text-white' 
                      : 'text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`w-full px-4 py-3 flex items-center space-x-3 transition ${
                    currentPage === item.id 
                      ? 'bg-purple-600 text-white' 
                      : 'text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

// Home Page
function Home({ navigateTo }) {
  const features = [
    {
      id: 'report',
      title: 'Report Incident',
      description: 'Share your experience anonymously and safely',
      icon: AlertCircle,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'rights',
      title: 'My Rights',
      description: 'Know your legal rights under POSH Act',
      icon: Book,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'help',
      title: 'Find Help',
      description: 'Connect with NGOs and support services',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'tips',
      title: 'Safety Tips',
      description: 'Essential safety guidelines for workers',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-4">
          Nari Suraksha Saathi
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Your discreet safety and support companion
        </p>
        <div className="inline-block bg-yellow-100 border-l-4 border-yellow-500 px-6 py-4 rounded-r-lg">
          <p className="text-sm text-yellow-800 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <strong>Disclaimer:</strong> This is a prototype. No real data is sent or stored.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map(feature => {
          const Icon = feature.icon;
          return (
            <button
              key={feature.id}
              onClick={() => navigateTo(feature.id)}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Emergency Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl shadow-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Emergency Support</h2>
        <p className="text-lg mb-6">If you are in immediate danger, please contact:</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="tel:100" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition flex items-center space-x-2">
            <Phone className="w-6 h-6" />
            <span>Police: 100</span>
          </a>
          <a href="tel:1091" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition flex items-center space-x-2">
            <Phone className="w-6 h-6" />
            <span>Women Helpline: 1091</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// Report Incident Page
function ReportIncident() {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    location: '',
    date: '',
    anonymous: 'yes'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.type || !formData.description || !formData.location || !formData.date) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Report submitted (prototype):', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ type: '', description: '', location: '', date: '', anonymous: 'yes' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-900 mb-6">Report Incident (Prototype)</h1>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 rounded-r-lg">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-yellow-800">Important Notice</p>
            <p className="text-yellow-700 text-sm">This is a prototype. Your report will NOT be sent to authorities. No data is stored or transmitted.</p>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-lg text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You for Sharing</h2>
          <p className="text-green-700">Your report has been recorded (prototype simulation)</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Type of Incident *</label>
            <select 
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select incident type</option>
              <option value="physical">Physical Harassment</option>
              <option value="verbal">Verbal Harassment</option>
              <option value="sexual">Sexual Harassment</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description *</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
              placeholder="Please describe what happened..."
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Location *</label>
            <input 
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Where did this occur?"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date *</label>
            <input 
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Report Anonymously?</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input 
                  type="radio"
                  name="anonymous"
                  value="yes"
                  checked={formData.anonymous === 'yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio"
                  name="anonymous"
                  value="no"
                  checked={formData.anonymous === 'no'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition"
          >
            Submit Report (Prototype)
          </button>
        </form>
      )}
    </div>
  );
}

// My Rights Page
function MyRights() {
  const [language, setLanguage] = useState('english');

  const content = {
    english: {
      title: "Your Rights under POSH Act",
      sections: [
        {
          title: "What is Harassment?",
          points: [
            "Unwelcome physical contact or advances",
            "Demand or request for sexual favors",
            "Sexually colored remarks",
            "Showing pornography",
            "Any other unwelcome physical, verbal or non-verbal conduct of sexual nature"
          ]
        },
        {
          title: "Your Rights to Safety",
          points: [
            "Right to work in a safe environment free from harassment",
            "Right to file a complaint without fear of retaliation",
            "Right to confidentiality during complaint process",
            "Right to interim relief during inquiry",
            "Right to appeal against the decision"
          ]
        },
        {
          title: "How to Report",
          points: [
            "File written complaint to Internal Complaints Committee (ICC)",
            "Complaint must be filed within 3 months of incident",
            "ICC must complete inquiry within 90 days",
            "Complainant can be accompanied by a person of choice",
            "Both parties have right to be heard"
          ]
        }
      ],
      contacts: {
        title: "Important Contacts",
        list: [
          { label: "Women Helpline", number: "1091" },
          { label: "Police Emergency", number: "100" },
          { label: "National Commission for Women", number: "7827-170-170" }
        ]
      },
      note: "Based on the POSH Act, 2013 and Indian Labour Rights"
    },
    hindi: {
      title: "पोश अधिनियम के तहत आपके अधिकार",
      sections: [
        {
          title: "उत्पीड़न क्या है?",
          points: [
            "अनचाहा शारीरिक संपर्क या प्रगति",
            "यौन अनुग्रह की मांग या अनुरोध",
            "यौन रंग की टिप्पणियां",
            "अश्लील सामग्री दिखाना",
            "यौन प्रकृति का कोई अन्य अनचाहा आचरण"
          ]
        },
        {
          title: "सुरक्षा के आपके अधिकार",
          points: [
            "उत्पीड़न मुक्त सुरक्षित वातावरण में काम करने का अधिकार",
            "प्रतिशोध के डर के बिना शिकायत दर्ज करने का अधिकार",
            "शिकायत प्रक्रिया के दौरान गोपनीयता का अधिकार",
            "जांच के दौरान अंतरिम राहत का अधिकार",
            "निर्णय के खिलाफ अपील करने का अधिकार"
          ]
        },
        {
          title: "रिपोर्ट कैसे करें",
          points: [
            "आंतरिक शिकायत समिति (ICC) को लिखित शिकायत दर्ज करें",
            "घटना के 3 महीने के भीतर शिकायत दर्ज करनी होगी",
            "ICC को 90 दिनों में जांच पूरी करनी होगी",
            "शिकायतकर्ता अपनी पसंद के व्यक्ति के साथ हो सकता है",
            "दोनों पक्षों को सुने जाने का अधिकार है"
          ]
        }
      ],
      contacts: {
        title: "महत्वपूर्ण संपर्क",
        list: [
          { label: "महिला हेल्पलाइन", number: "1091" },
          { label: "पुलिस आपातकाल", number: "100" },
          { label: "राष्ट्रीय महिला आयोग", number: "7827-170-170" }
        ]
      },
      note: "पोश अधिनियम, 2013 और भारतीय श्रम अधिकारों पर आधारित"
    }
  };

  const currentContent = content[language];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-purple-900">{currentContent.title}</h1>
        <button
          onClick={() => setLanguage(language === 'english' ? 'hindi' : 'english')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          {language === 'english' ? 'हिंदी में पढ़ें' : 'Read in English'}
        </button>
      </div>

      <div className="space-y-6">
        {currentContent.sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <Book className="w-6 h-6 mr-2" />
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Phone className="w-6 h-6 mr-2" />
            {currentContent.contacts.title}
          </h2>
          <div className="space-y-3">
            {currentContent.contacts.list.map((contact, i) => (
              <a 
                key={i}
                href={`tel:${contact.number}`}
                className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition"
              >
                <span className="font-semibold">{contact.label}</span>
                <span className="text-xl">{contact.number}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-blue-800 text-sm">{currentContent.note}</p>
        </div>
      </div>
    </div>
  );
}

// Find Help Page
function FindHelp() {
  const [searchTerm, setSearchTerm] = useState('');

  const ngos = [
    {
      name: "Sakshi Crisis Intervention Center",
      focus: "Domestic Violence & Sexual Assault",
      location: "Mumbai, Maharashtra",
      phone: "022-2640-2684",
      whatsapp: "919876543210"
    },
    {
      name: "Sneha Foundation",
      focus: "Women's Rights & Mental Health",
      location: "Chennai, Tamil Nadu",
      phone: "044-2464-0050",
      whatsapp: "919876543211"
    },
    {
      name: "Prayas JAC Society",
      focus: "Juvenile Justice & Women Protection",
      location: "Delhi",
      phone: "011-2656-4208",
      whatsapp: "919876543212"
    },
    {
      name: "Majlis Legal Centre",
      focus: "Legal Aid for Women",
      location: "Mumbai, Maharashtra",
      phone: "022-2661-6165",
      whatsapp: "919876543213"
    },
    {
      name: "IFSHA Women Development Society",
      focus: "Workplace Harassment",
      location: "Bangalore, Karnataka",
      phone: "080-2556-4040",
      whatsapp: "919876543214"
    },
    {
      name: "Action India",
      focus: "Women Empowerment & Rights",
      location: "Delhi",
      phone: "011-2616-7343",
      whatsapp: "919876543215"
    }
  ];

  const filteredNGOs = ngos.filter(ngo =>
    ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.focus.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-900 mb-6">Find Support Near You</h1>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 rounded-r-lg">
        <p className="text-yellow-800 text-sm">
          <strong>Disclaimer:</strong> All contacts are simulated for prototype purposes. In a real application, these would connect to actual support services.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by focus area or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredNGOs.map((ngo, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-purple-900 mb-2">{ngo.name}</h3>
            <div className="flex items-center text-pink-600 mb-2">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-semibold">{ngo.focus}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{ngo.location}</span>
            </div>
            <div className="flex space-x-4">
              <a
                href={`tel:${ngo.phone}`}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${ngo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        ))}

        {filteredNGOs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No organizations found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Safety Tips Page
function SafetyTips() {
  const tips = [
    {
      title: "Inform Someone Before Visiting New Workplaces",
      description: "Always share your location and expected return time with a trusted friend or family member before visiting unfamiliar locations.",
      icon: MapPin
    },
    {
      title: "Keep Emergency Contacts Saved",
      description: "Store important numbers including police (100), women's helpline (1091), and trusted contacts in your phone's quick dial.",
      icon: Phone
    },
    {
      title: "Avoid Isolated Areas If Possible",
      description: "Stay in well-lit, populated areas. If you must visit isolated locations, inform someone and consider having a companion.",
      icon: Users
    },
    {
      title: "Use Safety Alarm or Whistle",
      description: "Carry a personal safety alarm or whistle. These devices can draw attention and deter potential threats.",
      icon: AlertCircle
    },
    {
      title: "Trust Your Instincts",
      description: "If a situation feels uncomfortable or unsafe, trust your gut feeling and remove yourself from the situation.",
      icon: Heart
    },
    {
      title: "Know Your Rights",
      description: "Familiarize yourself with workplace safety laws and your rights under the POSH Act. Knowledge is empowerment.",
      icon: Book
    },
    {
      title: "Document Everything",
      description: "Keep records of incidents, communications, and any evidence that might be needed for reporting harassment.",
      icon: FileText
    },
    {
      title: "Build a Support Network",
      description: "Connect with colleagues and join support groups. Having a network of trusted people provides both practical and emotional support.",
      icon: Users
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-900 mb-6">Safety Tips for Workers</h1>
      
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white mb-8">
        <h2 className="text-2xl font-bold mb-2">Your Safety Matters</h2>
        <p className="text-purple-100">These practical tips can help you stay safe and aware in various situations. Remember, your wellbeing is always the priority.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, idx) => {
          const Icon = tip.icon;
          return (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
        <h3 className="font-bold text-red-800 text-lg mb-2">In Case of Emergency</h3>
        <p className="text-red-700 mb-4">If you are in immediate danger, prioritize your safety and contact emergency services immediately.</p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <a href="tel:100" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center">
            Police: 100
          </a>
          <a href="tel:1091" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center">
            Women Helpline: 1091
          </a>
        </div>
      </div>
    </div>
  );
}

// About Page
function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-900 mb-6">About Nari Suraksha Saathi</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nari Suraksha Saathi is a prototype web application designed as a student project to demonstrate how technology can support women's safety and empowerment in the workplace and beyond.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This application aims to provide a safe, accessible platform where women can learn about their rights, find support resources, and understand how to report incidents of harassment or violence.
          </p>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
            <AlertCircle className="w-6 h-6 mr-2" />
            Important Limitations
          </h2>
          <ul className="space-y-2 text-yellow-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>This is a <strong>prototype only</strong> and not a production application</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>No data is stored, saved, or transmitted to any server</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Reports submitted through this app are not sent to authorities</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Contact information for NGOs and helplines are simulated examples</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>For real emergencies, always contact local authorities directly</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Features Demonstrated</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Incident Reporting</h3>
                <p className="text-gray-600 text-sm">Anonymous reporting system interface</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Book className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Rights Information</h3>
                <p className="text-gray-600 text-sm">POSH Act and legal rights awareness</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Support Directory</h3>
                <p className="text-gray-600 text-sm">NGO and helpline resource listing</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Safety Guidelines</h3>
                <p className="text-gray-600 text-sm">Practical safety tips and awareness</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Based on POSH Act, 2013</h2>
          <p className="text-purple-100 leading-relaxed mb-4">
            The Prevention of Sexual Harassment (POSH) Act, 2013 is a legislative act in India that seeks to protect women from sexual harassment at workplace. This application references the key provisions and rights established by this important legislation.
          </p>
          <a 
            href="https://www.shemale.gov.in/posh-act"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
          >
            Learn More About POSH Act
            <Info className="w-5 h-5 ml-2" />
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Technology Stack</h2>
          <p className="text-gray-700 mb-4">This prototype is built using:</p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
              React - Component-based UI framework
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
              Tailwind CSS - Utility-first styling
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
              Lucide React - Icon library
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
              Responsive Design - Mobile-first approach
            </li>
          </ul>
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="font-bold text-blue-800 text-lg mb-2">Feedback & Contact</h3>
          <p className="text-blue-700">
            This is an educational project created to demonstrate how technology can contribute to women's safety initiatives. For actual support services or to report real incidents, please contact appropriate authorities or verified NGOs in your area.
          </p>
        </div>
      </div>
    </div>
  );
}