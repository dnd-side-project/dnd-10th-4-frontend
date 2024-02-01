import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  headerStyle: css`
    height: 2.5rem;
    margin-top: 1.25rem;
    margin-bottom: 1rem;
  `,
  contentWrapper: css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-inline: 0.5rem;
  `,
  ReceiverContainer: css`
    display: flex;
    align-items: center;

    p {
      ${textStyles.t4};
    }
  `,
  ReceiverBox: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--white, #fff);
    border-radius: 0.5rem;
    background: rgb(255 255 255 / 0.38);
    letter-spacing: -0.0035rem;
    cursor: pointer;

    p {
      color: ${COLORS.gray3};
      ${textStyles.b4m};
    }
  `,
  caretDown: (isOpen: boolean) => css`
    color: ${COLORS.gray2};
    transition: transform 0.5s;
    transform: ${isOpen ? 'rotate(180deg)' : 'none'};
  `,
  textarea: css`
    border: none;
    background: none;
    outline: none;
    resize: none;
  `,
  textCount: css`
    display: flex;
    justify-content: flex-end;

    ${textStyles.c1m}
    & > p:nth-of-type(1) {
      color: ${COLORS.gray1};
    }

    & > p:nth-of-type(2) {
      color: ${COLORS.gray4};
    }
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 2.5rem;
    ${textStyles.c1r}
    color: ${COLORS.gray4};
  `,
};

export default style;
