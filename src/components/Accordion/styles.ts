import { css } from '@emotion/react';

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
  date: css`
    color: #888;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
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
};

export default style;
