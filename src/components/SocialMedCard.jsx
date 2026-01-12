import "../styles/cards.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';

export default function SocialMedCard({ platform, color, friends, feeds }) {
    const icons = {
        facebook: <FaFacebookF />,
        twitter: <FaTwitter />,
        linkedin: <FaLinkedinIn />,
        google: <FaGooglePlusG />
    };

    return (
        <div className="social-card">
            <div className="social-icon-top" style={{ backgroundColor: color }}>
                {icons[platform]}
            </div>

            <div className="social-stats-bottom">

                <div className="stat-item"><strong>{friends}</strong>FRIENDS</div>
                
                 <div className="stat-item"><strong>{feeds}</strong>FEEDS</div>
           
            </div>
        </div>
    )
}