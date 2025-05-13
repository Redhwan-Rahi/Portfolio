import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "Kotlin",
  "Java",
  "Spring Boot",
  "HTML5",
  "CSS3",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman",
  "Next.js",
  "Tailwind CSS",
  "Node.js"
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Selenium",
];

const labelsThird = [
  "OpenAI",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full-Stack Web Development</h3>
            <p>
              Crafted end-to-end solutions with React front-ends and Flask/PostgreSQL back-ends, maintaining high unit-test coverage and implementing dynamic scheduling that seamlessly handles global time-zone conversions with sub-200 ms response times for tens of thousands of users.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Designed and automated robust CI/CD pipelines using GitHub Actions and container tooling, integrated secure secret management, and optimized database connection pools to streamline deployments across staging and production environments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Leveraged state-of-the-art language models and vector stores to build conversational agents and intelligent retrieval systems—integrating OpenAI to turn natural language into actionable data queries.
            </p>
            <br />
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
