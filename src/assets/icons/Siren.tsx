import type { SVGProps } from 'react';
const SvgSiren = ({
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
    <g
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#siren_svg__a)"
    >
      <path d="M12 1.5V.75M18.75 3.75 19.5 3M5.25 3.75 4.5 3M4.5 15.75V12a7.5 7.5 0 0 1 7.557-7.5c4.135.03 7.443 3.458 7.443 7.594v3.656" />
      <path d="M12.75 7.5c2.128.357 3.75 2.27 3.75 4.5M20.25 15.75H3.75a.75.75 0 0 0-.75.75v2.25c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V16.5a.75.75 0 0 0-.75-.75" />
    </g>
    <defs>
      <clipPath id="siren_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiren;
