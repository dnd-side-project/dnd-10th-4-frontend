import { css } from '@emotion/react';

const styles = {
  page: css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    text-align: center;
  `,
  main: css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 0.25rem;
    color: white;
  `,
  headerButton: css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 1rem;
  `,
  buttonSection: css`
    margin-bottom: 1.25rem;
    padding: 0 1rem;
  `,
  button: css`
    width: 100%;
  `,
};

export const carouselStyles = {
  viewport: css`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `,
  container: css`
    display: flex;
  `,
  slide: css`
    flex: 0 0 100%;
  `,
  button: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:active {
      transform: translateY(-50%) scale(0.95);
    }
  `,
};

export default styles;
