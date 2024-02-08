import { css } from '@emotion/react';
import LetterCard from '@/components/LetterCard';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import LetterContent from '../components/LetterContent';

const ReceivedLetter = () => {
  const { toNext } = useFunnelContext();

  return (
    <LetterContent>
      <LetterCard isOpen={true}>하이</LetterCard>
      <Navbar css={style.navbar}>
        <Button variant="secondary" size="sm">
          다시 흘려보내기
        </Button>
        <Tooltip
          side="top"
          delay={10000}
          triggerContent={
            <Button variant="primary" size="sm" onClick={toNext}>
              답장하기
            </Button>
          }
        >
          사라지기전에 답장을 보내보세요!
        </Tooltip>
      </Navbar>
    </LetterContent>
  );
};

const style = {
  navbar: css`
    padding-inline: 0;
  `,
};

export default ReceivedLetter;
