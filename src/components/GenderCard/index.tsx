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

/** 성별을 고를 수 있는 카드 컴포넌트 */
const GenderCard = forwardRef<HTMLInputElement, GenderCardProps>(
  ({ variant, value, id = value, selectedValue, ...props }, ref) => {
    const isSelected = value === selectedValue;

    // Primary variant의 선택된 아이콘에는 겹쳐진 하위 노드를 출력해야 해서 작성했습니다.
    const childContent = {
      primary: {
        MALE: (
          <path
            d="M14.25 16.5C17.145 16.5 19.5 18.855 19.5 21.75C19.5 24.645 17.145 27 14.25 27C11.355 27 9 24.645 9 21.75C9 18.855 11.355 16.5 14.25 16.5ZM14.25 13.5C9.69 13.5 6 17.19 6 21.75C6 26.31 9.69 30 14.25 30C18.81 30 22.5 26.31 22.5 21.75C22.5 20.01 21.96 18.405 21.045 17.07L27 11.13V15H30V6H21V9H24.87L18.915 14.955C17.595 14.04 15.99 13.5 14.25 13.5Z"
            fill="black"
            fillOpacity="0.2"
          />
        ),
        FEMALE: (
          <path
            d="M26.25 14.25C26.25 9.69 22.56 6 18 6C13.44 6 9.75 9.69 9.75 14.25C9.75 18.3 12.66 21.645 16.5 22.35V25.5H13.5V28.5H16.5V31.5H19.5V28.5H22.5V25.5H19.5V22.35C23.34 21.645 26.25 18.3 26.25 14.25ZM12.75 14.25C12.75 11.355 15.105 9 18 9C20.895 9 23.25 11.355 23.25 14.25C23.25 17.145 20.895 19.5 18 19.5C15.105 19.5 12.75 17.145 12.75 14.25Z"
            fill="black"
            fillOpacity="0.2"
          />
        ),
      },
    };

    const childIcon =
      isSelected && variant === 'primary' ? childContent.primary[value] : null;

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
          {value === 'MALE' && (
            <Male width={36} height={36}>
              {childIcon}
            </Male>
          )}
          {value === 'FEMALE' && (
            <Female width={36} height={36}>
              {childIcon}
            </Female>
          )}
        </div>
        <p css={textStyles.b4m}>{GENDER_DICT[value]}</p>
      </label>
    );
  },
);

GenderCard.displayName = 'GenderCard';

export default GenderCard;
