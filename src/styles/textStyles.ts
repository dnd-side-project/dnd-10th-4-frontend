import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

const textStyles = {
  t1: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  `,
  t2: css`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  `,
  t3: css`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  `,
  t4: css`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  `,
  b1m: css`
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
  `,
  b2m: css`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  `,
  b3m: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  `,
  b4m: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  `,
  b1R: css`
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
  `,
  b2R: css`
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  `,
  b3R: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  `,
  b4R: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  `,
  c1sb: css`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  `,
  c1m: css`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  `,
  c1r: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  `,
  l1m: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  description: css`
    color: ${COLORS.gray4};
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  logo: css`
    font-weight: 700;
    font-style: normal;
    font-size: 1.5rem;
    font-family: 'Jalnan OTF';
    line-height: 2.125rem;
  `,
};

export default textStyles;
