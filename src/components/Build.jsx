import FloatingSlab from './FloatingSlab';
import { IconShell, IconCushion, IconStrap } from './Icons';
import slab from '../assets/slab-angle.webp';
import './Build.css';

const PARTS = [
  {
    n: '1',
    Icon: IconShell,
    title: 'Posterior shell',
    body: 'Rigid or semi-rigid, and heat-moldable. Warm it and it takes the shape of the limb; cool it and it holds that shape under load.',
  },
  {
    n: '2',
    Icon: IconCushion,
    title: 'Cushioning layer',
    body: 'A soft interface between the shell and the skin. It is the part doing the work against pressure-related complications.',
  },
  {
    n: '3',
    Icon: IconStrap,
    title: 'Fastening system',
    body: 'Adjustable nylon straps. Enough tension to hold fixation, not so much that it becomes the problem it was meant to solve.',
  },
];

const MATERIALS = [
  ['TPU', 'Thermoplastic polyurethane'],
  ['Nylon', 'Polyamide'],
  ['PETG', 'Polyethylene terephthalate glycol'],
];

export default function Build() {
  return (
    <section className="section build" id="build">
      <div className="shell">
        <header className="build__head">
          <div>
            <p className="label" data-reveal>
              <span className="label__dot" aria-hidden="true" />
              The build
            </p>
            <h2 className="build__title" data-reveal style={{ '--d': '60ms' }}>
              Three parts.
              <br />
              That is the whole device.
            </h2>
          </div>
          <p className="lead build__lead" data-reveal style={{ '--d': '130ms' }}>
            A shell to hold the limb, a layer to protect the skin, and straps to
            keep the two where the clinician put them. Nothing in it needs a
            power supply or a spare part.
          </p>
        </header>

        <div className="build__body">
          <ol className="parts">
            {PARTS.map((p, i) => (
              <li key={p.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <span className="parts__icon"><p.Icon size={24} /></span>
                <h3><span className="parts__n">{p.n}</span>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>

          <div className="build__stage" data-reveal style={{ '--d': '120ms' }}>
            <FloatingSlab
              src={slab}
              alt="The slab seen at an angle, showing the contoured shell edge and the three strap positions."
              depth={0.7}
              tiltMax={9}
            />
          </div>
        </div>

        <div className="materials" data-reveal>
          <p className="label label--mute materials__kicker">Made from, locally sourced</p>
          <ul>
            {MATERIALS.map(([code, name]) => (
              <li key={code}>
                <strong>{code}</strong>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
