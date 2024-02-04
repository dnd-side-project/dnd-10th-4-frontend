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
  header: css`
    height: 2.5rem;
    margin-top: 1.25rem;
    margin-bottom: 1rem;

    & > div:nth-of-type(1) {
      cursor: pointer;
    }
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

    span {
      ${textStyles.t4};
    }
  `,
  ReceiverBoxUnSelect: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid white;
    border-radius: 0.5rem;
    background: rgb(255 255 255 / 0.38);
    letter-spacing: -0.0035rem;
    cursor: pointer;

    span {
      color: ${COLORS.gray3};
      ${textStyles.b4m};
    }
  `,
  ReceiverBoxSelect: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 0.5rem;
    padding: 0.4375rem 0.75rem;
    border: 1px solid white;
    border-radius: 0.5rem;
    background: ${COLORS.gray6};
    letter-spacing: -0.0035rem;
    cursor: pointer;

    div {
      display: flex;
      gap: 0.625rem;
    }

    span {
      padding-inline: 0.5rem;
      border: 1px solid ${COLORS.gray4};
      border-radius: 1.25rem;
      background: ${COLORS.gray5};
      color: ${COLORS.gray1};
      font-weight: 500;
      font-size: 14px;
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
    ${textStyles.l1m}
  `,
  textCount: css`
    display: flex;
    justify-content: flex-end;

    ${textStyles.c1m}
    & > span:nth-of-type(1) {
      color: ${COLORS.gray1};
    }

    & > span:nth-of-type(2) {
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
  modalContainer: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-inline: 1rem;
    margin-top: 3rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    button {
      padding-inline: 40px;
    }
  `,
  bottomSheetContainer: css`
    padding-inline: 1rem;
  `,
  bottomSheetTitle: (rotaion: number) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.75rem;

    h2 {
      ${textStyles.t2};
    }

    svg {
      cursor: pointer;
      transition: transform 0.5s;
      transform: rotate(${rotaion}deg);
    }
  `,
  label: css`
    padding-block: 0.5rem;
    ${textStyles.t3};
  `,
  slider: css`
    color: ${COLORS.primary};

    .MuiSlider-rail {
      color: ${COLORS.gray5};
    }

    .MuiSlider-thumb {
      width: 1rem;
      height: 1rem;
      border: 1px solid ${COLORS.gray4};
      background: ${COLORS.gray6};
    }

    .MuiSlider-valueLabel {
      width: 1.5rem;
      height: 1.5rem;
      padding: 0;
      border-radius: 50% 50% 50% 0;
      background: unset;
      background-color: ${COLORS.primary};
      font-size: 0.8rem;
      line-height: 1.5;
      transform: translate(50%, -100%) rotate(-45deg) scale(0);
      transform-origin: bottom left;

      &::before {
        display: none;
      }

      &.MuiSlider-valueLabelOpen {
        transform: translate(50%, -100%) rotate(-45deg) scale(1);
      }

      & > * {
        transform: rotate(45deg);
      }
    }
  `,
  age: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${COLORS.gray3};
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.5rem;
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
      font-size: 0.75rem;
      line-height: 1rem;
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
      cursor: pointer;
      flex: 1;
      padding: 0.75rem 1.25rem;
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
  navbar: css`
    padding-inline: 0;
  `,
  iconContainer: css`
    flex-grow: 0;
    margin-left: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  `,
};

export default style;
