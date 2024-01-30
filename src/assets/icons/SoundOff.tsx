import type { SVGProps } from 'react';
const SvgSoundOff = ({
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
      d="M17.25 14.25v-4.5a.75.75 0 1 1 1.5 0v4.5a.75.75 0 1 1-1.5 0M21 7.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0v-7.5A.75.75 0 0 0 21 7.5M5.055 3.246a.75.75 0 1 0-1.11 1.008L6.895 7.5H3A1.5 1.5 0 0 0 1.5 9v6A1.5 1.5 0 0 0 3 16.5h4.242l6.548 5.092A.75.75 0 0 0 15 21v-4.585l3.945 4.34a.75.75 0 1 0 1.11-1.01zm8.64 7.274A.75.75 0 0 0 15 10.015V3a.75.75 0 0 0-1.21-.592l-3.736 2.907A.75.75 0 0 0 9.96 6.41z"
    />
  </svg>
);
export default SvgSoundOff;
