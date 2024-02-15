import type { SVGProps } from 'react';
const SvgMale = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  children,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    width={width}
    height={height}
    {...props}
  >
    <path
      fill={fill}
      d="M14.25 16.5a5.256 5.256 0 0 1 5.25 5.25A5.256 5.256 0 0 1 14.25 27 5.256 5.256 0 0 1 9 21.75a5.256 5.256 0 0 1 5.25-5.25m0-3C9.69 13.5 6 17.19 6 21.75S9.69 30 14.25 30s8.25-3.69 8.25-8.25c0-1.74-.54-3.345-1.455-4.68L27 11.13V15h3V6h-9v3h3.87l-5.955 5.955A8.16 8.16 0 0 0 14.25 13.5"
    />
    {children}
  </svg>
);
export default SvgMale;
