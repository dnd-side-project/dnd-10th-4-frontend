import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRightArrow = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 19.5 7.5-7.5L9 4.5"
    />
  </svg>
);
export default SvgRightArrow;
