import type { SVGProps } from 'react';
const SvgLeftArrow = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  strokeWidth = 1.5,
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
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M15 4.5 7.5 12l7.5 7.5"
    />
  </svg>
);
export default SvgLeftArrow;
