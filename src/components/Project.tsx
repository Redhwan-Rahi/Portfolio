import React from "react";
import '../assets/styles/Project.scss';
import faresFloral from '../assets/images/mock02.png';
import typescriptIcon from '../assets/images/typescript-icon.png';
import nextjsIcon from '../assets/images/nextjs-icon.png';
import mongodbIcon from '../assets/images/mongodb-icon.png';
import redisIcon from '../assets/images/redis-icon.png';
import vercelIcon from '../assets/images/vercel-icon.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Project</h1>
        <div className="featured-project">
            <div className="project-content">
                <div className="project-image">
                    <a href="https://www.faresfloral.com/" target="_blank" rel="noreferrer">
                        <img src={faresFloral} className="zoom" alt="Fares Floral website" />
                    </a>
                </div>
                <div className="project-info">
                    <a href="https://www.faresfloral.com/" target="_blank" rel="noreferrer">
                        <h2>Fares Floral</h2>
                    </a>
                    <div className="project-description">
                        <p>
                            Launched a flower and bouquet e-commerce platform catering to custom-made orders, resulting in a 74% increase in sales
                            compared to the legacy form system and generated $8,743 in revenue.
                        </p>
                        <ul>
                            <li>Improved front-end performance by implementing Redis caching on critical store and product pages</li>
                            <li>Integrated Stripe to enable secure and seamless payment processing for customer transactions</li>
                            <li>Designed and implemented an admin dashboard to manage inventory, allowing image uploads and storage in AWS S3</li>
                            <li>Built a logistics system for drivers, enabling efficient delivery management and photo uploads for proof of delivery</li>
                        </ul>
                    </div>
                    
                    <div className="tech-stack">
                        <h3>Tech Stack</h3>
                        <div className="tech-icons">
                            <div className="tech-icon">
                                <img src={typescriptIcon} alt="TypeScript" />
                                <span>TypeScript</span>
                            </div>
                            <div className="tech-icon">
                                <img src={nextjsIcon} alt="Next.js" />
                                <span>Next.js</span>
                            </div>
                            <div className="tech-icon">
                                <img src={mongodbIcon} alt="MongoDB" />
                                <span>MongoDB</span>
                            </div>
                            <div className="tech-icon">
                                <img src={redisIcon} alt="Redis" />
                                <span>Redis</span>
                            </div>
                            <div className="tech-icon">
                                <img src={vercelIcon} alt="Vercel" />
                                <span>Vercel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;