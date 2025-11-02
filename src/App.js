import React, { useState } from 'react';
import { Shield, Phone, MapPin, Book, Lightbulb, Info, Menu, X, AlertCircle, Heart, Users, FileText, Search, MessageCircle } from 'lucide-react';

// Complete CSS styles
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes slideDown {
    from { opacity: 0; max-height: 0; }
    to { opacity: 1; max-height: 500px; }
  }
  
  .animate-fade-in { animation: fadeIn 0.6s ease-out; }
  .animate-slide-in { animation: slideIn 0.5s ease-out; }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
  .animate-slide-down { animation: slideDown 0.3s ease-out; }
  .animate-gradient { 
    background-size: 200% 200%;
    animation: gradientShift 8s ease infinite;
  }
  
  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .card-hover:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
  
  .glass {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .glow-purple {
    box-shadow: 0 0 30px rgba(147, 51, 234, 0.6);
  }
  
  html { scroll-behavior: smooth; }
  ::-webkit-scrollbar { width: 12px; }
  ::-webkit-scrollbar-track { background: #f1f1f1; }
  ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #9333ea, #ec4899); border-radius: 6px; }
  ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #7e22ce, #db2777); }
  
  button { 
    cursor: pointer;
    border: none;
    font-family: inherit;
  }
  button:active { transform: scale(0.95); }
  *:focus-visible { outline: 2px solid #9333ea; outline-offset: 2px; border-radius: 4px; }
`;

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
    <>
      <style>{styles}</style>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%)',
        backgroundSize: '200% 200%'
      }} className="animate-gradient">
        <Navbar navigateTo={navigateTo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} currentPage={currentPage} />
        
        <main style={{maxWidth: '1152px', margin: '0 auto', padding: '32px 16px'}}>
          {currentPage === 'home' && <Home navigateTo={navigateTo} />}
          {currentPage === 'report' && <ReportIncident />}
          {currentPage === 'rights' && <MyRights />}
          {currentPage === 'help' && <FindHelp />}
          {currentPage === 'tips' && <SafetyTips />}
          {currentPage === 'about' && <About />}
        </main>

        <footer style={{
          background: 'linear-gradient(90deg, #581c87, #6b21a8, #be185d)',
          backgroundSize: '200% 200%',
          color: 'white',
          padding: '32px 0',
          marginTop: '64px',
          boxShadow: '0 -10px 40px rgba(147, 51, 234, 0.2)',
          textAlign: 'center'
        }} className="animate-gradient">
          <div style={{maxWidth: '1152px', margin: '0 auto', padding: '0 16px'}}>
            <p style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>© {new Date().getFullYear()} Nari Suraksha Saathi</p>
            <small style={{color: '#e9d5ff'}}>Empowering women through safety and support</small>
          </div>
        </footer>
      </div>
    </>
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
    <nav className="glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 30px rgba(147, 51, 234, 0.15)',
      borderBottom: '1px solid rgba(147, 51, 234, 0.1)'
    }}>
      <div style={{maxWidth: '1152px', margin: '0 auto', padding: '0 16px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0'}}>
          <button onClick={() => navigateTo('home')} className="animate-slide-in" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            transition: 'all 0.3s ease'
          }}>
            <Shield className="animate-pulse-slow" style={{
              width: '32px',
              height: '32px',
              color: '#9333ea',
              filter: 'drop-shadow(0 2px 8px rgba(147, 51, 234, 0.4))'
            }} />
            <span className="text-shadow" style={{fontSize: '20px', fontWeight: '700', color: '#581c87'}}>
              Nari Suraksha Saathi
            </span>
          </button>

          {/* Desktop Menu */}
          <div style={{display: 'none', gap: '4px'}} className="desktop-menu">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: isActive ? 'linear-gradient(90deg, #9333ea, #ec4899)' : 'transparent',
                    color: isActive ? 'white' : '#374151',
                    transition: 'all 0.3s ease',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    fontWeight: isActive ? '600' : '500',
                    boxShadow: isActive ? '0 0 30px rgba(147, 51, 234, 0.6)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = '#f3e8ff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Icon style={{
                    width: '16px',
                    height: '16px',
                    filter: isActive ? 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))' : 'none'
                  }} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: 'none'
            }}
            className="mobile-menu-btn"
            onMouseEnter={(e) => e.currentTarget.style.background = '#f3e8ff'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
          >
            {mobileMenuOpen ? <X style={{width: '24px', height: '24px'}} /> : <Menu style={{width: '24px', height: '24px'}} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="animate-slide-down" style={{
            paddingBottom: '16px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(249, 240, 255, 0.95))',
            backdropFilter: 'blur(10px)'
          }}>
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: isActive ? '#9333ea' : 'transparent',
                    color: isActive ? 'white' : '#374151',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = '#f3e8ff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Icon style={{width: '20px', height: '20px'}} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
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
      color: 'linear-gradient(135deg, #ef4444, #ec4899)'
    },
    {
      id: 'rights',
      title: 'My Rights',
      description: 'Know your legal rights under POSH Act',
      icon: Book,
      color: 'linear-gradient(135deg, #3b82f6, #9333ea)'
    },
    {
      id: 'help',
      title: 'Find Help',
      description: 'Connect with NGOs and support services',
      icon: Heart,
      color: 'linear-gradient(135deg, #ec4899, #f43f5e)'
    },
    {
      id: 'tips',
      title: 'Safety Tips',
      description: 'Essential safety guidelines for workers',
      icon: Lightbulb,
      color: 'linear-gradient(135deg, #eab308, #f97316)'
    }
  ];

  return (
    <div className="animate-fade-in" style={{display: 'flex', flexDirection: 'column', gap: '48px'}}>
      {/* Hero Section */}
      <div style={{textAlign: 'center', padding: '48px 0'}}>
        <h1 className="text-shadow animate-slide-in" style={{
          fontSize: '56px',
          fontWeight: '700',
          color: '#581c87',
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #581c87 0%, #9333ea 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Nari Suraksha Saathi
        </h1>
        <p style={{
          fontSize: '24px',
          color: '#374151',
          marginBottom: '32px',
          opacity: 0,
          animation: 'fadeIn 0.6s ease-out 0.2s forwards'
        }}>
          Your trusted safety and support companion
        </p>
      </div>

      {/* Feature Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <button
              key={feature.id}
              onClick={() => navigateTo(feature.id)}
              className="card-hover"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249, 240, 255, 0.95) 100%)',
                border: '1px solid rgba(147, 51, 234, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${0.1 * (index + 1)}s forwards`,
                textAlign: 'left'
              }}
            >
              <div style={{height: '8px', background: feature.color, backgroundSize: '200% 200%'}} className="animate-gradient"></div>
              <div style={{padding: '32px'}}>
                <div className="animate-float" style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: feature.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)'
                }}>
                  <Icon style={{width: '32px', height: '32px', color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'}} />
                </div>
                <h3 className="text-shadow" style={{fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '8px'}}>
                  {feature.title}
                </h3>
                <p style={{fontSize: '16px', color: '#4b5563'}}>
                  {feature.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Emergency Section */}
      <div style={{
        background: 'linear-gradient(90deg, #dc2626, #ec4899)',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        padding: '32px',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{fontSize: '30px', fontWeight: '700', marginBottom: '16px'}}>Emergency Support</h2>
        <p style={{fontSize: '18px', marginBottom: '24px'}}>If you are in immediate danger, please contact:</p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center'
        }}>
          <a href="tel:100" style={{
            background: 'white',
            color: '#dc2626',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '20px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            maxWidth: '300px',
            width: '100%',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <Phone style={{width: '24px', height: '24px'}} />
            <span>Police: 100</span>
          </a>
          <a href="tel:1091" style={{
            background: 'white',
            color: '#dc2626',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '20px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            maxWidth: '300px',
            width: '100%',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <Phone style={{width: '24px', height: '24px'}} />
            <span>Women Helpline: 1091</span>
          </a>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .emergency-buttons { flex-direction: row !important; }
        }
      `}</style>
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
    time: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    anonymous: 'no'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.type || !formData.description || !formData.location || !formData.date) {
      alert('Please fill in all required fields');
      return;
    }
    
    // In a real app, this would send data to your backend server
    console.log('Incident reported:', formData);
    
    // You would typically do:
    // fetch('/api/reports', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
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

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'all 0.2s ease'
  };

  return (
    <div style={{maxWidth: '768px', margin: '0 auto'}}>
      <h1 style={{fontSize: '36px', fontWeight: '700', color: '#581c87', marginBottom: '24px'}}>
        Report Incident
      </h1>
      
      <div style={{
        background: '#dbeafe',
        borderLeft: '4px solid #3b82f6',
        padding: '16px',
        marginBottom: '32px',
        borderRadius: '0 8px 8px 0'
      }}>
        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
          <AlertCircle style={{width: '24px', height: '24px', color: '#1e40af', flexShrink: 0, marginTop: '2px'}} />
          <div>
            <p style={{fontWeight: '600', color: '#1e3a8a', marginBottom: '4px'}}>Confidential Reporting</p>
            <p style={{fontSize: '14px', color: '#1e40af'}}>
              Your report will be handled with strict confidentiality. You can choose to report anonymously.
            </p>
          </div>
        </div>
      </div>

      {submitted ? (
        <div style={{
          background: '#d1fae5',
          borderLeft: '4px solid #10b981',
          padding: '24px',
          borderRadius: '0 8px 8px 0',
          textAlign: 'center'
        }}>
          <h2 style={{fontSize: '24px', fontWeight: '700', color: '#065f46', marginBottom: '8px'}}>
            Thank You for Your Report
          </h2>
          <p style={{color: '#047857', marginBottom: '16px'}}>Your report has been submitted successfully. Our team will review it and take appropriate action.</p>
          <p style={{fontSize: '14px', color: '#059669'}}>Report ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div>
            <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
              Type of Incident *
            </label>
            <select 
              name="type"
              value={formData.type}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select incident type</option>
              <option value="physical">Physical Harassment</option>
              <option value="verbal">Verbal Harassment</option>
              <option value="sexual">Sexual Harassment</option>
              <option value="stalking">Stalking</option>
              <option value="discrimination">Discrimination</option>
              <option value="threat">Threat or Intimidation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
              Description *
            </label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{...inputStyle, height: '128px', resize: 'vertical'}}
              placeholder="Please describe what happened in detail..."
              required
            />
          </div>

          <div>
            <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
              Location *
            </label>
            <input 
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Where did this occur?"
              required
            />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
            <div>
              <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
                Date *
              </label>
              <input 
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div>
              <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
                Time
              </label>
              <input 
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
              Report Anonymously?
            </label>
            <div style={{display: 'flex', gap: '16px'}}>
              <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
                <input 
                  type="radio"
                  name="anonymous"
                  value="yes"
                  checked={formData.anonymous === 'yes'}
                  onChange={handleChange}
                />
                <span>Yes (Anonymous)</span>
              </label>
              <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
                <input 
                  type="radio"
                  name="anonymous"
                  value="no"
                  checked={formData.anonymous === 'no'}
                  onChange={handleChange}
                />
                <span>No (Provide Contact)</span>
              </label>
            </div>
          </div>

          {formData.anonymous === 'no' && (
            <>
              <div>
                <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
                  Your Name
                </label>
                <input 
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Full name"
                />
              </div>

              <div>
                <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
                  Email Address
                </label>
                <input 
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label style={{display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px'}}>
                  Phone Number
                </label>
                <input 
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </>
          )}

          <button 
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(90deg, #9333ea, #ec4899)',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Submit Report
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
      intro: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 provides comprehensive protection to women against sexual harassment at workplace.",
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
      }
    },
    hindi: {
      title: "पोश अधिनियम के तहत आपके अधिकार",
      intro: "कार्यस्थल पर महिलाओं का यौन उत्पीड़न (रोकथाम, निषेध और निवारण) अधिनियम, 2013 कार्यस्थल पर यौन उत्पीड़न के खिलाफ महिलाओं को व्यापक सुरक्षा प्रदान करता है।",
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
      }
    }
  };

  const currentContent = content[language];

  return (
    <div style={{maxWidth: '896px', margin: '0 auto'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px'}}>
        <h1 style={{fontSize: '36px', fontWeight: '700', color: '#581c87'}}>{currentContent.title}</h1>
        <button
          onClick={() => setLanguage(language === 'english' ? 'hindi' : 'english')}
          style={{
            background: 'linear-gradient(90deg, #9333ea, #ec4899)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          {language === 'english' ? 'हिंदी में पढ़ें' : 'Read in English'}
        </button>
      </div>

      <div style={{background: '#ede9fe', borderLeft: '4px solid #9333ea', padding: '16px', marginBottom: '32px', borderRadius: '0 8px 8px 0'}}>
        <p style={{color: '#5b21b6', lineHeight: '1.6'}}>{currentContent.intro}</p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        {currentContent.sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              padding: '32px'
            }}>
              <h2 style={{fontSize: '24px', fontWeight: '700', color: '#581c87', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                <Icon style={{width: '28px', height: '28px', color: '#9333ea'}} />
                {section.title}
              </h2>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {section.points.map((point, i) => (
                  <li key={i} style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                    <span style={{color: '#9333ea', fontWeight: '700', fontSize: '20px'}}>•</span>
                    <span style={{color: '#374151', lineHeight: '1.6', flex: 1}}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div style={{
          background: 'linear-gradient(135deg, #fef3c7, #fed7aa)',
          borderRadius: '12px',
          padding: '32px',
          border: '2px solid #f59e0b'
        }}>
          <h2 style={{fontSize: '24px', fontWeight: '700', color: '#92400e', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <AlertCircle style={{width: '28px', height: '28px'}} />
            {currentContent.penalties.title}
          </h2>
          <ul style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {currentContent.penalties.points.map((point, i) => (
              <li key={i} style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                <span style={{color: '#b45309', fontWeight: '700', fontSize: '20px'}}>•</span>
                <span style={{color: '#78350f', lineHeight: '1.6', flex: 1}}>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          background: 'linear-gradient(90deg, #ec4899, #9333ea)',
          borderRadius: '12px',
          padding: '32px',
          color: 'white'
        }}>
          <h2 style={{fontSize: '24px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <Phone style={{width: '28px', height: '28px'}} />
            {currentContent.contacts.title}
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px'}}>
            {currentContent.contacts.list.map((contact, i) => (
              <a 
                key={i}
                href={`tel:${contact.number}`}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              >
                <div style={{fontWeight: '700', fontSize: '18px', marginBottom: '8px'}}>{contact.label}</div>
                <div style={{fontSize: '24px', fontWeight: '700', marginBottom: '8px'}}>{contact.number}</div>
                <div style={{fontSize: '14px', opacity: 0.9}}>{contact.description}</div>
              </a>
            ))}
          </div>
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
      email: "sakshi@vsnl.com",
      whatsapp: "919876543210",
      services: "24x7 crisis intervention, legal aid, counseling"
    },
    {
      name: "Sneha Foundation",
      focus: "Women's Rights & Mental Health",
      location: "Chennai, Tamil Nadu",
      phone: "044-2464-0050",
      email: "help@snehaindia.org",
      whatsapp: "919876543211",
      services: "Counseling, emotional support, suicide prevention"
    },
    {
      name: "Prayas JAC Society",
      focus: "Juvenile Justice & Women Protection",
      location: "Delhi",
      phone: "011-2656-4208",
      email: "prayasjac@gmail.com",
      whatsapp: "919876543212",
      services: "Legal aid, rehabilitation, counseling"
    },
    {
      name: "Majlis Legal Centre",
      focus: "Legal Aid for Women",
      location: "Mumbai, Maharashtra",
      phone: "022-2661-6165",
      email: "majlis@majlislaw.com",
      whatsapp: "919876543213",
      services: "Free legal consultation, court representation"
    },
    {
      name: "IFSHA Women Development Society",
      focus: "Workplace Harassment",
      location: "Bangalore, Karnataka",
      phone: "080-2556-4040",
      email: "ifsha@ifsha.org",
      whatsapp: "919876543214",
      services: "POSH compliance, workplace counseling"
    },
    {
      name: "Action India",
      focus: "Women Empowerment & Rights",
      location: "Delhi",
      phone: "011-2616-7343",
      email: "action@actionindia.org",
      whatsapp: "919876543215",
      services: "Legal support, awareness programs, skill training"
    },
    {
      name: "Swayam",
      focus: "Violence Against Women",
      location: "Kolkata, West Bengal",
      phone: "033-2245-1742",
      email: "contact@swayam.info",
      whatsapp: "919876543216",
      services: "Crisis intervention, legal support, shelter"
    },
    {
      name: "Women's Collective",
      focus: "Sexual Harassment & Rights",
      location: "Chennai, Tamil Nadu",
      phone: "044-2835-9024",
      email: "womenscollective@gmail.com",
      whatsapp: "919876543217",
      services: "Advocacy, legal aid, support groups"
    }
  ];

  const filteredNGOs = ngos.filter(ngo =>
    ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.focus.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{maxWidth: '1024px', margin: '0 auto'}}>
      <h1 style={{fontSize: '36px', fontWeight: '700', color: '#581c87', marginBottom: '24px'}}>
        Find Support Near You
      </h1>
      
      <div style={{
        background: '#dbeafe',
        borderLeft: '4px solid #3b82f6',
        padding: '16px',
        marginBottom: '32px',
        borderRadius: '0 8px 8px 0'
      }}>
        <p style={{color: '#1e40af'}}>
          <strong>24x7 Support:</strong> If you need immediate help, call Women Helpline: <a href="tel:1091" style={{color: '#1e40af', fontWeight: '700'}}>1091</a> or Police Emergency: <a href="tel:100" style={{color: '#1e40af', fontWeight: '700'}}>100</a>
        </p>
      </div>

      <div style={{marginBottom: '32px'}}>
        <div style={{position: 'relative'}}>
          <Search style={{position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: '20px', height: '20px'}} />
          <input
            type="text"
            placeholder="Search by organization name, focus area, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              paddingLeft: '48px',
              paddingRight: '16px',
              paddingTop: '16px',
              paddingBottom: '16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#9333ea'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        {filteredNGOs.map((ngo, idx) => (
          <div key={idx} style={{
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            padding: '32px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h3 style={{fontSize: '24px', fontWeight: '700', color: '#581c87', marginBottom: '12px'}}>{ngo.name}</h3>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#ec4899', marginBottom: '8px'}}>
              <Users style={{width: '20px', height: '20px'}} />
              <span style={{fontWeight: '600'}}>{ngo.focus}</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', marginBottom: '12px'}}>
              <MapPin style={{width: '20px', height: '20px'}} />
              <span>{ngo.location}</span>
            </div>
            <div style={{background: '#f3f4f6', padding: '12px', borderRadius: '8px', marginBottom: '16px'}}>
              <p style={{fontSize: '14px', color: '#374151'}}><strong>Services:</strong> {ngo.services}</p>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
              <a
                href={`tel:${ngo.phone}`}
                style={{
                  flex: '1',
                  minWidth: '200px',
                  background: 'linear-gradient(90deg, #10b981, #059669)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Phone style={{width: '20px', height: '20px'}} />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${ngo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: '1',
                  minWidth: '200px',
                  background: 'linear-gradient(90deg, #22c55e, #16a34a)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <MessageCircle style={{width: '20px', height: '20px'}} />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${ngo.email}`}
                style={{
                  flex: '1',
                  minWidth: '200px',
                  background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span>📧</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        ))}

        {filteredNGOs.length === 0 && (
          <div style={{textAlign: 'center', padding: '48px', background: 'white', borderRadius: '12px'}}>
            <p style={{fontSize: '18px', color: '#6b7280'}}>No organizations found matching your search. Try different keywords.</p>
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
      description: "Always share your location and expected return time with a trusted friend or family member before visiting unfamiliar locations. Use location sharing features on your phone.",
      icon: MapPin,
      category: "Prevention"
    },
    {
      title: "Keep Emergency Contacts Saved",
      description: "Store important numbers including police (100), women's helpline (1091), and trusted contacts in your phone's quick dial. Consider using emergency SOS features.",
      icon: Phone,
      category: "Preparedness"
    },
    {
      title: "Avoid Isolated Areas If Possible",
      description: "Stay in well-lit, populated areas, especially after dark. If you must visit isolated locations, inform someone and consider having a companion with you.",
      icon: Users,
      category: "Prevention"
    },
    {
      title: "Use Safety Alarm or Whistle",
      description: "Carry a personal safety alarm or whistle. These devices can draw attention and deter potential threats. Many smartphones also have emergency alarm features.",
      icon: AlertCircle,
      category: "Safety Tools"
    },
    {
      title: "Trust Your Instincts",
      description: "If a situation feels uncomfortable or unsafe, trust your gut feeling and remove yourself from the situation immediately. Your safety is always the priority.",
      icon: Heart,
      category: "Awareness"
    },
    {
      title: "Know Your Rights",
      description: "Familiarize yourself with workplace safety laws and your rights under the POSH Act. Knowledge is empowerment and helps you recognize and respond to harassment.",
      icon: Book,
      category: "Legal Rights"
    },
    {
      title: "Document Everything",
      description: "Keep records of incidents, communications, and any evidence (messages, emails, photos) that might be needed for reporting harassment. Take screenshots and backup data.",
      icon: FileText,
      category: "Evidence"
    },
    {
      title: "Build a Support Network",
      description: "Connect with colleagues and join support groups. Having a network of trusted people provides both practical and emotional support during difficult times.",
      icon: Users,
      category: "Support"
    },
    {
      title: "Be Aware of Your Surroundings",
      description: "Stay alert and aware of people around you. Avoid using headphones in isolated areas and keep your phone charged and easily accessible.",
      icon: AlertCircle,
      category: "Awareness"
    },
    {
      title: "Learn Self-Defense Basics",
      description: "Consider taking self-defense classes. Basic knowledge of self-defense techniques can boost confidence and provide practical skills in emergency situations.",
      icon: Shield,
      category: "Self-Defense"
    },
    {
      title: "Use Safe Transportation",
      description: "Use verified transportation services and share trip details with trusted contacts. Sit near the driver and verify vehicle details before boarding.",
      icon: MapPin,
      category: "Transportation"
    },
    {
      title: "Report Harassment Promptly",
      description: "Don't hesitate to report harassment to appropriate authorities. Early reporting can prevent escalation and protect others from similar situations.",
      icon: AlertCircle,
      category: "Action"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Prevention', 'Preparedness', 'Safety Tools', 'Awareness', 'Legal Rights', 'Evidence', 'Support', 'Self-Defense', 'Transportation', 'Action'];

  const filteredTips = selectedCategory === 'All' ? tips : tips.filter(tip => tip.category === selectedCategory);

  return (
    <div style={{maxWidth: '1024px', margin: '0 auto'}}>
      <h1 style={{fontSize: '36px', fontWeight: '700', color: '#581c87', marginBottom: '24px'}}>
        Safety Tips for Women
      </h1>
      
      <div style={{
        background: 'linear-gradient(90deg, #9333ea, #ec4899)',
        borderRadius: '12px',
        padding: '32px',
        color: 'white',
        marginBottom: '32px'
      }}>
        <h2 style={{fontSize: '24px', fontWeight: '700', marginBottom: '12px'}}>Your Safety Matters</h2>
        <p style={{opacity: 0.95, lineHeight: '1.6'}}>
          These practical tips can help you stay safe and aware in various situations. Remember, your wellbeing is always the priority. Trust your instincts and don't hesitate to seek help when needed.
        </p>
      </div>

      <div style={{marginBottom: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              background: selectedCategory === category ? 'linear-gradient(90deg, #9333ea, #ec4899)' : 'white',
              color: selectedCategory === category ? 'white' : '#374151',
              fontWeight: '600',
              border: selectedCategory === category ? 'none' : '2px solid #e5e7eb',
              transition: 'all 0.3s ease',
              boxShadow: selectedCategory === category ? '0 4px 15px rgba(147, 51, 234, 0.3)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) e.currentTarget.style.borderColor = '#9333ea';
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category) e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px'}}>
        {filteredTips.map((tip, idx) => {
          const Icon = tip.icon;
          return (
            <div key={idx} style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              padding: '24px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
                <div style={{
                  background: 'linear-gradient(135deg, #f3e8ff, #fce7f3)',
                  borderRadius: '12px',
                  padding: '12px',
                  flexShrink: 0
                }}>
                  <Icon style={{width: '24px', height: '24px', color: '#9333ea'}} />
                </div>
                <div style={{flex: 1}}>
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, #9333ea, #ec4899)',
                    color: 'white',
                    fontSize: '12px',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    marginBottom: '12px',
                    fontWeight: '600'
                  }}>
                    {tip.category}
                  </div>
                  <h3 style={{fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '12px'}}>
                    {tip.title}
                  </h3>
                  <p style={{fontSize: '15px', color: '#4b5563', lineHeight: '1.6'}}>
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: '48px',
        background: 'linear-gradient(135deg, #fee2e2, #fecaca)',
        borderRadius: '12px',
        padding: '32px',
        border: '2px solid #ef4444'
      }}>
        <h3 style={{fontSize: '24px', fontWeight: '700', color: '#7f1d1d', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
          <AlertCircle style={{width: '28px', height: '28px'}} />
          In Case of Emergency
        </h3>
        <p style={{color: '#991b1b', marginBottom: '16px', lineHeight: '1.6'}}>
          If you are in immediate danger, prioritize your safety and contact emergency services immediately.
        </p>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
          <a href="tel:100" style={{
            flex: '1',
            minWidth: '200px',
            background: '#dc2626',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '700',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '18px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#b91c1c'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#dc2626'}
          >
            <Phone style={{width: '24px', height: '24px'}} />
            Police: 100
          </a>
          <a href="tel:1091" style={{
            flex: '1',
            minWidth: '200px',
            background: '#dc2626',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '700',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '18px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#b91c1c'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#dc2626'}
          >
            <Phone style={{width: '24px', height: '24px'}} />
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
    <div style={{maxWidth: '896px', margin: '0 auto'}}>
      <h1 style={{fontSize: '36px', fontWeight: '700', color: '#581c87', marginBottom: '24px'}}>
        About Nari Suraksha Saathi
      </h1>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '32px'
        }}>
          <h2 style={{fontSize: '24px', fontWeight: '700', color: '#581c87', marginBottom: '16px'}}>Our Mission</h2>
          <p style={{fontSize: '18px', color: '#374151', lineHeight: '1.7', marginBottom: '16px'}}>
            Nari Suraksha Saathi is dedicated to empowering women through safety, support, and information. We believe every woman deserves to work and live in an environment free from harassment and violence.
          </p>
          <p style={{fontSize: '18px', color: '#374151', lineHeight: '1.7'}}>
            Our platform provides comprehensive resources including incident reporting, legal rights information, access to support organizations, and practical safety guidance.
          </p>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '32px'
        }}>
          <h2 style={{fontSize: '24px', fontWeight: '700', color: '#581c87', marginBottom: '16px'}}>What We Offer</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px'}}>
            {[
              { icon: AlertCircle, title: 'Confidential Reporting', desc: 'Safe and anonymous incident reporting system' },
              { icon: Book, title: 'Legal Information', desc: 'Complete POSH Act rights and guidelines' },
              { icon: Heart, title: 'Support Network', desc: 'Directory of verified NGOs and helplines' },
              { icon: Lightbulb, title: 'Safety Resources', desc: 'Practical tips and safety guidelines' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                  <Icon style={{width: '24px', height: '24px', color: '#9333ea', flexShrink: 0}} />
                  <div>
                    <div style={{fontWeight: '700', color: '#111827', marginBottom: '4px'}}>{item.title}</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(90deg, #9333ea, #ec4899)',
          borderRadius: '12px',
          padding: '32px',
          color: 'white'
        }}>
          <h2 style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px'}}>Based on POSH Act, 2013</h2>
          <p style={{opacity: 0.95, lineHeight: '1.7', marginBottom: '16px'}}>
            The Prevention of Sexual Harassment (POSH) Act, 2013 is a legislative act in India that seeks to protect women from sexual harassment at workplace. This application references the key provisions and rights established by this important legislation.
          </p>
          <a 
            href="https://wcd.nic.in/act/sexual-harassment-women-workplace-prevention-prohibition-and-redressal-act-2013"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'white',
              color: '#9333ea',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            Learn More About POSH Act
            <Info style={{width: '20px', height: '20px'}} />
          </a>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '32px'
        }}>
          <h2 style={{fontSize: '24px', fontWeight: '700', color: '#581c87', marginBottom: '16px'}}>Privacy & Confidentiality</h2>
          <p style={{fontSize: '16px', color: '#374151', lineHeight: '1.7', marginBottom: '12px'}}>
            We take your privacy seriously. All reports and personal information are handled with strict confidentiality. We use industry-standard security measures to protect your data.
          </p>
          <ul style={{display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px'}}>
            {[
              'Encrypted data transmission and storage',
              'Anonymous reporting options available',
              'No sharing of personal information without consent',
              'Secure access controls and authentication'
            ].map((point, i) => (
              <li key={i} style={{color: '#4b5563', lineHeight: '1.6'}}>{point}</li>
            ))}
          </ul>
        </div>

        <div style={{
          background: '#dbeafe',
          borderLeft: '4px solid #3b82f6',
          padding: '24px',
          borderRadius: '0 8px 8px 0'
        }}>
          <h3 style={{fontSize: '18px', fontWeight: '700', color: '#1e3a8a', marginBottom: '12px'}}>Contact & Feedback</h3>
          <p style={{color: '#1e40af', lineHeight: '1.6'}}>
            This platform is committed to supporting women's safety and empowerment. For support services or to report incidents, please use the resources provided throughout this application. For feedback or inquiries about this platform, please contact your local women's rights organizations.
          </p>
        </div>
      </div>
    </div>
  );
}