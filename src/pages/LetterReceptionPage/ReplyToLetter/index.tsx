import { useState } from 'react';
import { css } from '@emotion/react';
import LetterCard from '@/components/LetterCard';
import LetterAccordion from '@/components/LetterAccordion';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

const ReplyToLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={style.container}>
      <div css={style.letter}>
        <LetterCard css={{ marginBottom: '1rem' }}>
          <div>
            <span>From.</span>
            <span>낯선 고양이</span>
          </div>
          <div>태그</div>
          <LetterAccordion
            isOpen={isOpen}
            onToggle={handleAccordionToggle}
            id="1"
            text="여기까지가 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오"
            date={new Date()}
            line={2}
            type="send"
          />
        </LetterCard>
        <LetterCard isOpen={true}>여기에 편지쓰기</LetterCard>
      </div>
      <Navbar css={style.navbar}>
        <Button type="button" variant="secondary" size="sm">
          취소
        </Button>
        <Button type="submit" variant="primary" size="sm">
          보내기
        </Button>
      </Navbar>
    </div>
  );
};

const style = {
  container: css`
    display: flex;
    display: block;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-inline: 0.5rem;
  `,
  letter: css`
    overflow-y: auto;
    max-height: calc(100vh - 60px - 80px - 16px);
  `,
  navbar: css`
    position: fixed;
    bottom: 0;
    width: calc(100% - 1rem);
    padding-inline: 0;
  `,
};

export default ReplyToLetter;
