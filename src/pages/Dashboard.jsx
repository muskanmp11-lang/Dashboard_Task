import StatsCard from "../components/StatsCard";
import SocialMedCard from "../components/SocialMedCard";
import TrafficCard from "../components/TrafficCard";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/Navbar";
import MapCard from "../components/MapCard";


import "../styles/dashboard.css";

export default function Dashboard() {

  const statsData = [
    { color: "#29b6f6", value: "10468", title: "Members Online" },{ color: "#6610f2", value: "11229", title: "Total Reach" }, 
    { color: "#f8cb00", value: "2200", title: "New Signing" }, { color: "#f86c6b", value: "55666", title: "Pending Alerts" },
  ];

  const socialData = [
    { platform: "facebook", color: "#3b5998", friends: "40k", feeds: "450" }, { platform: "twitter", color: "#00aced", friends: "30k", feeds: "450" },
    { platform: "linkedin", color: "#4875b4", friends: "40k", feeds: "250" },{ platform: "google", color: "#d34836", friends: "94k", feeds: "92" },
  ];

  return (
    <div className="dashboard-container">
      <Navbar />




    {/* bellow dashboard topbar above social media icons--->  section */}
<div className="stats-grid">
  {statsData.map((item, index) => (
    <div 
      key={index} 
      className="stat-card" 
      style={{ backgroundColor: item.color }}
    >
      <div className="stat-info">
        <h3>{item.value}</h3>
        <p>{item.title}</p>
      </div>
     
      <span className="settings-icon">⚙️</span>
     

     
      <div className="mini-chart-line"></div>
    </div>
  ))}
</div>

    {/* sections----social med.. */}
      <div className="card-row">
        {socialData.map((social, index) => (
          <SocialMedCard key={index} {...social} />
        ))}
      </div>


{/* main section */}
      <div className="main-grid">
        <div className="chart-section">  
              <TrafficCard />
        </div>
      <div className="right-col-stack">

      
        <ProfileCard />
        </div>

      


        {/* new---right of profile ---3 blocks */}

  <div className="more-right-stack">
    <div className="stat-right-card">
        <div className="stat-icon green-icon">$</div>
        <div className="stat-info">
            <span className="stat-label">Total Profit</span>
            <span className="stat-value">1,012</span>
        </div>
    </div>
    
    <div className="stat-right-card">
        <div className="stat-icon blue-icon">👤</div>
        <div className="stat-info">
            <span className="stat-label">New Customer</span>
            <span className="stat-value">961</span>
        </div>
    </div>

    <div className="stat-right-card">
        <div className="stat-icon yellow-icon">📁</div>
        <div className="stat-info">
            <span className="stat-label">Active Projects</span>
            <span className="stat-value">770</span>
        </div>
    </div>
  </div>

    <div className="map-right">
             <MapCard/>
        </div>
</div>
      </div>
    
  );
}