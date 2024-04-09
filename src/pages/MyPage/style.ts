import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const styles = {
  page: css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    min-height: 100svh;
    background-color: white;
  `,
  main: css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 0.25rem;
    box-sizing: border-box;
    margin-top: 2rem;
  `,
  footer: css`
    margin-bottom: 1rem;
    color: ${COLORS.gray3};
    text-align: center;
    ${textStyles.b5m};
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
  loadingSection: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
  `,
};

export default styles;
