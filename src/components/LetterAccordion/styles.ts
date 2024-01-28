import { css } from '@emotion/react';

export type letterAccordionType = 'inbox' | 'send';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: hidden;
    height: 100%;
    padding-inline: 0.625rem;
  `,
  contentText: (
    isOpen: boolean,
    line: number,
    currentLine: number,
    imgUrl?: string,
  ) => css`
    position: relative;
    height: ${isOpen ? `${currentLine * 1.225}rem` : `${line * 1.225}rem`};
    margin-bottom: ${imgUrl && isOpen && '3.75rem'};
    color: var(--kakao-logo, #000);
    font-weight: 400;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 140%;
    transition: height 1s ease-in-out;
  `,
  openText: css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  `,
  originalText: (line: number) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */
  `,
  date: (type: letterAccordionType) => css`
    color: #888;
    font-weight: 400;
    font-style: normal;
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: ${type === 'send' ? 'end' : 'start'};
  `,
  arrow: (isOpen: boolean) => css`
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 1s;
    transform: ${isOpen ? 'rotate(180deg)' : 'none'};
  `,
  bottom: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  line: css`
    width: 100%;
    max-width: 37.5rem;
    height: 0.0625rem;
    background: #e0e0e0;
  `,
  button: css`
    display: flex;
    gap: 0.3125rem;
    align-items: center;
    padding-block: 0.75rem;
    color: var(--Gray-4, #bdbdbd);
    font-weight: 500;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1rem;
    cursor: pointer;
  `,
  img: (currentLine: number) => css`
    position: relative;
    top: ${currentLine * 1.25 + 1.25}rem;
    left: 1rem;
    width: 3.4375rem;
    height: 4.0625rem;
    padding: 0.324rem 0.324rem 0.972rem;
    border: 0.030375rem solid var(--Gray-5, #e0e0e0);
    border-radius: 0.162rem;
    background: #fff;
    transform: rotate(-15deg);
  `,
};

export default style;
