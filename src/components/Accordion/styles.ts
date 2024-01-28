import { css } from '@emotion/react';

export type letterAccordionType = 'inbox' | 'send';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: hidden;
    height: 100%;
    padding-inline: 10px;
  `,
  contentText: (
    isOpen: boolean,
    line: number,
    currentLine: number,
    imgUrl?: string,
  ) => css`
    position: relative;
    height: ${isOpen ? `${currentLine * 19.6}px` : `${line * 19.6}px`};
    margin-bottom: ${imgUrl && isOpen && '60px'};
    color: var(--kakao-logo, #000);
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 140%;
    transition: height 0.5s ease-in-out;
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
    font-size: 12px;
    line-height: 16px;
    text-align: ${type === 'send' ? 'end' : 'start'};
  `,
  arrow: (isOpen: boolean) => css`
    width: 24px;
    height: 24px;
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
    max-width: 600px;
    height: 1px;
    background: #e0e0e0;
  `,
  button: css`
    display: flex;
    gap: 5px;
    align-items: center;
    padding-block: 12px;
    color: var(--Gray-4, #bdbdbd);
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
  `,
  img: (currentLine: number) => css`
    position: relative;
    top: ${currentLine * 20 + 20}px;
    left: 20px;
    width: 55px;
    height: 65px;
    padding: 5.182px 5.182px 15.547px;
    border: 0.486px solid var(--Gray-5, #e0e0e0);
    border-radius: 2.591px;
    background: #fff;
    transform: rotate(-15deg);
  `,
};

export default style;
