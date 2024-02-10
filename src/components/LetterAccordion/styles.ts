import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

export type letterAccordionType = 'inbox' | 'send';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: hidden;
    height: 100%;
  `,
  contentText: (isOpen: boolean, line: number) => css`
    position: relative;
    height: ${isOpen ? `15.2rem` : `${line * 1.225}rem`};
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
  info: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    background: ${COLORS.gray4};
  `,
  button: css`
    display: flex;
    gap: 0.3125rem;
    align-items: center;
    padding-top: 0.75rem;
    color: ${COLORS.gray3};
    font-weight: 500;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1rem;
    cursor: pointer;
  `,
};

export default style;
