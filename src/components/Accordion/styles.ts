import { css } from '@emotion/react';

export type accordionType = 'inbox' | 'send';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: hidden;
    padding-inline: 10px;
  `,
  contentText: css`
    color: var(--kakao-logo, #000);
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 140%;
  `,
  originalText: (line: number) => css`
    display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */
  `,
  date: (type: accordionType) => css`
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
  img: css`
    position: relative;
    top: 60px;
    left: 20px;
    width: 50px;
    height: 60px;
    padding: 5.182px 5.182px 15.547px;
    border: 0.486px solid var(--Gray-5, #e0e0e0);
    border-radius: 2.591px;
    background: #fff;
    transform: rotate(-15deg);
  `,
};

export default style;
