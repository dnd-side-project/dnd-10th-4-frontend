import type { SVGProps } from 'react';
const SvgTrashCan = ({
  width = 24,
  height = 24,
  fill = 'currentCOlor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#trashCan_svg__a)">
      <path
        fill={fill}
        d="M20.25 4.5H16.5v-.75a2.25 2.25 0 0 0-2.25-2.25h-4.5A2.25 2.25 0 0 0 7.5 3.75v.75H3.75a.75.75 0 0 0 0 1.5h.75v13.5A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5V6h.75a.75.75 0 1 0 0-1.5M10.5 15.75a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 1.5 0zm4.5 0a.75.75 0 1 1-1.5 0v-6a.75.75 0 1 1 1.5 0zM15 4.5H9v-.75A.75.75 0 0 1 9.75 3h4.5a.75.75 0 0 1 .75.75z"
      />
    </g>
    <defs>
      <clipPath id="trashCan_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrashCan;
