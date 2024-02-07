import type { SVGProps } from 'react';
const SvgFemale = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
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
      d="M26.25 14.25C26.25 9.69 22.56 6 18 6s-8.25 3.69-8.25 8.25c0 4.05 2.91 7.395 6.75 8.1v3.15h-3v3h3v3h3v-3h3v-3h-3v-3.15c3.84-.705 6.75-4.05 6.75-8.1m-13.5 0A5.256 5.256 0 0 1 18 9a5.256 5.256 0 0 1 5.25 5.25A5.256 5.256 0 0 1 18 19.5a5.256 5.256 0 0 1-5.25-5.25"
    />
  </svg>
);
export default SvgFemale;
