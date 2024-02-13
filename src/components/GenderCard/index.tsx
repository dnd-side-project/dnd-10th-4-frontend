import React, { forwardRef } from 'react';
import { css } from '@emotion/react';
import { GENDER_DICT, type Gender } from '@/constants/users';
import { Female, Male } from '@/assets/icons';
import textStyles from '@/styles/textStyles';
import styles, { type CardVariant } from './styles';

interface GenderCardProps extends React.ComponentProps<'input'> {
  /** 색상 테마 */
  variant: CardVariant;
  /** 표현할 성별 */
  value: Gender;
  /** radio에서 현재 선택된 값 */
  selectedValue?: Gender;
}

const contents = {
  MALE: {
    icon: <Male width={36} height={36} />,
  },
  FEMALE: {
    icon: <Female width={36} height={36} />,
  },
} as const;

/** 성별을 고를 수 있는 카드 컴포넌트 */
const GenderCard = forwardRef<HTMLInputElement, GenderCardProps>(
  ({ variant, value, id = value, selectedValue, ...props }, ref) => {
    const isSelected = value === selectedValue;

    return (
      <label htmlFor={id} css={styles.card(variant, isSelected)}>
        <input
          type="radio"
          id={id}
          ref={ref}
          value={value}
          css={css({ display: 'none' })}
          {...props}
        />
        <div css={styles.iconCircle(variant, isSelected)}>
          {contents[value].icon}
        </div>
        <p css={textStyles.b4m}>{GENDER_DICT[value]}</p>
      </label>
    );
  },
);

GenderCard.displayName = 'GenderCard';

export default GenderCard;
