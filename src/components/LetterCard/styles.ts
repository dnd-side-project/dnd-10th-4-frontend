import { css } from '@emotion/react';
import LetterBackground from '@/assets/letterBackground.png';

export type Backgroundtype = 'primary' | 'white';

const style = {
  card: (isOpen: boolean, background: Backgroundtype) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 600px;
    height: ${isOpen ? '27rem' : 'auto'};
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: ${background === 'white' && 'white'};
    background-image: ${background === 'primary' && `url(${LetterBackground})`};
  `,
};

export default style;
