import type { SVGProps } from 'react';
const SvgImageSquare = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#imageSquare_svg__a)"
    >
      <path d="M19.5 20.25h-15a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75" />
      <path d="M9 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5.314 3.75l10.28 10.28a.75.75 0 0 0 1.061 0l3.595-3.595" />
    </g>
    <defs>
      <clipPath id="imageSquare_svg__a">
        <path fill="#fff" d="M0 24h24V0H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgImageSquare;
