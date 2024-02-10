import React from 'react';
import { css } from '@emotion/react';
import LetterCard from '@/components/LetterCard';
import LetterAccordion from '@/components/LetterAccordion';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import ImageUploadButton from '@/components/ImageUploadButton';
import LetterTextarea from '@/components/LetterTextarea';
import textStyles from '@/styles/textStyles';
import useBoolean from '@/hooks/useBoolean';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterHeader from '@/components/LetterHeader';
import Chip from '@/components/Chip';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import LetterContent from '../components/LetterContent';

interface ReplyToLetterProps {
  onPrev: () => void;
}

const ReplyToLetter = ({ onPrev }: ReplyToLetterProps) => {
  const { value: isOpen, toggle: accordionToggle } = useBoolean(false);

  const tagList = ['20~24세', '모두에게', '기타'];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
  };

  return (
    <LetterContent isBlock={true}>
      <div css={style.letter}>
        <LetterCard css={{ marginBottom: '1rem' }}>
          <div css={style.tag}>
            {tagList.map((tag) => (
              <Chip key={tag} variant="filter">
                {tag}
              </Chip>
            ))}
          </div>
          <LetterAccordion
            isOpen={isOpen}
            onToggle={accordionToggle}
            id="1"
            text="여기까지가 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오여기까지가 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋"
            date={new Date()}
            nickname="낯선 고양이"
            line={2}
            type="send"
          />
          <ReceptionPolaroid />
        </LetterCard>
        <LetterCard isOpen={true}>
          <LetterHeader fromOrTo="To" nickname="낯선 고양이" />
          <LetterTextarea
            name="content"
            placeholder="하고싶은 이야기를 답장으로 적어보세요."
          />
          <LetterLengthDate letterLength={0} />
        </LetterCard>
      </div>
      <Navbar css={style.navbar}>
        <Button
          type="button"
          variant="semi-transparent-unaccent"
          size="sm"
          onClick={onPrev}
        >
          다시 흘러보내기
        </Button>
        <Button type="submit" variant="semi-transparent" size="sm">
          답장 보내기
        </Button>
        <ImageUploadButton onChangeImage={handleFileChange} />
      </Navbar>
    </LetterContent>
  );
};

const style = {
  tag: css`
    display: flex;
    gap: 0.5rem;
  `,
  text: css`
    ${textStyles.l1m};
  `,
  letter: css`
    overflow-y: auto;
    max-height: calc(100dvh - 60px - 80px - 16px);
  `,
  navbar: css`
    position: fixed;
    bottom: 0;
    width: 96vw;
    max-width: 580px;
    padding-inline: 0;
  `,
};

export default ReplyToLetter;
