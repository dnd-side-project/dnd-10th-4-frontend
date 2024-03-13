import { useNavigate } from 'react-router-dom';
import { type Reply } from '@/types/letter';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';
import useLetterSlideStore from '@/stores/useLetterSlideStore';
import Sparkle from '../Sparkle';
import { REPLY_BOTTLES } from './bottleData';
import styles from './styles';

interface ReplyBottleProps {
  constantId: number;
  reply: Reply;
}

const ReplyBottle = ({ constantId, reply }: ReplyBottleProps) => {
  const { letterId } = reply;

  if (constantId < 0 || constantId >= REPLY_BOTTLES.length) {
    throw new Error('constantId가 범위를 벗어났습니다.');
  }

  const hasReadReply = useLetterSlideStore((s) => s.hasReadReply);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(ROUTER_PATHS.LETTER_REPLY(`${letterId}`));
  };

  return (
    <article
      key={letterId}
      css={[
        REPLY_BOTTLES[constantId].container.position,
        styles.bottleAnimation(),
      ]}
      onClick={handleNavigate}
    >
      <Tooltip
        side="top"
        triggerContent={
          <div>
            <img src={REPLY_BOTTLES[constantId].bottle.src} alt="물병" />
            {!hasReadReply(letterId) &&
              REPLY_BOTTLES[constantId].sparkles?.map((sparkle, i) => (
                <Sparkle key={i} src={sparkle.src} css={sparkle.position} />
              ))}
          </div>
        }
      >
        <p css={textStyles.c1r}>답장은 모래 위로 흘러와요</p>
      </Tooltip>
    </article>
  );
};

export default ReplyBottle;
