import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPencilLine = ({
  width = 24,
  height = 24,
  stroke = '#000',
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
      clipPath="url(#pencilLine_svg__a)"
    >
      <path d="M20.25 20.25H9l-5.202-5.202M15.375 8.625l-9 9" />
      <path d="M9 20.25H4.5a.75.75 0 0 1-.75-.75v-4.19a.75.75 0 0 1 .22-.53L15.53 3.22a.75.75 0 0 1 1.06 0l4.19 4.186a.75.75 0 0 1 0 1.06zM12.75 6 18 11.25" />
    </g>
    <defs>
      <clipPath id="pencilLine_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPencilLine;
