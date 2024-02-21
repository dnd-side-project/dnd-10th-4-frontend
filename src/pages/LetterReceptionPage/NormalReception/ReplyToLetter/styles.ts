import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';

const style = {
  text: css`
    ${textStyles.l1m};
  `,
  letter: css`
    overflow-y: auto;
    max-height: calc(100dvh - 60px - 80px - 16px);
  `,
  card: css`
    margin-bottom: 2.5rem;
  `,
  navbar: css`
    position: fixed;
    bottom: 0;
    width: 96vw;
    max-width: 580px;
    padding-inline: 0;
  `,
};

export default style;
