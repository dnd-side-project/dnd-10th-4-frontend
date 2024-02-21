import type { SVGProps } from 'react';
const SvgScrolLetter = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 25 24"
    {...props}
  >
    <g clipPath="url(#scrolLetter_svg__a)">
      <path
        fill={stroke}
        d="M21.2 15.9a.75.75 0 0 0-.45-.15H20V6a3 3 0 0 0-3-3H4.25a3 3 0 0 0-3 3c0 1.276.942 2.02 1.05 2.1a.75.75 0 0 0 .907-1.193C3.203 6.902 2.75 6.538 2.75 6a1.5 1.5 0 0 1 3 0v12a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3c0-1.276-.937-2.02-1.05-2.1M10.25 9h6a.75.75 0 1 1 0 1.5h-6a.75.75 0 1 1 0-1.5m-.75 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1-.75-.75m9.75 6.75h-8.652c.264-.456.403-.973.402-1.5 0-.254-.038-.507-.113-.75h9.562c.186.206.293.472.303.75a1.5 1.5 0 0 1-1.502 1.5"
      />
    </g>
    <defs>
      <clipPath id="scrolLetter_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScrolLetter;
