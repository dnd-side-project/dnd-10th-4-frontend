import type { SVGProps } from 'react';
const SvgImageSquare = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#4F4F4F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2" />
      <path d="M15 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3 9l3.086 3.086a2 2 0 0 0 2.828 0L18 3" />
    </g>
  </svg>
);
export default SvgImageSquare;
