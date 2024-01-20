import { css } from '@emotion/react';
import clsx from 'clsx';

const styles = {
  button: (size: 'small' | 'medium' | 'large') => css`
    padding: ${clsx({
      '1rem': size === 'small',
      '2rem': size === 'medium',
      '3rem': size === 'large',
    })};
    color: hotpink;

    &:hover {
      color: blue;
    }
  `,
};

export default styles;
