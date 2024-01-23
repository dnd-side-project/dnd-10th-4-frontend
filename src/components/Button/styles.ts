import { css } from '@emotion/react';

export type ButtonVariant = 'primary' | 'primary-unaccent' | 'white';

const styles = {
  button: (variant: ButtonVariant) => css`
    display: flex;
    flex: 1 0;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 3.8rem;
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;

    ${variantStyles[variant]}
  `,
};

const variantStyles = {
  primary: css`
    background: radial-gradient(
      491.85% 132.88% at 0% 12.5%,
      rgb(255 255 255 / 0.7) 0%,
      rgb(255 255 255 / 0.28) 100%
    );
    color: black;
  `,
  'primary-unaccent': css`
    background: radial-gradient(
      491.85% 132.88% at 0% 12.5%,
      rgb(255 255 255 / 0.7) 0%,
      rgb(255 255 255 / 0.28) 100%
    );
    color: #828282;
  `,
  white: css`
    background-color: white;
    color: black;
  `,
};

export default styles;
