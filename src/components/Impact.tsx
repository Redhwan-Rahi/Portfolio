import { impactMetrics } from '../data/portfolio';

function Impact() {
  return (
    <section className="impact-section" id="impact" aria-labelledby="impact-title">
      <div className="section-shell impact-shell">
        <div className="impact-heading" data-reveal>
          <p className="section-kicker">Proof, not promises</p>
          <h2 id="impact-title">Outcomes from enterprise and independent work.</h2>
        </div>

        <div className="impact-grid">
          {impactMetrics.map((metric, index) => (
            <article className="metric-card" key={metric.value} data-reveal data-reveal-delay={`${index % 2}`}>
              <span className="metric-index">0{index + 1}</span>
              <strong>{metric.value}</strong>
              <span className="metric-label">{metric.label}</span>
              <span className="metric-context">{metric.context}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
