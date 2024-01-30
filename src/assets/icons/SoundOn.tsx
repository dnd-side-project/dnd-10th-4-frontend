import type { SVGProps } from 'react';
const SvgSoundOn = ({
  width = 24,
  height = 24,
  fill = 'currentCOlor',
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
      d="M15 3v18a.75.75 0 0 1-1.21.591L7.242 16.5H3A1.5 1.5 0 0 1 1.5 15V9A1.5 1.5 0 0 1 3 7.5h4.242l6.548-5.092A.75.75 0 0 1 15 3m3 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 1 0 1.5 0v-4.5A.75.75 0 0 0 18 9m3-1.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0v-7.5A.75.75 0 0 0 21 7.5"
    />
  </svg>
);
export default SvgSoundOn;
