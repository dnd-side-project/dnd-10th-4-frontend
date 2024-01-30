import type { SVGProps } from 'react';
const SvgHourGlassLow = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    {...props}
  >
    <path
      fill={fill}
      d="M18.75 7.091V3.75a1.5 1.5 0 0 0-1.5-1.5H6.75a1.5 1.5 0 0 0-1.5 1.5v3.375a1.5 1.5 0 0 0 .6 1.2L10.75 12l-4.9 3.675a1.5 1.5 0 0 0-.6 1.2v3.375a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-3.341a1.5 1.5 0 0 0-.595-1.196L13.245 12l4.91-3.712a1.5 1.5 0 0 0 .595-1.197M16.71 16.5H7.25L12 12.938zm.54-9.409L12 11.063 6.75 7.124V3.75h10.5z"
    />
  </svg>
);
export default SvgHourGlassLow;
