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
  bottomSheetTitle: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.75rem;

    h2 {
      ${textStyles.t2}
    }

    svg {
      cursor: pointer;
    }
  `,
  label: css`
    padding-block: 0.5rem;
    ${textStyles.t3};
  `,
  slider: css`
    color: #0c8ce9;

    .MuiSlider-rail {
      color: ${COLORS.gray5};
    }

    .MuiSlider-thumb {
      width: 1rem;
      height: 1rem;
      border: 1px solid ${COLORS.gray4};
      background: ${COLORS.gray6};
    }
  `,
  age: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${COLORS.gray3};
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
  `,
  genderChip: css`
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    button {
      flex: 1;
      color: ${COLORS.gray1};
      font-weight: 700;
      font-style: normal;
      font-size: 12px;
      line-height: 16px;
    }
  `,
  concernChip: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-block: 1rem;
  `,
  buttonContainer: css`
    display: flex;

    button {
      flex: 1;
      padding: 12px 20px;
      border: 0;
      ${textStyles.t3}
    }

    & > button:nth-of-type(1) {
      background-color: ${COLORS.gray5};
      color: ${COLORS.gray1};
    }

    & > button:nth-of-type(2) {
      background-color: ${COLORS.primary};
      color: white;
    }
  `,
};

export default style;
