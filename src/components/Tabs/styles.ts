import { css } from '@emotion/react';

export type TabsVariant = 'primary';

const styles = {
  list: (variant: TabsVariant) => css`
    display: flex;
    width: 100%;

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
      border: 1px solid rgb(255 255 255 / 0.3);
      border-radius: 0.75rem;
      background: radial-gradient(
        7463.97% 124.02% at 1.68% 0%,
        rgb(255 255 255 / 0.7) 0%,
        rgb(255 255 255 / 0.1) 100%
      );
      background-clip: padding-box;
    `,
    trigger: css`
      margin: -1px;
      padding: 0.75rem 1rem;
      border: 1px solid transparent;
      border-radius: 0.75rem;
      background: none;
      color: #828282;

      &:focus {
        outline: none;
      }

      &[data-state='active'] {
        border: 1px solid rgb(255 255 255 / 0.3);
        background: linear-gradient(
          100deg,
          rgb(255 255 255 / 0.5) 6.09%,
          rgb(255 255 255 / 0.5) 100%,
          rgb(255 255 255 / 0.3) 100%
        );
        color: black;
        backdrop-filter: blur(2px);
      }
    `,
  },
};

export default styles;
