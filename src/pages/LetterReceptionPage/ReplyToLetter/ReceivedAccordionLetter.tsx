import LetterCard from '@/components/LetterCard';
import LetterAccordion from '@/components/LetterAccordion';
import useBoolean from '@/hooks/useBoolean';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import TagList from '../components/TagList';
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
  );
};

export default ReceivedAccordionLetter;
