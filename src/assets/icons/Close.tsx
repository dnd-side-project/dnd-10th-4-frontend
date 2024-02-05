import type { SVGProps } from 'react';
const SvgClose = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <g filter="url(#close_svg__a)">
      <rect width={30} height={30} fill="#F9F9F9" fillOpacity={0.78} rx={15} />
      <path
        fill="#3C3C43"
        fillOpacity={0.6}
        d="M10.049 19.181a.86.86 0 0 0 .006 1.187c.33.324.883.318 1.187.013L15 16.623l3.752 3.752a.853.853 0 0 0 1.187-.007.853.853 0 0 0 .006-1.187l-3.752-3.751 3.752-3.758a.847.847 0 0 0-.006-1.187.853.853 0 0 0-1.187-.006L15 14.23l-3.758-3.751a.853.853 0 0 0-1.187.006c-.324.324-.317.882-.006 1.187L13.8 15.43z"
      />
    </g>
    <defs>
      <filter
        id="close_svg__a"
        width={138.731}
        height={138.731}
        x={-54.366}
        y={-54.366}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={27.183} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_409_1011"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_409_1011"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgClose;
