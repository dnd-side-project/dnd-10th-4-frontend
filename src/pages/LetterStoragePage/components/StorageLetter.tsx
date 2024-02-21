/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import LetterAccordion from '@/components/LetterAccordion';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import TagList from '@/components/TagList';
import StorageContent from './StorageContent';

interface StorageLetterProps {
  letters: Array<object>;
}

const StorageLetter = ({ letters }: StorageLetterProps) => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const handleAccordionToggle = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <StorageContent>
      {letters.map((item: any) => (
        <LetterCard key={item.letterId} isOpen={isOpen[item.letterId]}>
          <TagList tags={['10~20세', '모두에게', '직장']} />
          <LetterHeader nickname="낯선고양이" />
          <LetterAccordion
            id={item.letterId}
            text={item.content}
            date={new Date(item.createdAt)}
            nickname={item.senderNickname}
            isOpen={isOpen[item.letterId]}
            onToggle={() => handleAccordionToggle(item.letterId)}
            line={2}
          />
        </LetterCard>
      ))}
    </StorageContent>
  );
};

export default StorageLetter;
