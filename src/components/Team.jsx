import team from '../assets/team.webp';
import './Team.css';

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="shell">
        <header className="team__head">
          <p className="label" data-reveal>
            <span className="label__dot" aria-hidden="true" />
            Team
          </p>
          <h2 className="team__title" data-reveal style={{ '--d': '60ms' }}>
            The team behind StabiliCore
          </h2>
          <p className="lead team__lead" data-reveal style={{ '--d': '120ms' }}>
            Three people designed the slab, built and fitted the prototypes and
            wrote the fitting and upkeep guidance, under TETFAIR 2026.
          </p>
        </header>

        <figure className="team__figure" data-reveal style={{ '--d': '170ms' }}>
          <div className="team__frame">
            <img
              src={team}
              alt="The three members of the StabiliCore team, in TETFAIR shirts."
              loading="lazy"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
