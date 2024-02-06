import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100%;
    color: white;
    text-align: center;
  `,
  input: css`
    padding: 0.8125rem 1rem;
    border: 1px solid rgb(255 255 255 / 0.3);
    border-radius: 0.75rem;
    background: radial-gradient(
      234.35% 120.74% at 6.21% 10.17%,
      rgb(255 255 255 / 0.56) 0%,
      rgb(255 255 255 / 0.24) 100%
    );
    color: black;
    outline: none;
    text-align: center;
    backdrop-filter: blur(7.5px);

    ${textStyles.t3}
  `,
};

export default styles;
