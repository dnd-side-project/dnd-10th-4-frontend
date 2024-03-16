import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { type Reception } from '@/types/letter';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';
import useLetterSlideStore from '@/stores/useLetterSlideStore';
import TimeChip from '../TimeChip';
import Sparkle from '../Sparkle';
import { RECEPTION_BOTTLES } from './bottleData';
import styles from './styles';

interface ReceptionBottleProps {
  constantId: number;
  reception: Reception;
}

const ReceptionBottle = ({ constantId, reception }: ReceptionBottleProps) => {
  const { createdAt, letterId } = reception;

  if (constantId < 0 || constantId >= RECEPTION_BOTTLES.length) {
    throw new Error('constantId가 범위를 벗어났습니다.');
  }

  const hasReadReception = useLetterSlideStore((s) => s.hasReadReception);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(ROUTER_PATHS.LETTER_RECEPTION(`${letterId}`));
  };

  return (
    <article css={RECEPTION_BOTTLES[constantId].container.position}>
      <Tooltip>
        <Tooltip.Trigger>
          <div
            css={styles.bottleAnimation(
              RECEPTION_BOTTLES[constantId].container.animation,
            )}
            onClick={handleNavigate}
          >
            <img src={RECEPTION_BOTTLES[constantId].bottle.src} alt="물병" />
            {!hasReadReception(letterId) &&
              RECEPTION_BOTTLES[constantId].sparkles?.map((sparkle, i) => (
                <Sparkle key={i} src={sparkle.src} css={sparkle.position} />
              ))}
          </div>
        </Tooltip.Trigger>
        {reception.letterType === 'Onboarding' && (
          <Tooltip.Content side="top">
            <p css={textStyles.c1r}>새로운 편지가 도착 했어요</p>
          </Tooltip.Content>
        )}
      </Tooltip>

      {reception.letterType !== 'Onboarding' && (
        <TimeChip
          css={[
            RECEPTION_BOTTLES[constantId].chip.position,
            css({ zIndex: 10 }),
          ]}
          createdAt={createdAt}
        />
      )}
    </article>
  );
};

export default ReceptionBottle;
