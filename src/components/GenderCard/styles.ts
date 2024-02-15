import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

export type CardVariant = 'primary' | 'secondary';

const styles = {
  card: (variant: CardVariant, selected: boolean) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6.25rem;
    border-radius: 0.75rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s;

    ${variantStyles[variant].card(selected)}
  `,
  iconCircle: (variant: CardVariant, selected: boolean) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: all 0.2s;

    ${variantStyles[variant].iconCircle(selected)}
  `,
};

const variantStyles = {
  primary: {
    card: (selected: boolean) => css`
      border: 1px solid rgb(255 255 255 / 0.3);
      background: radial-gradient(
        234.35% 120.74% at 6.21% 10.17%,
        rgb(255 255 255 / 0.56) 0%,
        rgb(255 255 255 / 0.4) 100%
      );
      color: black;
      backdrop-filter: blur(7.5px);

      ${selected &&
      css`
        background-color: white;
      `}
    `,
    iconCircle: (selected: boolean) => css`
      border: 1px solid rgb(255 255 255 / 0.3);
      color: ${COLORS.gray3};
      backdrop-filter: blur(2px);

      ${selected &&
      css`
        background-color: rgb(12 140 233 / 0.1);
        color: ${COLORS.primary};
      `};
    `,
  },
  secondary: {
    card: (selected: boolean) => css`
      border: 1px solid ${COLORS.gray5};
      background-color: white;
      color: black;
      backdrop-filter: blur(7.5px);

      ${selected &&
      css`
        border-color: ${COLORS.primary};
        background-color: ${COLORS.primaryLight};
      `}
    `,
    iconCircle: (selected: boolean) => css`
      background-color: ${COLORS.gray6};
      color: black;

      ${selected &&
      css`
        background-color: ${COLORS.primary};
        color: white;
      `}
    `,
  },
} as const;

export default styles;
