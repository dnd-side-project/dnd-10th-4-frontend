import { NICKNAMES, type Worry } from '@/constants/users';
import { type ChipVariant } from '@/components/Chip/styles';
import { formLiteral } from '@/pages/OnboardingPage/hooks/useOnboardingForm';

/** 랜덤한 닉네임을 반환합니다. */
export const getRandomNickname = () => {
  const randomIndex = Math.floor(Math.random() * NICKNAMES.length);
  return NICKNAMES[randomIndex];
};

/** value를 year, mm, dd 인풋의 값에 들어갈 수 있는 유효한 값으로 변환하여 반환합니다.  */
export const getFilteredDateValue = (
  fieldName: string,
  value: string,
): string => {
  const filteredName = fieldName.replace('birthday.', '');
  const filteredValue = value.replace(/[^0-9]/g, '');

  if (
    !(
      filteredName === 'day' ||
      filteredName === 'month' ||
      filteredName === 'year'
    )
  ) {
    throw new Error('fieldName은 day, month, year 중 하나여야 합니다.');
  }

  const max = formLiteral[filteredName].max;

  return Number(value) > max
    ? max.toString()
    : filteredValue.toString().padStart(value.length, '0');
};

/** 고민 칩에 들어갈 variant 테마 값을 반환합니다. */
export const getWorryChipVariant = (
  selectedWorries: Worry[],
  worry: Worry,
  variants: {
    default: ChipVariant;
    selected: ChipVariant;
    disabled: ChipVariant;
  } = {
    default: 'primary',
    selected: 'primary-selected',
    disabled: 'primary-disabled',
  },
): ChipVariant => {
  if (selectedWorries.includes(worry)) {
    return variants.selected;
  }

  if (selectedWorries.length < formLiteral.worries.max) {
    return variants.default;
  } else {
    return variants.disabled;
  }
};

/** 선택된 고민 배열에서 새로운 고민을 추가하거나 제거합니다. */
export const toggleWorry = (worries: Worry[], toggledWorry: Worry): Worry[] => {
  return worries.includes(toggledWorry)
    ? worries.filter((w) => w !== toggledWorry)
    : [...worries, toggledWorry];
};
