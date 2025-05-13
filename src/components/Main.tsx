import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import person from '../assets/images/person.jpg';
import bgDark from '../assets/images/bg-dark.png';

function Main() {
  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = bgDark;
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={person} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/redhwan-rahi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/redhwanrahi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Redhwan Rahi</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/redhwan-rahi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/redhwanrahi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;