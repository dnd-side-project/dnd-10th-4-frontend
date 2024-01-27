import type { SVGProps } from 'react';
const SvgRightArrow = ({
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
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 19.5 7.5-7.5L9 4.5"
    />
  </svg>
);
export default SvgRightArrow;
