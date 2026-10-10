import { experiences } from '../data/portfolio';

function Timeline() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-shell experience-shell">
        <div className="experience-intro" data-reveal>
          <p className="section-kicker">Experience</p>
          <h2 id="experience-title">Engineering for real stakes and real scale.</h2>
          <p>
            My work spans the interface, service, data, and operational layers—usually where reliability matters as much as the first impression.
          </p>
        </div>

        <ol className="experience-list">
          {experiences.map((experience, index) => (
            <li key={`${experience.company}-${experience.role}`} data-reveal>
              <div className="experience-index" aria-hidden="true">
                0{index + 1}
              </div>
              <article>
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p className="experience-summary">{experience.summary}</p>

                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <ul className="tag-list compact" aria-label={`${experience.role} technologies`}>
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
