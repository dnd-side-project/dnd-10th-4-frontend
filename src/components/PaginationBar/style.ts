import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const styles = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${COLORS.gray4};
  `,
  pageItem: (selected: boolean) => css`
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 6.25rem;
    cursor: pointer;
    transition: all 0.2s ease;

    ${selected
      ? css`
          background: linear-gradient(
              0deg,
              rgb(0 0 0 / 0.2) 0%,
              rgb(0 0 0 / 0.2) 100%
            ),
            #0c8ce9;
          color: white;
        `
      : css`
          background-color: inherit;
          color: ${COLORS.gray4};

          &:hover {
            background-color: rgb(0 0 0 / 0.04);
          }
        `}
    ${textStyles.t3}
  `,
};

export default styles;
