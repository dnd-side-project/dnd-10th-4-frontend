import type { SVGProps } from 'react';
const SvgUser = ({
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
      d="M21.65 20.625A.75.75 0 0 1 21 21H3a.75.75 0 0 1-.649-1.125c1.428-2.468 3.628-4.238 6.196-5.077a6.75 6.75 0 1 1 6.906 0c2.568.839 4.768 2.609 6.196 5.077a.75.75 0 0 1 0 .75"
    />
  </svg>
);
export default SvgUser;
