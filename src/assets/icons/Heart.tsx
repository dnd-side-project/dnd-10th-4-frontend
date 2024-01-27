import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeart = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#heart_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20.25S2.25 15 2.25 8.813A5.063 5.063 0 0 1 7.313 3.75c2.117 0 3.931 1.154 4.687 3 .756-1.846 2.57-3 4.688-3a5.06 5.06 0 0 1 5.062 5.063C21.75 15 12 20.25 12 20.25"
      />
    </g>
    <defs>
      <clipPath id="heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeart;
