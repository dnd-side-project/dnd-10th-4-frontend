import type { SVGProps } from 'react';
const SvgCopy = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={width}
    height={height}
    {...props}
  >
    <path
      fill={stroke}
      d="M15 5.625v11.25a.624.624 0 0 1-.625.625H3.125a.625.625 0 0 1-.625-.625V5.625A.625.625 0 0 1 3.125 5h11.25a.625.625 0 0 1 .625.625M16.875 2.5H5.625a.625.625 0 0 0 0 1.25H16.25v10.625a.624.624 0 1 0 1.25 0V3.125a.625.625 0 0 0-.625-.625"
    />
  </svg>
);
export default SvgCopy;
