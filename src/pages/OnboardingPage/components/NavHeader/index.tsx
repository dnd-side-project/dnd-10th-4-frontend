import Header from '@/components/Header';
import textStyles from '@/styles/textStyles';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import { CaretLeft } from '@/assets/icons';
import Progress from '../Progress';
import styles from './styles';

interface NavHeaderProps {
  /** 뒤로 가기 보여주기 On/Off */
  showBackButton?: boolean;
  /** 건너 뛰기 보여주기 On/Off */
  showSkipButton?: boolean;
  /** 프로그레스 단계 값 */
  progressValue?: number;
}

/** 온보딩 페이지의 맨 상단에 보여줄 네비 헤더 컴포넌트 */
const NavHeader = ({
  showBackButton,
  showSkipButton,
  progressValue,
}: NavHeaderProps) => {
  const { toPrev, toLast } = useFunnelContext();

  return (
    <Header
      leftContent={
        showBackButton && (
          <div css={[styles.headerButton, textStyles.b4m]} onClick={toPrev}>
            <CaretLeft />
            뒤로
          </div>
        )
      }
      centerContent={
        progressValue && progressValue > 0 ? (
          <Progress max={4} value={progressValue} />
        ) : null
      }
      rightContent={
        showSkipButton && (
          <div css={[styles.headerButton, textStyles.b4m]} onClick={toLast}>
            건너 뛰기
          </div>
        )
      }
    />
  );
};

export default NavHeader;
