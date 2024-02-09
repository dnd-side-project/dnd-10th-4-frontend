import { css } from '@emotion/react';
import LetterBackground from '@/assets/letterBackground.png';

export type Backgroundtype = 'primary' | 'white';

const style = {
  card: (isOpen: boolean, background: Backgroundtype) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 600px;
    height: ${isOpen ? '26rem' : 'auto'};
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: ${background === 'white' && 'white'};
    background-image: ${background === 'primary' && `url(${LetterBackground})`};
    background-size: auto;
  `,
};

export default style;
