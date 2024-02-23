import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const style = {
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;
    background: #f2eade;
    cursor: pointer;

    :hover {
      background: #e5dfcc;
    }
  `,
  text: css`
    color: ${COLORS.letterChip2};
    ${textStyles.b4m}
  `,
  header: css`
    height: 2.5rem;
    margin-bottom: 0.5rem;
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
  `,
  leftHeader: css`
    display: flex;
    gap: 0.625rem;
    align-items: center;
  `,
  icon: css`
    cursor: pointer;
  `,
  headerText: css`
    color: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
  `,
  content: css`
    padding-inline: 1rem;
  `,
};

export default style;
