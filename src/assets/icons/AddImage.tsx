import type { SVGProps } from 'react';
const SvgAddImage = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={'none'}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#addImage_svg__a)">
      <path
        fill={fill}
        d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25m3.75 10.5h-3v3a.75.75 0 1 1-1.5 0v-3h-3a.75.75 0 1 1 0-1.5h3v-3a.75.75 0 1 1 1.5 0v3h3a.75.75 0 1 1 0 1.5"
      />
    </g>
    <defs>
      <clipPath id="addImage_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddImage;
