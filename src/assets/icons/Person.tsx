import type { SVGProps } from 'react';
const SvgPerson = ({
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
      d="M4.5 21S3 21 3 19.5s1.5-6 9-6 9 4.5 9 6-1.5 1.5-1.5 1.5zm7.5-9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
    />
  </svg>
);
export default SvgPerson;
