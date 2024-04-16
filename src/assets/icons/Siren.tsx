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
    <path
      fill={stroke}
      d="M11.25 1.5V.75a.75.75 0 1 1 1.5 0v.75a.75.75 0 1 1-1.5 0m7.5 3a.75.75 0 0 0 .53-.22l.75-.75a.75.75 0 1 0-1.06-1.06l-.75.75a.75.75 0 0 0 .53 1.28M4.72 4.28a.75.75 0 1 0 1.06-1.06l-.75-.75a.75.75 0 1 0-1.06 1.06zM21.75 16.5v2.25a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V16.5a1.5 1.5 0 0 1 1.5-1.5v-3a8.25 8.25 0 0 1 8.313-8.25c4.514.034 8.187 3.777 8.187 8.344V15a1.5 1.5 0 0 1 1.5 1.5m-9.124-8.26c1.78.299 3.124 1.915 3.124 3.76a.75.75 0 1 0 1.5 0c0-2.569-1.882-4.822-4.376-5.24a.75.75 0 1 0-.248 1.48m7.624 10.51V16.5H3.75v2.25z"
    />
  </svg>
);
export default SvgSiren;
