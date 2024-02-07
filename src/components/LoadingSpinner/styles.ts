import { css } from '@emotion/react';

const styles = {
  spinner: (size: string, weight: string, color: string) => css`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    width: ${size};
    height: ${size};
    border: ${weight} solid ${color};
    border-top-color: transparent;
    border-radius: 9999px;
    animation: spin 1s linear infinite;
  `,
};

export default styles;
