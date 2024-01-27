import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLeftArrow = ({ ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M15 4.5 7.5 12l7.5 7.5"
    />
  </svg>
);
export default SvgLeftArrow;
