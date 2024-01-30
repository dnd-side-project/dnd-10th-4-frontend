import type { SVGProps } from 'react';
const SvgArrowClockWise = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
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
    <path
      fill={fill}
      d="M22.5 5.25v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.53-1.28l1.593-1.594-.989-.905-.023-.023a7.5 7.5 0 1 0-.157 10.761.75.75 0 1 1 1.031 1.09A8.95 8.95 0 0 1 12 21h-.124a9 9 0 1 1 6.476-15.374l1.024.937 1.843-1.846a.75.75 0 0 1 1.281.534"
    />
  </svg>
);
export default SvgArrowClockWise;
