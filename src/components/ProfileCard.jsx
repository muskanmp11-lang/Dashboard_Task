import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import "../styles/cards.css"

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img 
          src="https://m.media-amazon.com/images/I/41mSIgdsHvL._AC_UF1000,1000_QL80_.jpg" 
          alt="Profile" 
          className="profile-img" 
        />
        <h3>Muskan Saklani</h3>
        <p className="profile-role">MERN Stack Developer</p>
      </div>
      
      <div className="profile-tags">
        <span className="tag">Mobile</span>
        <span className="tag">Web</span>
        <span className="tag">UI/UX</span>
      </div>

      <div className="profile-socials">
        <FaTwitter className="social-icon" />
        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>
    </div>
  );
};

export default ProfileCard;