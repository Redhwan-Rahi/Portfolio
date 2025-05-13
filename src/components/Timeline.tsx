import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import amexLogo from '../assets/images/amex-logo.png';
import cognizantLogo from '../assets/images/cognizant-softvision-logo.png';

function Timeline() {
  return (
    <div id="career">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Software Engineer II */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: 'white', 
              color: '#222', 
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
              padding: '24px'
            }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Feb 2024 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff', boxShadow: '0 0 0 4px #e4d5ff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="company-header">
              <h3 className="vertical-timeline-element-title">Software Engineer II</h3>
              <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
              <div className="company-logo">
                <img src={amexLogo} alt="American Express Logo" />
              </div>
            </div>
            <p style={{ color: '#222', lineHeight: '1.8', marginTop: '15px', fontSize: '15px' }}>
              • Integrated OpenAI APIs into internal search platform<br />
              • Developed Spring Boot API for bulk shipping label generation, saving over 1200 engineering hours/month<br />
              • Engineered support platform with chatbot, scheduling, and FAQ searches (115K daily views)<br />
              • Built email & push notification system using Jakarta Mail and Cron jobs<br />
              • Developed reservation & availability system with Kotlin, Ktor, and Exposed<br />
              • Created React/Redux module for consistent error & downtime messaging<br />
              • Designed RESTful APIs with Spring Boot and Swagger
            </p>
          </VerticalTimelineElement>

          {/* Software Engineer III */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: 'white', 
              color: '#222', 
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
              padding: '24px'
            }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2022 - Feb 2024"
            iconStyle={{ background: '#5000ca', color: '#fff', boxShadow: '0 0 0 4px #e4d5ff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="company-header">
              <h3 className="vertical-timeline-element-title">Software Engineer III</h3>
              <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
              <div className="company-logo">
                <img src={amexLogo} alt="American Express Logo" />
              </div>
            </div>
            <p style={{ color: '#222', lineHeight: '1.8', marginTop: '15px', fontSize: '15px' }}>
              • Developed internal event & room reservation app, reducing workflow by 40%<br />
              • Integrated Slack API for hiring manager email group management, boosting efficiency by 60%<br />
              • Created and maintained GitHub Actions CI/CD workflows<br />
              • Managed deployments to internal cloud platforms with automated releases<br />
              • Led backend authentication & authorization standards across engineering teams<br />
              • Spearheaded cloud migration, achieving 99.9% uptime
            </p>
          </VerticalTimelineElement>

          {/* Software Engineering Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: 'white', 
              color: '#222', 
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
              padding: '24px'
            }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2021 - Aug 2021"
            iconStyle={{ background: '#5000ca', color: '#fff', boxShadow: '0 0 0 4px #e4d5ff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="company-header">
              <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">College Station, TX</h4>
              <div className="company-logo">
                <img src={cognizantLogo} alt="Cognizant Softvision Logo" />
              </div>
            </div>
            <p style={{ color: '#222', lineHeight: '1.8', marginTop: '15px', fontSize: '15px' }}>
              • Developed full-stack REST microservices using Spring Boot and Java, with a front end built in Angular. Employed Agile methodologies, including Test-Driven Development (TDD) and pair programming, while maintaining continuous integration and delivery practices, ensuring high-quality and efficient development processes<br />
              • Improved run time performance by resolving critical bugs, refactoring legacy code, and ensuring a code coverage of minimum 85%<br />
              • Created microservices to handle CRUD operations for custom auction system logic using Spring JPA with an H2 database
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
