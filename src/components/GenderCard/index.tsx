import { type Gender } from '@/types/member';
import { Female, Male } from '@/assets/icons';
import textStyles from '@/styles/textStyles';
import styles, { type CardVariant } from './styles';

interface GenderCardProps {
  /** 색상 테마 */
  variant: CardVariant;
  /** 현재 선택된 요소인지에 대한 여부 */
  isSelected: boolean;
  /** 표현할 성별 */
  gender: Gender;
  /** 클릭 이벤트 핸들러 */
  onClick?: VoidFunction;
}

const contents = {
  MALE: {
    text: '남성',
    icon: <Male width={36} height={36} />,
  },
  FEMALE: {
    text: '여성',
    icon: <Female width={36} height={36} />,
  },
} as const;

/** 성별을 고를 수 있는 카드 컴포넌트 */
const GenderCard = ({
  variant,
  isSelected,
  gender,
  onClick,
}: GenderCardProps) => {
  return (
    <article css={styles.card(variant, isSelected)} onClick={onClick}>
      <div css={styles.iconCircle(variant, isSelected)}>
        {contents[gender].icon}
      </div>
      <p css={textStyles.b4m}>{contents[gender].text}</p>
    </article>
  );
};

export default GenderCard;
