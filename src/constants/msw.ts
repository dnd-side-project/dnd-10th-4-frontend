/** MSW UnhandledHandler 경고에서 제외할 문자열 목록 */
export const SKIP_MSW_WARNING_URL = [
  'src/',
  'node_modules/',
  'chrome-extension://',
  'cdn.jsdelivr.net/gh/',
  'sb-common-assets/',
  '.storybook/',
] as const;
