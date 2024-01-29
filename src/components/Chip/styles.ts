import { css } from '@emotion/react';

export type VariantType =
  | 'primary'
  | 'primary-selected'
  | 'primary-disabled'
  | 'bottle-tag'
  | 'filter'
  | 'form'
  | 'form-selected';

const styles = {
  chip: (variant: VariantType) => css`
    cursor: ${variant === 'primary-disabled' ? 'not-allowed' : 'pointer'};
    ${variants[variant]}
  `,
};

const baseChipStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  font-style: normal;
  text-align: center;
  backdrop-filter: blur(7.5px);
`;

const baseTextStyles = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
`;

const formChipStyles = css`
  ${baseChipStyle};
  padding: 12px 16px;
  font-weight: 700;
  line-height: 16px;
  font-size: 12px;
  color: var(--gray1, #333);
`;

const variants = {
  primary: css`
    ${baseChipStyle};
    background: radial-gradient(
      491.85% 132.88% at 0% 12.5%,
      rgb(255 255 255 / 0.7) 0%,
      rgb(255 255 255 / 0.28) 100%
    );
    padding: 4px 16px;
    border: 1px solid rgb(255 255 255 / 0.3);
    color: var(--kakao-logo, #000);
    ${baseTextStyles};
  `,
  'primary-selected': css`
    ${baseChipStyle};
    ${baseTextStyles};
    padding: 4px 16px;
    border: 1px solid rgb(255 255 255 / 0.3);
    color: var(--kakao-logo, #000);
  `,
  'primary-disabled': css`
    ${baseChipStyle};
    ${baseTextStyles};
    padding: 4px 16px;
    border: 1px solid rgb(255 255 255 / 0.3);
    color: gray;
  `,
  'bottle-tag': css`
    ${baseChipStyle};
    background: white;
    font-weight: 500;
    gap: 8px;
    padding: 4px 12px;
    font-size: 14px;
    line-height: 16px;
    border: 1px solid rgb(255 255 255 / 0.3);
  `,
  filter: css`
    ${baseChipStyle};
    padding: 4px 8px;
    font-weight: 500;
    gap: 10px;
    border: 1px solid var(--gray4, #bdbdbd);
    background: var(--gray5, #e0e0e0);
    color: var(--Gray-1, #333);
    line-height: 16px;
    font-size: 14px;
  `,
  form: css`
    ${formChipStyles};
    background: white;
    border: 1px solid var(--gray5, #e0e0e0);
  `,
  'form-selected': css`
    ${formChipStyles};
    border: 1px solid #2f80ed;
    background: rgb(47 128 237 / 0.2);
  `,
};

export default styles;
