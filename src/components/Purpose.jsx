import { IconHospital, IconRehab, IconWalk, IconHome } from './Icons';
import mascot from '../assets/mascot.webp';
import './Purpose.css';

const SETTINGS = [
  { Icon: IconHospital, name: 'Hospitals' },
  { Icon: IconRehab, name: 'Physiotherapy clinics' },
  { Icon: IconWalk, name: 'Rehabilitation centres' },
  { Icon: IconHome, name: 'Home care' },
];

export default function Purpose() {
  return (
    <section className="section purpose" id="purpose">
      <div className="shell purpose__shell">
        <div className="purpose__art" data-reveal>
          <span className="purpose__blob" aria-hidden="true" />
          <img src={mascot} alt="A child wearing the StabiliCore slab on one leg, walking and giving a thumbs up." loading="lazy" />
        </div>

        <div className="purpose__copy">
          <p className="label" data-reveal>
            <span className="label__dot" aria-hidden="true" />
            Who it is for
          </p>
          <h2 className="purpose__title" data-reveal style={{ '--d': '60ms' }}>
            A device that has
            <br />
            to fit one leg.
          </h2>
          <p className="lead purpose__lead" data-reveal style={{ '--d': '130ms' }}>
            Children with cerebral palsy do not share a limb shape, and an
            off-the-shelf brace tends to prove it. StabiliCore is made to be
            shaped by the clinician who is already in the room: it manages leg
            deformity, supports functional positioning, and keeps the child
            moving through rehabilitation rather than sitting still for it.
          </p>

          <div className="settings" data-reveal style={{ '--d': '200ms' }}>
            <p className="label label--mute settings__kicker">Used in</p>
            <ul>
              {SETTINGS.map((s) => (
                <li key={s.name}>
                  <span className="settings__icon"><s.Icon size={21} /></span>
                  {s.name}
                </li>
              ))}
            </ul>
            <p className="settings__note">
              In every one of them, under the supervision of an orthotist or
              another qualified professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
