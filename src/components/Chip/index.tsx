import { type SerializedStyles } from '@emotion/react';
import style, { VariantType } from './styles';

type ChipProps = {
  /** Chip의 테마입니다. */
  variant?: VariantType;
  /** Chip의 내용입니다. */
  children: React.ReactNode;
  /** Chip의 스타일입니다. */
  chipStyle?: SerializedStyles;
  /** Chip의 클릭 이벤트 입니다. */
  onClick?: () => void;
};

const Chip = ({
  variant = 'primary',
  children,
  chipStyle,
  ...props
}: ChipProps) => {
  return (
    <button
      {...props}
      disabled={variant === 'primary-disabled'}
      css={[style.chip(variant), chipStyle]}
    >
      {children}
    </button>
  );
};

export default Chip;
