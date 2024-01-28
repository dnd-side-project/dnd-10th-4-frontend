import type { SVGProps } from 'react';
const SvgSoundMaxFill = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  stroke = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    {...props}
  >
    <path
      fill={fill}
      d="M4.158 13.93a3.75 3.75 0 0 1 0-3.86 1.5 1.5 0 0 1 .993-.7l1.693-.34a.45.45 0 0 0 .258-.152L9.17 6.395c1.182-1.42 1.774-2.13 2.301-1.938C12 4.647 12 5.572 12 7.42v9.162c0 1.847 0 2.77-.528 2.962-.527.19-1.119-.52-2.301-1.938L7.1 15.122a.45.45 0 0 0-.257-.153l-1.693-.34a1.5 1.5 0 0 1-.992-.7"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeWidth={2}
      d="M14.536 8.464a5 5 0 0 1 .027 7.044m4.094-9.165a8 8 0 0 1 .044 11.27"
    />
  </svg>
);
export default SvgSoundMaxFill;
