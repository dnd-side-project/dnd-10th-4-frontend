import React from 'react';
import LetterCard from '@/components/LetterCard';
import LetterAccordion from '@/components/LetterAccordion';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import ImageUploadButton from '@/components/ImageUploadButton';
import LetterTextarea from '@/components/LetterTextarea';
import useBoolean from '@/hooks/useBoolean';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterHeader from '@/components/LetterHeader';
import Chip from '@/components/Chip';
import LetterContent from '../components/LetterContent';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import { ReceptionLetterType } from '../hooks/useLetterTag';
import style from './styles';
interface ReplyToLetterProps {
  receptionLetter: ReceptionLetterType;
  onPrev: () => void;
}

const ReplyToLetter = ({ receptionLetter, onPrev }: ReplyToLetterProps) => {
  const { value: isOpen, toggle: accordionToggle } = useBoolean(false);

  const tagList = receptionLetter.tagList;

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
            text={receptionLetter.content}
            date={new Date(receptionLetter.createdAt)}
            nickname={receptionLetter.senderNickname}
            line={2}
            type="send"
          />
          <ReceptionPolaroid />
        </LetterCard>
        <LetterCard isOpen={true}>
          <LetterHeader title="To" nickname={receptionLetter.senderNickname} />
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

export default ReplyToLetter;
