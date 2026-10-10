import personWebp from '../assets/images/person-720.webp';
import resumePdf from '../assets/Redhwan_Rahi_Resume.pdf';
import { links } from '../data/portfolio';
import { ArrowDown, ArrowUpRight, Download, GitHub, LinkedIn } from './Icons';

function Main() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Full-stack software engineer
          </div>

          <h1 id="hero-title">
            Complex systems.
            <br />
            Clear experiences.
            <br />
            <em>Measurable impact.</em>
          </h1>

          <p className="hero-intro">
            I’m Redhwan Rahi. I build applied AI, intelligent search, resilient platforms, and thoughtful digital products that turn complicated workflows into useful software.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work
              <ArrowDown />
            </a>
            <a className="button button-secondary" href={resumePdf} target="_blank" rel="noreferrer">
              View résumé
              <Download />
            </a>
          </div>

          <div className="hero-socials" aria-label="Social profiles">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="Redhwan Rahi on GitHub">
              <GitHub />
              <span>GitHub</span>
              <ArrowUpRight />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="Redhwan Rahi on LinkedIn">
              <LinkedIn />
              <span>LinkedIn</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-reveal data-reveal-delay="1">
          <div className="signal-grid" aria-hidden="true">
            {Array.from({ length: 30 }, (_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className="portrait-frame">
            <img
              src={personWebp}
              alt="Redhwan Rahi"
              width="720"
              height="666"
              decoding="async"
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <span>Redhwan Rahi</span>
              <span>Software Engineer II</span>
            </div>
          </div>

          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />

          <div className="hero-float hero-float-top">
            <span className="float-kicker">Focus</span>
            <strong>AI + Platforms</strong>
          </div>
          <div className="hero-float hero-float-bottom">
            <span className="float-kicker">Search scale</span>
            <strong>1M+ records</strong>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#impact" aria-label="Scroll to explore impact highlights">
        <span>Scroll to explore</span>
        <ArrowDown />
      </a>
    </section>
  );
}

export default Main;
