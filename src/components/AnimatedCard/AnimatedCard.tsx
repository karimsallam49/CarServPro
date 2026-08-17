import { useState } from "react";
import "./AnimatedCard.css";
// import CarProimage from "../../assets/Images/Capture.png"

const AnimatedCard = () => {
  const [currentView, setCurrentView] = useState<'erp' | 'tablet'>('erp');

  const toggleView = () => {
    setCurrentView(prev => prev === 'erp' ? 'tablet' : 'erp');
  };

  return (
    <section 
    id="tutorial"
    className="animated-card-container position-relative">

    <div className="animated-card-wrapper h-100">
      <div className="card w-100 h-100 animated-card shadow-lg position-relative">
        <iframe 
          style={{ borderRadius:"10px" }} 
          width="100%" 
          height="100%" 
          src={currentView === 'erp' ? 'https://demo.carserv.pro/' : 'https://webworkshop.carserv.pro/'} 
          title={currentView === 'erp' ? 'ERP View' : 'Tablet View'} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Toggle Button */}
      <button 
        onClick={toggleView}
        className="view-toggle-btn position-absolute d-flex align-items-center gap-2"
        style={{
          left: '20px',
          top: '20px',
          padding: '10px 20px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          whiteSpace: 'nowrap',
          zIndex: 100
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#764ba2'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
      >
        <span 
          className="material-symbols-outlined" 
          style={{ 
            fontSize: '20px',
            transition: 'transform 0.5s ease',
            transform: currentView === 'tablet' ? 'rotate(0deg)' : 'rotate(360deg)'
          }}
        >
          {currentView === 'tablet' ? 'desktop_windows' : 'tablet_mac'}
        </span>
        {currentView === 'tablet' ? 'ERP View' : 'Tablet View'}
      </button>
    </div>
    </section>
  );
};

export default AnimatedCard;
