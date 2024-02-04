import { css } from '@emotion/react';

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
};

export default style;
