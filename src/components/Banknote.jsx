import React from 'react';

export const BANKNOTE_VALUE = 1000;
export const BANKNOTE_DEFAULT_WIDTH = 680;

export default function Banknote(props) {
  const { minimal = false } = props;
  const width = props.width || BANKNOTE_DEFAULT_WIDTH;
  return (
    <svg
      width={width}
      viewBox="0 0 804 330"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title desc"
      {...props}
    >
      <title id="title">1000 JRW JaJu Republics Won Banknote</title>
      <desc id="desc">
        A stylized 1000 JRW banknote for JaJu Republics featuring an eye emblem,
        blue security patterns, oranges, and the phrase 귤과 바다의 돈.
      </desc>

      <defs>
        <style>{`
          .color-navy { fill: #1f3552; }
          .color-blue { fill: #126bff; }
          .color-light-blue { fill: #eef9ff; }
          .color-mint { fill: #e7f8ec; }
          .color-red { fill: #ff5a4f; }
          .color-orange { fill: #ff9d22; }
          .color-orange-dark { fill: #ff7a17; }
          .color-green { fill: #2f9f4a; }
          .text-display { font-family: Impact, "Arial Black", sans-serif; font-weight: 900; letter-spacing: 1px; }
          .text-korean { font-family: "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif; font-weight: 900; }
        `}</style>

        <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="5" stdDeviation="0" flood-color="#c7d7e6" flood-opacity="0.9" />
        </filter>

        <pattern id="wavePattern" width="64" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 12 C12 2, 20 2, 32 12 S52 22, 64 12" fill="none" stroke="#bde2f4" strokeWidth="3" opacity="0.75" />
        </pattern>
      </defs>

      <g id="banknote-base">
        <rect x="0" y="0" width="804" height="330" rx="24" fill="#1f3552" />
        <rect x="0" y="0" width="798" height="322" rx="22" fill="#f6fbff" />
        <rect x="22" y="30" width="750" height="270" rx="12" fill="#eef9ff" />
        <rect x="525" y="30" width="247" height="270" fill="#e7f8ec" />
      </g>

      <g id="security-border">
        <rect x="24" y="28" width="748" height="271" rx="12" fill="none" stroke="#126bff" strokeWidth="3" strokeDasharray="13 13" />
      </g>

      <g id="security-wave-background">
        <rect x="52" y="72" width="452" height="198" fill="url(#wavePattern)" opacity="0.85" />
      </g>

      <g id="left-value-text">
        <text x="-4" y="70" className="text-display color-navy" fontSize="27">1000</text>
      </g>

      <g id="left-eye-emblem" transform="translate(88 36)">
        <circle cx="80" cy="130" r="75" fill="#eaf7ff" stroke="#126bff" strokeWidth="7" />
        <path d="M80 4 C112 48, 112 210, 80 256 C48 210, 48 48, 80 4 Z" fill="#3478f6" />
        <path d="M16 130 C48 96, 112 96, 144 130 C112 164, 48 164, 16 130 Z" fill="#ff5a4f" />
        <circle cx="80" cy="130" r="22" fill="#f7f7f7" />
      </g>

      <g id="main-banknote-text" transform="translate(292 54)">
        <text x="0" y="18" className="text-display color-navy" fontSize="16">BANK OF JAJU REPUBLICS</text>
        <text x="0" y="80" className="text-display color-blue" fontSize="64" filter="url(#textShadow)">1000 JRW</text>
        <text x="0" y="126" className="text-display color-navy" fontSize="30" filter="url(#textShadow)">JAJU REPUBLICS WON</text>
        <text x="120" y="162" textAnchor="middle" className="text-korean color-navy" fontSize="18" filter="url(#textShadow)">귤과 바다의 돈</text>
      </g>

      {!minimal && (
        <g id="orange-artwork" transform="translate(570 44)">
        <circle cx="66" cy="56" r="54" fill="#ff9d22" />
        <circle cx="124" cy="102" r="57" fill="#ff9d22" />
        <circle cx="44" cy="154" r="43" fill="#ff7a17" />
        <path d="M118 16 C148 -2, 176 8, 188 30 C158 34, 136 30, 118 16 Z" fill="#2f9f4a" />
        <path d="M20 98 C50 72, 78 82, 90 96 C60 108, 39 105, 20 98 Z" fill="#26863c" />
        <path d="M60 32 C75 58, 84 88, 88 120" fill="none" stroke="#e48118" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
        <path d="M94 82 C108 105, 116 130, 120 146" fill="none" stroke="#e48118" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
        <path d="M46 110 C50 124, 52 138, 52 154" fill="none" stroke="#e45e0f" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        </g>
      )}

      <g id="bottom-left-serial">
        <text x="54" y="298" className="text-display color-navy" fontSize="25" filter="url(#textShadow)">JRW 2026.073</text>
      </g>

      <g id="bottom-right-value">
        <text x="700" y="298" className="text-display color-navy" fontSize="26" filter="url(#textShadow)">1000</text>
      </g>
    </svg>
  );
}
