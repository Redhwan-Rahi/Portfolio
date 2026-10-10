import { capabilityGroups } from '../data/portfolio';

function Expertise() {
  return (
    <section className="capabilities-section section-shell" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2 id="capabilities-title">Broad enough to own the problem. Deep enough to ship it.</h2>
        </div>
        <p>
          I move comfortably from product decisions and interface details to service design, data migrations, and production operations.
        </p>
      </div>

      <div className="capability-grid">
        {capabilityGroups.map((group) => (
          <article className="capability-card" key={group.title} data-reveal>
            <span className="capability-number">{group.number}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>
              {group.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
