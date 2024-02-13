import type { SVGProps } from 'react';
const SvgDownload = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
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
    <g
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#download_svg__a)"
    >
      <path d="M12 14.25V3.75M20.25 14.25v5.25a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75v-5.25" />
      <path d="M15.75 10.5 12 14.25 8.25 10.5" />
    </g>
    <defs>
      <clipPath id="download_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDownload;
