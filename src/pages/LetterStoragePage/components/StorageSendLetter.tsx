import { useState } from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import LetterAccordion from '@/components/LetterAccordion';
import LetterCard from '@/components/LetterCard';
import TagList from '@/components/TagList';
import { MoreHorizontal, Copy, TrashCan } from '@/assets/icons';
import Dropdown from '@/components/Dropdown';
import COLORS from '@/constants/colors';
import PolaroidModal from '@/components/PolaroidModal';
import { SendLetter } from '@/types/letter';
import useBoolean from '@/hooks/useBoolean';
import { getTagList } from '../utils/tagUtills';
import DeleteBottomSheet from './DeleteBottomSheet';
import StorageContent from './StorageContent';

interface StorageSendLetterProps {
  letters: SendLetter[];
}

const StorageSendLetter = ({ letters }: StorageSendLetterProps) => {
  const { value, on, off } = useBoolean(false);

  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleAccordionToggle = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleContentCopy = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast.success('편지가 복사되었어요.', {
          autoClose: 1500,
          position: 'bottom-center',
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error('편지 복사를 실패했어요', {
          autoClose: 1500,
          position: 'bottom-center',
        });
      });
  };

  const openBottomSheet = (letterId: number) => {
    on();
    setDeleteId(letterId);
  };

  return (
    <StorageContent>
      {letters.map((item: SendLetter) => (
        <LetterCard
          key={item.letterId}
          isOpen={isOpen[item.letterId]}
          css={isOpen[item.letterId] && { height: '24.5rem' }}
        >
          <div css={style.tags}>
            <TagList tags={getTagList(item)} />
            <Dropdown
              triggerComponent={<MoreHorizontal />}
              options={[
                {
                  icon: <Copy width={20} height={20} />,
                  label: '복사하기',
                  onClick: () => {
                    handleContentCopy(item.content);
                  },
                  color: COLORS.gray2,
                },
                {
                  icon: <TrashCan width={20} height={20} />,
                  label: '편지 버리기',
                  onClick: () => {
                    openBottomSheet(item.letterId);
                  },
                  color: COLORS.danger,
                },
              ]}
            />
          </div>
          <LetterAccordion
            id={item.letterId.toString()}
            text={item.content}
            date={new Date(item.createdAt)}
            nickname={item.senderNickname}
            isOpen={isOpen[item.letterId]}
            onToggle={() => handleAccordionToggle(item.letterId.toString())}
            line={2}
            type="sendInbox"
          />
          {isOpen[item.letterId] && item.imagePath && (
            <PolaroidModal
              topPosition={0.5}
              leftPosition={1}
              img={item.imagePath}
            />
          )}
        </LetterCard>
      ))}
      <DeleteBottomSheet
        value={value}
        on={on}
        off={off}
        letterId={deleteId!}
        type="Send"
      />
    </StorageContent>
  );
};

export default StorageSendLetter;

const style = {
  tags: css`
    display: flex;
    justify-content: space-between;
  `,
};
