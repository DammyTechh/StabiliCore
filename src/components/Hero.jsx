import FloatingSlab from './FloatingSlab';
import { IconArrowDown, IconHeat, IconAlign, IconRefit } from './Icons';
import slab from '../assets/slab-front.webp';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Hero.css';

const TRAITS = [
  { Icon: IconHeat, text: 'Heat-moulded to one limb' },
  { Icon: IconAlign, text: 'Holds alignment, allows movement' },
  { Icon: IconRefit, text: 'Re-moulded as the child grows' },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__shell">
        <div className="hero__copy">
          <h1 className="hero__title" data-reveal>
            <span className="line">Shaped around</span>
            <span className="line">one child.</span>
            <span className="line hero__title-accent">Reshaped as</span>
            <span className="line hero__title-accent">they grow.</span>
          </h1>

          <p className="lead hero__lead" data-reveal style={{ '--d': '80ms' }}>
            StabiliCore is a lightweight orthopaedic thermoplastic slab for
            children with cerebral palsy. Warm it, mould it to the limb in front
            of you, strap it on. It holds alignment and posture without taking
            away the movement physiotherapy is trying to build.
          </p>

          <ul className="traits" data-reveal style={{ '--d': '160ms' }}>
            {TRAITS.map((t) => (
              <li key={t.text}>
                <span className="traits__icon"><t.Icon size={20} /></span>
                {t.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__stage" data-reveal style={{ '--d': '80ms' }}>
          <div className="hero__panel" aria-hidden="true" />
          <FloatingSlab
            src={slab}
            alt="The StabiliCore OrthoSlab: a contoured posterior shell with three adjustable webbing straps."
            depth={1.05}
            tiltMax={11}
            priority
          />
          <ul className="hero__ticks" aria-hidden="true">
            <li>TPU</li>
            <li>Nylon</li>
            <li>PETG</li>
          </ul>
        </div>
      </div>

      <div className="shell hero__foot">
        <div className="hero__support" data-reveal>
          <p className="label label--mute">Supported by</p>
          <div className="hero__logos">
            <span className="plate"><img className="hero__logo hero__logo--innov8" src={innov8} alt="Innov8 Hub" /></span>
            <span className="plate"><img className="hero__logo hero__logo--tet" src={tetfund} alt="TETFund, Tertiary Education Trust Fund" /></span>
          </div>
        </div>
        <a className="hero__scroll" href="#purpose" aria-label="Scroll to the next section">
          <IconArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
