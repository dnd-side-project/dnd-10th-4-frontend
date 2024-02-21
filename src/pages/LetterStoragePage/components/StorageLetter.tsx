/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { css } from '@emotion/react';
import LetterAccordion from '@/components/LetterAccordion';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import TagList from '@/components/TagList';
import { MoreHorizontal, Copy, TrashCan } from '@/assets/icons';
import Dropdown from '@/components/Dropdown';
import COLORS from '@/constants/colors';
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

const style = {
  tags: css`
    display: flex;
    justify-content: space-between;
  `,
};
