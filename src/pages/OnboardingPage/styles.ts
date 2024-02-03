import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';

const styles = {
  input: css`
    border-radius: 0.75rem;
    padding: 0.8125rem 1rem;
    border: 1px solid rgb(255 255 255 / 0.3);
    color: black;
    text-align: center;
    background: radial-gradient(
      234.35% 120.74% at 6.21% 10.17%,
      rgb(255 255 255 / 0.56) 0%,
      rgb(255 255 255 / 0.24) 100%
    );
    backdrop-filter: blur(7.5px);
    outline: none;

    ${textStyles.t3}
  `,
};

export default styles;
