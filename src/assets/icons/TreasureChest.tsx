import type { SVGProps } from 'react';
const SvgTreasureChest = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
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
      fill={fill}
      d="M5 4h14a3 3 0 0 1 3 3v4h-7v-1H9v1H2V7a3 3 0 0 1 3-3m6 7h2v2h-2zm-9 1h7v1l2 2h2l2-2v-1h7v8H2z"
    />
  </svg>
);
export default SvgTreasureChest;
