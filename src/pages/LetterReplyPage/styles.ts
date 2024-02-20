import { css } from '@emotion/react';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-inline: 1rem;
  `,
  letter: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  loadingSpinner: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
  `,
};

export default style;
