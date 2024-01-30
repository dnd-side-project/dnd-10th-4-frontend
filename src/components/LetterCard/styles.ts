import { css } from '@emotion/react';

const style = {
  card: (isOpen: boolean) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 600px;
    height: ${isOpen ? '27rem' : 'auto'};
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: white;
  `,
};

export default style;
