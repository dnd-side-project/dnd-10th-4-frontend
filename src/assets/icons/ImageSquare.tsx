import type { SVGProps } from 'react';
const SvgImageSquare = ({
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
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3m-15 1.5h15v7.254L17.185 9.44a1.5 1.5 0 0 0-2.12 0L5.003 19.5H4.5zm3 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
    />
  </svg>
);
export default SvgImageSquare;
