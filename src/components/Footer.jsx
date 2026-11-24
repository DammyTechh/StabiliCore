import logo from '../assets/logo-full.webp';
import './Footer.css';

const COLS = [
  { title: 'The device', links: [['Purpose', '#purpose'], ['Build', '#build'], ['Safe fit', '#closing']] },
  { title: 'In practice', links: [['Fitting', '#fitting'], ['In use', '#use'], ['Upkeep', '#upkeep'], ['Team', '#team']] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logo} alt="StabiliCore OrthoSlab" />
            <p>
              A lightweight, customisable orthopaedic thermoplastic slab for limb
              stabilisation, alignment and posture support in children with
              cerebral palsy.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="label label--mute">{c.title}</p>
                <ul>
                  {c.links.map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} StabiliCore OrthoSlab. All rights reserved.</p>
          <p className="footer__credit">Developed under TETFAIR 2026</p>
        </div>
      </div>
    </footer>
  );
}
