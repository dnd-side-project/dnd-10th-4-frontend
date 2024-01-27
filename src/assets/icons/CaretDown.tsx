import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCaretDown = ({
  width = 24,
  height = 24,
  stroke = '#BDBDBD',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <g clipPath="url(#caretDown_svg__a)">
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 15 12 7.5l7.5 7.5"
      />
    </g>
    <defs>
      <clipPath id="caretDown_svg__a">
        <path fill="#fff" d="M24 24H0V0h24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCaretDown;
