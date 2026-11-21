import FloatingSlab from './FloatingSlab';
import { IconApply, IconStrap, IconAlign, IconWalk } from './Icons';
import slab from '../assets/slab-side.webp';
import './InUse.css';

const BEATS = [
  { Icon: IconApply, title: 'Applied', body: 'The slab goes onto the limb, posterior shell against the back of the leg.' },
  { Icon: IconStrap, title: 'Secured', body: 'Position is set and held with the adjustable nylon straps.' },
  { Icon: IconAlign, title: 'Aligned', body: 'Stabilisation, alignment and controlled immobilisation, all at once.' },
  { Icon: IconWalk, title: 'Moving', body: 'Controlled mobility stays available through physiotherapy sessions.' },
];

const CHECKS = [
  'Alignment and positioning are being maintained',
  'The child is comfortable wearing it',
  'No cracking or deformation in the posterior shell',
  'Skin-contact areas free of pressure complications',
  'Straps holding fixation without slipping',
  'The slab still accommodates the child’s size',
  'Positioning still suits the physiotherapy session',
];

export default function InUse() {
  return (
    <section className="section in-use" id="use" data-theme="dark">
      <div className="shell">
        <header className="in-use__head">
          <div>
            <p className="label in-use__label" data-reveal>
              <span className="label__dot" aria-hidden="true" />
              In use
            </p>
            <h2 className="in-use__title" data-reveal style={{ '--d': '60ms' }}>
              Holding still
              <br />
              and still moving.
            </h2>
          </div>
          <p className="lead in-use__lead" data-reveal style={{ '--d': '130ms' }}>
            An orthosis that immobilises completely is easy to design and not
            much use in rehabilitation. The point of this one is the narrow band
            in between: enough control to correct, enough freedom to practise.
          </p>
        </header>

        <div className="in-use__body">
          <ol className="beats">
            {BEATS.map((b, i) => (
              <li key={b.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
                <span className="beats__icon"><b.Icon size={23} /></span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </li>
            ))}
          </ol>

          <div className="in-use__stage" data-reveal style={{ '--d': '100ms' }}>
            <FloatingSlab
              src={slab}
              alt="The slab from the side, with the three webbing straps closed."
              className="fs--deep"
              depth={0.75}
              tiltMax={9}
            />
          </div>
        </div>

        <div className="checks" data-reveal>
          <p className="label in-use__label checks__kicker">Checked every session</p>
          <ul>
            {CHECKS.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
