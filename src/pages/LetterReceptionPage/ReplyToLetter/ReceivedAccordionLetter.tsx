import LetterCard from '@/components/LetterCard';
import LetterAccordion from '@/components/LetterAccordion';
import useBoolean from '@/hooks/useBoolean';
import TagList from '@/components/TagList';
import LetterHeader from '@/components/LetterHeader';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import { ReceptionLetterType } from '../hooks/useLetterWithTags';

interface ReceivedAccordionLetterProps {
  receptionLetter: ReceptionLetterType;
}

const ReceivedAccordionLetter = ({
  receptionLetter,
}: ReceivedAccordionLetterProps) => {
  const { value: isOpen, toggle: accordionToggle } = useBoolean(false);

  return (
    <LetterCard css={{ marginBottom: '1rem' }}>
      <TagList tags={receptionLetter.tagList} />
      <LetterHeader nickname={receptionLetter.receiverNickname} />
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
      {receptionLetter.sendImagePath !== null && (
        <ReceptionPolaroid
          topPosition={3.1}
          img={receptionLetter.sendImagePath}
        />
      )}
    </LetterCard>
  );
};

export default ReceivedAccordionLetter;
