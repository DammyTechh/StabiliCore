/* 24px grid, 1.85 stroke, round caps. Five strokes or fewer per glyph so
   nothing turns to mush at the 18px most of them are drawn at. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
};

const Svg = ({ size = 24, children, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>{children}</svg>
);

/* ---------- the build ---------- */

export const IconShell = (p) => (
  <Svg {...p}>
    <path d="M5.8 3.2v9.6a6.2 6.2 0 0 0 12.4 0V3.2" />
    <path d="M9.6 3.2v9.6a2.4 2.4 0 0 0 4.8 0V3.2" />
  </Svg>
);

export const IconCushion = (p) => (
  <Svg {...p}>
    <path d="M2.8 8c3.1-2.2 6.1-2.2 9.2 0s6.1 2.2 9.2 0" />
    <path d="M2.8 13c3.1-2.2 6.1-2.2 9.2 0s6.1 2.2 9.2 0" />
    <path d="M2.8 18c3.1-2.2 6.1-2.2 9.2 0s6.1 2.2 9.2 0" />
  </Svg>
);

export const IconStrap = (p) => (
  <Svg {...p}>
    <rect x="2.3" y="6.8" width="8.4" height="10.4" rx="2.6" />
    <path d="M10.7 9.6h8a3 3 0 0 1 0 6h-8" />
    <path d="M6.3 12.6h4.4" />
  </Svg>
);

export const IconHeat = (p) => (
  <Svg {...p}>
    <path d="M8.4 2.8c-1.7 2.2 0 3.6 0 5.4s-1.7 3.2-1.7 3.2" />
    <path d="M15.6 2.8c-1.7 2.2 0 3.6 0 5.4s-1.7 3.2-1.7 3.2" />
    <path d="M3.2 16h17.6" />
    <path d="M5.4 20.6h13.2" />
  </Svg>
);

/* ---------- fitting ---------- */

export const IconRuler = (p) => (
  <Svg {...p}>
    <rect x="2.4" y="8.2" width="19.2" height="7.6" rx="2.2" />
    <path d="M7.2 8.2v3" />
    <path d="M12 8.2v4" />
    <path d="M16.8 8.2v3" />
  </Svg>
);

export const IconStetho = (p) => (
  <Svg {...p}>
    <path d="M6.4 3v5.2a5.6 5.6 0 0 0 11.2 0V3" />
    <path d="M12 13.8v1.8a4.6 4.6 0 0 0 4.6 4.6" />
    <circle cx="19.4" cy="19.4" r="2.1" />
  </Svg>
);

export const IconApply = (p) => (
  <Svg {...p}>
    <path d="M12 2.6v8.8" />
    <path d="m7.8 7.4 4.2 4.2 4.2-4.2" />
    <path d="M4.4 14.2c0 3.8 3.4 6.9 7.6 6.9s7.6-3.1 7.6-6.9" />
  </Svg>
);

/* ---------- use + upkeep ---------- */

export const IconWalk = (p) => (
  <Svg {...p}>
    <circle cx="13.6" cy="4.4" r="2" />
    <path d="m9.6 21.2 2.2-5.4-2.4-2.4 1.2-4.8 3.8 2 2.6 1.4" />
    <path d="m11.8 15.8 2.8 1.6 1.4 3.8" />
    <path d="m10.6 8.6-3.4 1.6-1.4 3" />
  </Svg>
);

export const IconAlign = (p) => (
  <Svg {...p}>
    <path d="M12 2.6v18.8" />
    <path d="M4.8 8.2h14.4" />
    <path d="M7.8 15.8h8.4" />
  </Svg>
);

export const IconRefit = (p) => (
  <Svg {...p}>
    <path d="M20.4 11.4a8.4 8.4 0 1 0-1.9 6.2" />
    <path d="M20.6 5.4v5.4h-5.4" />
  </Svg>
);

export const IconClean = (p) => (
  <Svg {...p}>
    <path d="M12 2.8c3.4 4 6 7.1 6 10.2a6 6 0 0 1-12 0c0-3.1 2.6-6.2 6-10.2Z" />
    <path d="M9.2 13.8a2.9 2.9 0 0 0 2.9 2.9" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.2 12.2 2.6 2.6 5-5.6" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 4.5 6v6c0 4.3 3.1 7.8 7.5 9.2 4.4-1.4 7.5-4.9 7.5-9.2V6Z" />
    <path d="m8.9 11.9 2.2 2.2 4.1-4.4" />
  </Svg>
);

export const IconGrowth = (p) => (
  <Svg {...p}>
    <path d="M3.2 20.4h17.6" />
    <path d="M7 20.4V14" />
    <path d="M12 20.4V9.2" />
    <path d="M17 20.4V4.4" />
  </Svg>
);

/* ---------- settings ---------- */

export const IconHospital = (p) => (
  <Svg {...p}>
    <path d="M4 21.2V6.6l8-3.8 8 3.8v14.6" />
    <path d="M2.8 21.2h18.4" />
    <path d="M12 8.6v5" />
    <path d="M9.5 11.1h5" />
  </Svg>
);

export const IconRehab = (p) => (
  <Svg {...p}>
    <path d="M6.4 6.4v11.2" />
    <path d="M17.6 6.4v11.2" />
    <path d="M2.8 9.6v4.8" />
    <path d="M21.2 9.6v4.8" />
    <path d="M6.4 12h11.2" />
  </Svg>
);

export const IconHome = (p) => (
  <Svg {...p}>
    <path d="m3.2 10.4 8.8-7 8.8 7v9.2a1.8 1.8 0 0 1-1.8 1.8H5a1.8 1.8 0 0 1-1.8-1.8Z" />
    <path d="M9.2 21.4v-7h5.6v7" />
  </Svg>
);

/* ---------- UI ---------- */

export const IconArrow = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M4.5 12h14" />
    <path d="m13 6.5 5.5 5.5-5.5 5.5" />
  </Svg>
);

export const IconArrowDown = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M12 4.5v14" />
    <path d="m6.5 13 5.5 5.5L17.5 13" />
  </Svg>
);

export const IconMenu = ({ size = 20, ...p }) => (
  <Svg size={size} strokeWidth={2} {...p}>
    <path d="M3.8 8.5h16.4" />
    <path d="M3.8 15.5h16.4" />
  </Svg>
);

export const IconClose = ({ size = 20, ...p }) => (
  <Svg size={size} strokeWidth={2} {...p}>
    <path d="m6.2 6.2 11.6 11.6" />
    <path d="M17.8 6.2 6.2 17.8" />
  </Svg>
);
