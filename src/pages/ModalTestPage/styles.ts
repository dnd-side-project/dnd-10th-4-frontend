import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    min-height: 100svh;
    padding: 1rem;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.25rem 0 0;
    color: white;
  `,
  from: css`
    display: inline-block;
    margin-right: 0.5rem;
    color: var(--gray1, #333);
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  nickname: css`
    color: ${COLORS.gray2};
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
  `,
  glassLabel: css`
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 6.25rem;
    background-color: white;
    color: black;
  `,
  mainSection: css`
    flex-grow: 1;
  `,
  card: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    padding: 1.25rem 1.25rem 2.5rem;
    border-radius: 0.5rem;
    background-color: white;
  `,
  paragraph: css`
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  date: css`
    color: var(--gray4, #bdbdbd);
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: right;
  `,
  bottomCard: css`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: white;
    color: var(--gray4, #bdbdbd);
    cursor: pointer;
    user-select: none;
  `,
};

export default styles;
