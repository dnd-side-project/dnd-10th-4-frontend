import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const styles = {
  page: css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    background-color: white;
  `,
  main: css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 2rem;
  `,
  list: css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0 1rem;
  `,
  item: css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${textStyles.b4m}
  `,
  value: css`
    display: flex;
    gap: 0.25rem;
    align-items: center;
    color: ${COLORS.gray3};
    cursor: pointer;
  `,
  divider: css`
    width: 100%;
    height: 5px;
    margin: 1rem 0;
    background-color: ${COLORS.gray6};
  `,
  chip: css`
    padding: 0 0.5rem;
    border: 1px solid ${COLORS.primary};
    border-radius: 6.25rem;
    background: rgb(12 140 233 / 0.05);
    color: ${COLORS.primary};
  `,
};

export const bottomSheetStyles = {
  mainSection: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1.125rem 1rem;
    color: black;
  `,
  title: css`
    margin-bottom: 0.75rem;
    ${textStyles.t3}
  `,
  buttonSection: css`
    display: flex;
    width: 100%;
  `,
  description: css`
    margin: 0.75rem 0;
    ${textStyles.description}
  `,
};

export default styles;
