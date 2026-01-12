import React from 'react';
import "../styles/cards.css";

const MapCard = () => {

  
  return (
    <div className="map-card">
      <div className="map-header">
        <h4 style={{ margin: '0', fontSize: '1.1rem' }}>Global Reach</h4>
        <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '4px' }}>User Activity</p>
      </div>
      
      <div className="map-placeholder">
        <img 
          src="https://www.freevector.com/uploads/vector/preview/63962/vecteezyworld-map-green-and-blue-templatedp0222_generated.jpg"
          alt="World Map" 
          className="world-map-img" 
        />
      </div>
    </div>
  );
};

export default MapCard;