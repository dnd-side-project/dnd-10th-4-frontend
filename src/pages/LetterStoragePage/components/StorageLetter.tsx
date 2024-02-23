import { useState } from 'react';
import { toast } from 'react-toastify';
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
import useBoolean from '@/hooks/useBoolean';
import { getTagList } from '../utils/tagUtills';
import StorageContent from './StorageContent';
import DeleteBottomSheet from './DeleteBottomSheet';

interface StorageLetterProps {
  letters: Reply[];
}

const StorageLetter = ({ letters }: StorageLetterProps) => {
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
      {letters.map((item) => (
        <LetterCard key={item.letterId} isOpen={isOpen[item.letterId]}>
          <div css={style.tags}>
            {item.letterType !== 'Onboarding' ? (
              <TagList tags={getTagList(item)} />
            ) : (
              <div />
            )}
            <Dropdown
              triggerComponent={<MoreHorizontal />}
              options={[
                {
                  icon: <Copy width={20} height={20} />,
                  label: '복사하기',
                  onClick: () => {
                    // TODO: 온보딩 편지는 임시로 content를 보여주도록 했습니다. 추후 수정 필요
                    handleContentCopy(
                      item.letterType !== 'Onboarding'
                        ? item.repliedContent
                        : item.content,
                    );
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
          <LetterHeader
            nickname={
              item.letterType !== 'Onboarding'
                ? item.senderNickname
                : '처음 방문한 너에게'
            }
          />
          <LetterAccordion
            id={item.letterId.toString()}
            text={
              item.letterType !== 'Onboarding'
                ? item.repliedContent
                : item.content
            }
            date={new Date(item.createdAt)}
            nickname={
              item.letterType !== 'Onboarding'
                ? item.receiverNickname
                : item.senderNickname
            }
            isOpen={isOpen[item.letterId]}
            onToggle={() => handleAccordionToggle(item.letterId.toString())}
            line={2}
          />
          {isOpen[item.letterId] && item.replyImagePath && (
            <PolaroidModal
              topPosition={2.5}
              leftPosition={1}
              img={item.replyImagePath}
            />
          )}
        </LetterCard>
      ))}
      <DeleteBottomSheet value={value} on={on} off={off} letterId={deleteId!} />
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
