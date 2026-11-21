import { IconRefit, IconClean, IconGrowth, IconCheck } from './Icons';
import './Upkeep.css';

const CYCLE = [
  {
    Icon: IconRefit,
    title: 'Off and on again',
    body: 'The strap-based fastening means the slab comes off and goes back on as often as the day requires, without a new fitting each time.',
  },
  {
    Icon: IconClean,
    title: 'Cleaned, not replaced',
    body: 'It is reusable. Keeping the shell and the skin-contact surfaces clean is what keeps it that way.',
  },
];

const OVER_TIME = [
  'Shell inspected for cracking, deformation and loss of structural integrity',
  'Straps checked for secure fixation and durability across repeated use',
  'Inner cushioning layer assessed for condition',
  'Remoulding considered as the child grows',
  'Contact surfaces and edges kept smooth and rounded',
];

export default function Upkeep() {
  return (
    <section className="section upkeep" id="upkeep">
      <div className="shell">
        <header className="upkeep__head">
          <div>
            <p className="label" data-reveal>
              <span className="label__dot" aria-hidden="true" />
              Upkeep
            </p>
            <h2 className="upkeep__title" data-reveal style={{ '--d': '60ms' }}>
              The child will
              <br />
              outgrow it. Twice.
            </h2>
          </div>
          <p className="lead upkeep__lead" data-reveal style={{ '--d': '130ms' }}>
            Growth is the thing a paediatric orthosis has to survive. Because
            the thermoplastic can be warmed and reshaped, outgrowing the slab is
            an appointment rather than a replacement.
          </p>
        </header>

        <div className="upkeep__body">
          <ul className="cycle">
            {CYCLE.map((c, i) => (
              <li key={c.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <span className="cycle__icon"><c.Icon size={24} /></span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>

          <div className="overtime" data-reveal style={{ '--d': '140ms' }}>
            <span className="overtime__icon"><IconGrowth size={24} /></span>
            <h3>Watched over time</h3>
            <ul>
              {OVER_TIME.map((x) => (
                <li key={x}>
                  <IconCheck size={17} />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
