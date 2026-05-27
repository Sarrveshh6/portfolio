/** Ashoka Chakra — 24 spokes, navy blue */

const SPOKES = 24;
const CX = 100;
const CY = 100;
const OUTER_R = 94;
const SPOKE_R = 86;

export default function AshokaChakra({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      role="presentation"
    >
      <circle
        cx={CX}
        cy={CY}
        r={OUTER_R}
        fill="none"
        stroke="#000080"
        strokeWidth="3.5"
      />
      {Array.from({ length: SPOKES }, (_, i) => {
        const deg = (i * 360) / SPOKES - 90;
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={CX}
            y1={CY}
            x2={CX + SPOKE_R * Math.cos(rad)}
            y2={CY + SPOKE_R * Math.sin(rad)}
            stroke="#000080"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={CX} cy={CY} r="12" fill="none" stroke="#000080" strokeWidth="2.5" />
    </svg>
  );
}
