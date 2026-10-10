function Project() {
  return (
    <section className="work-section section-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 id="work-title">Software that leaves the slide deck.</h2>
        </div>
        <p>
          I like owning the messy middle between an ambitious idea and a dependable product—from connected devices to the services and interfaces that make them useful.
        </p>
      </div>

      <article className="venture-project" data-reveal>
        <div className="venture-copy">
          <div className="project-meta">
            <span>01 / Founder &amp; builder</span>
            <span>IoT · Connected hardware · Ad tech</span>
          </div>
          <p className="project-label">Slekto</p>
          <h3>Location-based advertising, built from device to dashboard.</h3>
          <p>
            I founded and built an IoT-driven out-of-home advertising platform that delivers hyper-local mobile impressions through networked LED devices. I designed and shipped the full-stack architecture solo—from device registration and real-time telemetry ingestion to campaign management, hardware integration, and advertiser-facing analytics dashboards.
          </p>
          <ul className="tag-list" aria-label="Slekto technology stack">
            {['TypeScript', 'Node.js', 'Fastify', 'PostgreSQL', 'Fly.io'].map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="telemetry-card" aria-hidden="true">
          <div className="telemetry-topline">
            <span>DEVICE NETWORK</span>
            <span className="live-indicator">LIVE</span>
          </div>
          <div className="city-grid">
            {Array.from({ length: 63 }, (_, index) => (
              <span className={[10, 17, 23, 31, 39, 47, 52].includes(index) ? 'is-active' : ''} key={index} />
            ))}
          </div>
          <div className="telemetry-route">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="telemetry-readout">
            <div>
              <span>Campaign status</span>
              <strong>ACTIVE</strong>
            </div>
            <div>
              <span>Device network</span>
              <strong>CONNECTED</strong>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Project;
