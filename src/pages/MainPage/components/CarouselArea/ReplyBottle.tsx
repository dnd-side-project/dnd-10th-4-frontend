import { useNavigate } from 'react-router-dom';
import { type Reply } from '@/types/letter';
import { ROUTER_PATHS } from '@/router';
import useReadLetterStore from '@/stores/useReadLetterStore';
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

  const readReplies = useReadLetterStore((s) => s.replies);
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
      <img src={REPLY_BOTTLES[constantId].bottle.src} alt="물병" />
      {REPLY_BOTTLES[constantId].sparkles?.map(
        (sparkle, i) =>
          !readReplies.includes(letterId) && (
            <Sparkle key={i} src={sparkle.src} css={sparkle.position} />
          ),
      )}
    </article>
  );
};

export default ReplyBottle;
