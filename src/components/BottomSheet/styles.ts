import { css } from '@emotion/react';

const style = {
  paper: {
    borderRadius: '16px 16px 0px 0px',
    margin: '0 auto',
    overflowY: 'hidden' as const,
    maxWidth: '600px',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  header: css`
    width: 60px;
    height: 4px;
    margin: 8px auto;
    border-radius: 100px;
    background-color: var(--Gray-5, #e0e0e0);
  `,

  content: css`
    display: flex;
    flex-direction: column;
  `,
};

export default style;
