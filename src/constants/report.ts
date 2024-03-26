export const REPORT_TYPE_DICT = {
  ABUSE: '욕설',
  ADVERTISE: '광고 및 도배',
  SEXUAL_CONTENT: '음란성 게시물',
  ILLEGAL_CONTENT: '그 외 부적절한 내용',
} as const;

export type ReportType = keyof typeof REPORT_TYPE_DICT;
