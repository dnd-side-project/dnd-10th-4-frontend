import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTreasureChestOutline = ({
  width = 24,
  height = 24,
  fill = '#4f4f4f',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <path
      fill={fill}
      d="M2.75 20h20V7c0-.8-.32-1.56-.88-2.12S20.55 4 19.75 4h-14c-.8 0-1.56.32-2.12.88S2.75 6.2 2.75 7zm18-9h-5V9h-6v2h-5V7c0-.26.11-.5.29-.71.21-.18.45-.29.71-.29h14c.27 0 .5.11.71.29.19.21.29.45.29.71zm-5 2h5v5h-16v-5h5l2 2h2zm-4-2h2v2h-2z"
    />
  </svg>
);
export default SvgTreasureChestOutline;
