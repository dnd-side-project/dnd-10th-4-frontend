import type { SVGProps } from 'react';
const SvgXmark = ({
  width = 12,
  height = 12,
  fill = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    width={width}
    height={height}
    {...props}
  >
    <path
      fill={fill}
      fillOpacity={0.6}
      d="M1.049 9.181a.86.86 0 0 0 .006 1.187c.33.324.883.317 1.187.013L6 6.623l3.751 3.751a.853.853 0 0 0 1.188-.006.853.853 0 0 0 .006-1.187L7.193 5.43l3.752-3.758a.847.847 0 0 0-.007-1.187.853.853 0 0 0-1.187-.007L6 4.23 2.242.478a.853.853 0 0 0-1.187.007c-.324.324-.317.882-.006 1.187L4.8 5.43z"
    />
  </svg>
);
export default SvgXmark;
