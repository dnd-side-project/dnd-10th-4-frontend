import { useState } from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import LetterAccordion from '@/components/LetterAccordion';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import TagList from '@/components/TagList';
import { MoreHorizontal, Copy, TrashCan } from '@/assets/icons';
import Dropdown from '@/components/Dropdown';
import COLORS from '@/constants/colors';
import PolaroidModal from '@/components/PolaroidModal';
import { Reply } from '@/types/letter';
import letterAPI from '@/api/letter/apis';
import letterOptions from '@/api/letter/queryOptions';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { getTagList } from '../utils/tagUtills';
import StorageContent from './StorageContent';

interface StorageLetterProps {
  letters: Reply[];
}

const StorageLetter = ({ letters }: StorageLetterProps) => {
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const handleAccordionToggle = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const { mutateAsync: patchDelete } = useMutation({
    mutationFn: letterAPI.patchDeleteLetter,
  });

  const handleDeleteLetter = async (letterId: number) => {
    try {
      await patchDelete(letterId);
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    } catch (error) {
      if (
        isAxiosError(error) &&
        error.response?.data === ERROR_RESPONSES.accessDeniedLetter
      ) {
        console.error(error.response.data);
      } else {
        throw error;
      }
    }
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

  return (
    <StorageContent>
      {letters.map((item: Reply) => (
        <LetterCard key={item.letterId} isOpen={isOpen[item.letterId]}>
          <div css={style.tags}>
            <TagList tags={getTagList(item)} />
            <Dropdown
              triggerComponent={<MoreHorizontal />}
              options={[
                {
                  icon: <Copy width={20} height={20} />,
                  label: '복사하기',
                  onClick: () => {
                    handleContentCopy(item.repliedContent);
                  },
                  color: COLORS.gray2,
                },
                {
                  icon: <TrashCan width={20} height={20} />,
                  label: '삭제하기',
                  onClick: () => {
                    handleDeleteLetter(item.letterId);
                  },
                  color: COLORS.danger,
                },
              ]}
            />
          </div>
          <LetterHeader nickname={item.senderNickname} />
          <LetterAccordion
            id={item.letterId.toString()}
            text={item.repliedContent}
            date={new Date(item.createdAt)}
            nickname={item.receiverNickname}
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
