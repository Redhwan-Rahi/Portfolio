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
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
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
              • Integrated OpenAI’s APIs into an internal search platform used by all American Express employees, enabling natural-language
queries that reduced average search time by 40%, saving colleagues over 2,000 hours annually
              • Designed and delivered a unified support platform featuring an AI driven chatbot, on demand in person scheduling, and a
              searchable FAQ knowledge base that drives 100K+ daily interactions and accelerates issue resolution for colleagues
              • Led migration of a production database from Microsoft SQL Server to PostgreSQL refactoring backend services for full feature
              parity, cutting licensing costs by 50% and saving over $30K per month
              • Modernized internal search architecture by migrating from Solr to Elasticsearch, optimizing indexing pipelines for 1M records,
              enhancing query precision and enabling advanced data analytics through Kibana dashboards and vector-based relevance
              scoring
              • Integrated internal engineering workflows with ServiceNow, streamlining incident tracking, request intake, and operational
              visibility across multiple enterprise applications
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
              <h3 className="vertical-timeline-element-title">Software Engineer I</h3>
              <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
              <div className="company-logo">
                <img src={amexLogo} alt="American Express Logo" />
              </div>
            </div>
            <p style={{ color: '#222', lineHeight: '1.8', marginTop: '15px', fontSize: '15px' }}>
              • Engineered a device reservation and availability system using Kotlin, Ktor, and Exposed on Microsoft SQL Server facilitating
100+ monthly events globally and handling around 2000 attendees per event, automating reservation and attendance
workflows, and producing detailed reports
              • Collaborated cross-functionally with hiring managers and IT to launch a Slack app, automating access controls and reducing
              admin time by 60%
              • Led platform health initiatives for both front end and back end of five applications, identifying and remediating nearly 500
              security vulnerabilities driving critical findings to zero and bolstering overall system resilience
              • Designed and implemented REST APIs using Spring Boot and Swagger for documentation, facilitating seamless integration
              with third-party services and improving data accessibility across platforms
              • Developed a Spring Boot API with advanced SQL queries to automate bulk shipping label generation, saving over 1200
              engineering hours per month
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
