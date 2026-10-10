import resumePdf from '../assets/Redhwan_Rahi_Resume.pdf';
import { links } from '../data/portfolio';
import { ArrowUpRight, Download, GitHub, LinkedIn } from './Icons';

function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="section-shell">
        <div className="about-grid" data-reveal>
          <div>
            <p className="section-kicker">A little context</p>
            <h2>Engineer, product thinker, and relentless simplifier.</h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a full-stack engineer who enjoys connecting product thinking with the technical depth needed to make systems reliable. My background spans enterprise platforms, applied AI, intelligent search, developer tooling, and connected hardware.
            </p>
            <div className="education-block">
              <span>Education</span>
              <strong>B.S. Computer Science</strong>
              <p>New Jersey Institute of Technology · Magna Cum Laude · 2022</p>
            </div>
          </div>
        </div>

        <div className="footer-cta" data-reveal>
          <p>Have a hard problem?</p>
          <h2>Let’s make it feel simple.</h2>
          <div className="footer-actions">
            <a className="button button-primary" href={links.email}>
              Email me
              <ArrowUpRight />
            </a>
            <a className="button button-secondary" href={resumePdf} target="_blank" rel="noreferrer">
              View résumé
              <Download />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <a className="brand-mark" href="#top" aria-label="RR. — Redhwan Rahi, back to top">
            RR<span>.</span>
          </a>
          <p>Designed and built by Redhwan Rahi.</p>
          <div className="footer-socials">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="Redhwan Rahi on GitHub">
              <GitHub />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="Redhwan Rahi on LinkedIn">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
