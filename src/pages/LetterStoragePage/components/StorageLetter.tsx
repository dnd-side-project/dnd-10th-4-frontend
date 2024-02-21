import { useState } from 'react';
import { css } from '@emotion/react';
import LetterAccordion from '@/components/LetterAccordion';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import TagList from '@/components/TagList';
import { MoreHorizontal, Copy, TrashCan } from '@/assets/icons';
import Dropdown from '@/components/Dropdown';
import COLORS from '@/constants/colors';
import PolaroidModal from '@/components/PolaroidModal';
import { Reply } from '@/types/letter';
import StorageContent from './StorageContent';

interface StorageLetterProps {
  letters: Reply[];
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
      {letters.map((item: Reply) => (
        <LetterCard key={item.letterId} isOpen={isOpen[item.letterId]}>
          <div css={style.tags}>
            <TagList tags={['10~20세', '모두에게', '직장']} />
            <Dropdown
              triggerComponent={<MoreHorizontal />}
              options={[
                {
                  icon: <Copy width={20} height={20} />,
                  label: '복사하기',
                  onClick: () => {
                    console.log('복사히기 클릭');
                  },
                  color: COLORS.gray2,
                },
                {
                  icon: <TrashCan width={20} height={20} />,
                  label: '삭제하기',
                  onClick: () => {
                    console.log('삭제하기 클릭');
                  },
                  color: COLORS.danger,
                },
              ]}
            />
          </div>
          <LetterHeader nickname="낯선고양이" />
          <LetterAccordion
            id={item.letterId.toString()}
            text={item.content}
            date={new Date(item.createdAt)}
            nickname={item.senderNickname}
            isOpen={isOpen[item.letterId]}
            onToggle={() => handleAccordionToggle(item.letterId.toString())}
            line={2}
          />
          {isOpen[item.letterId] && (
            <PolaroidModal
              topPosition={3}
              leftPosition={1}
              img="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
            />
          )}
        </LetterCard>
      ))}
    </StorageContent>
  );
};

export default StorageLetter;

const style = {
  tags: css`
    display: flex;
    justify-content: space-between;
  `,
};
