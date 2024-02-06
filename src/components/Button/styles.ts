import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';

export type ButtonVariant =
  | 'primary'
  | 'primary-outline'
  | 'secondary'
  | 'semi-transparent'
  | 'semi-transparent-unaccent';

export type ButtonSize = 'md' | 'sm';
export type ButtonRounded = 'none' | 'sm' | 'md';

const styles = {
  button: (
    variant: ButtonVariant,
    size: ButtonSize,
    rounded: ButtonRounded,
  ) => css`
    display: flex;
    flex: 1 0;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &:not(:disabled):active {
      box-shadow: 0 2px 10px rgb(0 0 0 / 0.2);
      transform: scale(0.98);
    }

    &:disabled {
      box-shadow: none;
      cursor: not-allowed;
    }

    ${roundedStyles[rounded]}
    ${textStyles.t3}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
  `,
};

const sizeStyles = {
  sm: css`
    padding: 0.75rem 1.25rem;
  `,
  md: css`
    padding: 1rem 1.25rem;
  `,
};

const roundedStyles = {
  none: css`
    border-radius: none;
  `,
  sm: css`
    border-radius: 0.75rem;
  `,
  md: css`
    border-radius: 6.25rem;
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${COLORS.primary};
    color: white;
    box-shadow: 0 8px 16px 0 rgb(13 35 51 / 0.2);

    &:hover {
      background-color: ${COLORS.primaryHover};
    }

    &:disabled {
      background-color: ${COLORS.primaryDisabled};
    }
  `,
  'primary-outline': css`
    background-color: white;
    color: ${COLORS.primary};
    box-shadow: 0 8px 16px 0 rgb(13 35 51 / 0.2);
    outline: 1px solid ${COLORS.primary};

    &:hover {
      outline: 1px solid ${COLORS.primaryHover};
    }

    &:disabled {
      background-color: ${COLORS.gray5};
      color: ${COLORS.gray4};
    }
  `,
  secondary: css`
    background-color: white;
    color: black;
    box-shadow: 0 8px 16px 0 rgb(153 153 153 / 0.2);

    &:hover {
      background-color: ${COLORS.gray6};
    }

    &:disabled {
      background-color: ${COLORS.gray5};
      color: ${COLORS.gray4};
    }
  `,
  'semi-transparent': css`
    background: radial-gradient(
      491.85% 132.88% at 0% 12.5%,
      rgb(255 255 255 / 0.7) 0%,
      rgb(255 255 255 / 0.28) 100%
    );
    color: black;
    box-shadow: 0 8px 16px 0 rgb(153 153 153 / 0.2);
  `,
  'semi-transparent-unaccent': css`
    background: radial-gradient(
      491.85% 132.88% at 0% 12.5%,
      rgb(255 255 255 / 0.7) 0%,
      rgb(255 255 255 / 0.28) 100%
    );
    color: ${COLORS.gray3};
    box-shadow: 0 8px 16px 0 rgb(153 153 153 / 0.2);
  `,
};

export default styles;
