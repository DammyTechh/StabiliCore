import { IconStetho, IconApply } from './Icons';
import './Fitting.css';

const STAGES = [
  {
    key: 'A',
    Icon: IconStetho,
    title: 'Assessment and preparation',
    note: 'Before anything is heated',
    steps: [
      'Carry out a clinical assessment of the child’s limb.',
      'Take the limb measurements, length and circumference.',
      'Decide the slab design from the child’s anatomical requirements.',
      'Select the slab size and configuration.',
      'Prepare the thermoplastic and its supporting components for fitting.',
    ],
  },
  {
    key: 'B',
    Icon: IconApply,
    title: 'Fitting and application',
    note: 'With the child in the room',
    steps: [
      'Prepare the thermoplastic material for customisation.',
      'Mould or adjust the slab to the limb anatomy.',
      'Position the posterior shell for the intended alignment and support.',
      'Fit the soft padding between the slab and the limb.',
      'Secure the slab with the adjustable fastening straps.',
      'Assess fit, comfort and positioning.',
      'Make the necessary adjustments under professional supervision.',
    ],
  },
];

export default function Fitting() {
  return (
    <section className="section fitting" id="fitting">
      <div className="shell">
        <header className="fitting__head">
          <div>
            <p className="label" data-reveal>
              <span className="label__dot" aria-hidden="true" />
              Fitting
            </p>
            <h2 className="fitting__title" data-reveal style={{ '--d': '60ms' }}>
              Measure, warm,
              <br />
              mould, strap.
            </h2>
          </div>
          <p className="lead fitting__lead" data-reveal style={{ '--d': '130ms' }}>
            The documented sequence an orthotist follows, from the first
            measurement to the last strap adjustment. Low-temperature
            thermoplastic means the moulding happens in the clinic, not in a
            workshop three weeks away.
          </p>
        </header>

        <div className="stages">
          {STAGES.map((s, i) => (
            <article className="stage" key={s.key} data-reveal style={{ '--d': `${i * 110}ms` }}>
              <div className="stage__top">
                <span className="stage__icon"><s.Icon size={24} /></span>
                <span className="stage__key">{s.key}</span>
              </div>
              <h3>{s.title}</h3>
              <p className="stage__note">{s.note}</p>
              <ol>
                {s.steps.map((t, j) => (
                  <li key={j}>
                    <span className="stage__num">{j + 1}</span>
                    {t}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
