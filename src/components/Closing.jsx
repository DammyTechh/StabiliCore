import { IconShield, IconCushion, IconAlign, IconCheck } from './Icons';
import mascotBust from '../assets/mascot-bust.webp';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Closing.css';

const SAFETY = [
  { Icon: IconShield, title: 'Supervised', body: 'Fitted and adjusted under an orthotist or another qualified professional.' },
  { Icon: IconAlign, title: 'Aligned', body: 'Proper limb alignment and controlled immobilisation, held by the shell.' },
  { Icon: IconCushion, title: 'Comfortable', body: 'Soft interface and smooth, rounded edges against the skin at every contact point.' },
  { Icon: IconCheck, title: 'Sound', body: 'Structural integrity and strap fixation reviewed across repeated use.' },
];

export default function Closing() {
  return (
    <section className="section closing" id="closing">
      <div className="shell">
        <header className="closing__head">
          <div>
            <p className="label" data-reveal>
              <span className="label__dot" aria-hidden="true" />
              Safe fit
            </p>
            <h2 className="closing__title" data-reveal style={{ '--d': '60ms' }}>
              Four things
              <br />
              we never trade off.
            </h2>
          </div>
          <img className="closing__mascot" src={mascotBust} alt="" loading="lazy" data-reveal style={{ '--d': '120ms' }} />
        </header>

        <ul className="safety">
          {SAFETY.map((s, i) => (
            <li key={s.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="safety__icon"><s.Icon size={23} /></span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>

        <div className="supporters" data-reveal>
          <p className="label label--mute">Supported by</p>
          <div className="supporters__row">
            <span className="plate"><img className="supporters__innov8" src={innov8} alt="Innov8 Hub" /></span>
            <span className="plate"><img className="supporters__tet" src={tetfund} alt="TETFund, Tertiary Education Trust Fund" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
