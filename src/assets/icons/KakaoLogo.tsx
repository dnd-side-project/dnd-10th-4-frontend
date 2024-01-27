import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKakaoLogo = ({
  width = 24,
  height = 24,
  fill = '#000',
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
      fillRule="evenodd"
      d="M12 .8C5.372.8 0 4.95 0 10.07c0 3.184 2.078 5.99 5.242 7.66l-1.331 4.863c-.118.43.374.772.751.523l5.836-3.852q.738.074 1.502.076c6.627 0 12-4.15 12-9.27S18.627.8 12 .8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKakaoLogo;
