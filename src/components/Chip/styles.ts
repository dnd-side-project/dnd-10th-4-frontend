import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

export type VariantType =
  | 'primary'
  | 'primary-selected'
  | 'primary-disabled'
  | 'bottle-tag'
  | 'bottle-tag-bubble'
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
  backdrop-filter: blur(0.4688rem);
`;

const baseTextStyles = css`
  font-weight: 500;
  font-size: 1rem;
  line-height: 160%;
`;

const formChipStyles = css`
  ${baseChipStyle};
  padding: 0.75rem 1rem;
  font-weight: 700;
  line-height: 1rem;
  font-size: 0.75rem;
  color: ${COLORS.gray1};
`;

const bottleTagStyles = css`
  ${baseChipStyle};
  background: white;
  font-weight: 500;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1rem;
  border: 1px solid rgb(255 255 255 / 0.3);
`;

const variants = {
  primary: css`
    ${baseChipStyle};
    background: radial-gradient(
      234.35% 120.74% at 6.21% 10.17%,
      rgb(255 255 255 / 0.56) 0%,
      rgb(255 255 255 / 0.24) 100%
    );
    padding: 0.25rem 1rem;
    border: 1px solid rgb(255 255 255 / 0.3);
    color: var(--kakao-logo, #000);
    ${baseTextStyles};
  `,
  'primary-selected': css`
    ${baseChipStyle};
    ${baseTextStyles};
    padding: 0.25rem 1rem;
    background: rgb(255 255 255 / 0.8);
    border: 1px solid rgb(255 255 255 / 0.3);
    color: var(--kakao-logo, #000);
  `,
  'primary-disabled': css`
    ${baseChipStyle};
    ${baseTextStyles};
    padding: 0.25rem 1rem;
    border: 1px solid rgb(255 255 255 / 0.3);
    color: ${COLORS.gray4};
  `,
  'bottle-tag': css`
    ${bottleTagStyles};
  `,
  'bottle-tag-bubble': css`
    ${bottleTagStyles}
    &::after {
      content: '';
      position: absolute;
      top: 1.5625rem;
      right: 1.375rem;
      border-width: 0.5rem;
      border-style: solid;
      border-color: white transparent transparent;
    }
  `,
  filter: css`
    ${baseChipStyle};
    padding: 0.25rem 0.5rem;
    font-weight: 500;
    gap: 0.625rem;
    border: 1px solid ${COLORS.gray4};
    background: ${COLORS.gray5};
    color: ${COLORS.gray1};
    line-height: 1rem;
    font-size: 0.875rem;
  `,
  form: css`
    ${formChipStyles};
    background: white;
    border: 1px solid ${COLORS.gray5};
  `,
  'form-selected': css`
    ${formChipStyles};
    border: 1px solid #2f80ed;
    background: rgb(47 128 237 / 0.2);
  `,
};

export default styles;
