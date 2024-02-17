import style, { VariantType } from './styles';

interface ChipProps {
  /** Chip의 내용입니다. */
  variant?: VariantType;
  /** Chip의 테마입니다. */
  children: React.ReactNode;
  /** Chip의 클릭 이벤트 입니다. */
  onClick?: () => void;
}

const Chip = ({ variant = 'primary', children, ...props }: ChipProps) => {
  return (
    <button
      {...props}
      type="button"
      disabled={variant === 'primary-disabled' || variant === 'form-disabled'}
      css={style.chip(variant)}
    >
      {(variant === 'filter' || variant === 'tag') && <span>#</span>}
      {children}
    </button>
  );
};

export default Chip;
