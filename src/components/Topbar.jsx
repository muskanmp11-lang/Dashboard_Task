import React from "react";
import "../styles/topbar.css";


import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar">
      
      
      {/* dashboard icosns */}
      <div className="topbar-left">
        <h3>Dashboard</h3>
      </div>


{/* right hand size cols */}
      <div className="topbar-right">
        <FaSearch className="icon" />
        <FaBell className="icon" />
        <FaEnvelope className="icon" />

        <img
          src="https://m.media-amazon.com/images/I/41mSIgdsHvL._AC_UF1000,1000_QL80_.jpg"
          alt="profile"
          className="profile-img"
        />
      </div>

    </div>
  );
};

export default Topbar;