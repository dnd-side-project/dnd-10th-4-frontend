import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLeftArrow = ({
  width = 24,
  height = 24,
  fill = '#fff',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 4.5 7.5 12l7.5 7.5"
    />
  </svg>
);
export default SvgLeftArrow;
