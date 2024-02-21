import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

export type TabsVariant = 'primary';

const styles = {
  list: (variant: TabsVariant) => css`
    display: flex;
    width: 100%;
    height: 47.5px;

    ${variantStyles[variant].list}
  `,
  trigger: (variant: TabsVariant) => css`
    flex-grow: 1;
    font-size: 0.875rem;
    cursor: pointer;

    ${variantStyles[variant].trigger};
  `,
};

const variantStyles = {
  primary: {
    list: css`
      border: 1px solid rgb(255 255 255 / 0.5);
      border-radius: 6.25rem;
      background: linear-gradient(
        91deg,
        rgb(241 241 241 / 0.48) 19.56%,
        rgb(241 241 241 / 0.18) 98.34%
      );
      background-clip: padding-box;
    `,
    trigger: css`
      margin: 1px;
      padding: 0.75rem 1rem;
      border: 1px solid transparent;
      border-radius: 6.25rem;
      background: none;
      color: ${COLORS.gray3};
      transition: all 0.25s ease;

      &:focus {
        outline: none;
      }

      &[data-state='active'] {
        border: 0.5px solid rgb(0 0 0 / 0.04);
        border-radius: 6.25rem;
        background: white;
        color: black;
      }

      &[data-state='active']:last-child {
        box-shadow:
          0 3px 1px 0 rgb(0 0 0 / 0.04),
          0 3px 8px 0 rgb(0 0 0 / 0.12);
      }
    `,
  },
};

export default styles;
