import { css } from '@emotion/react';

const style = {
  modalHeader: css`
    margin-block: 0.5rem;
  `,
  modalContainer: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    margin-inline: 1rem;

    div {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

    button {
      padding-inline: 3.75rem;
    }
  `,
};

export default style;
