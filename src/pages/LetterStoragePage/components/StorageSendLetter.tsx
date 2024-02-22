import { useState } from 'react';
import { css } from '@emotion/react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import LetterAccordion from '@/components/LetterAccordion';
import LetterCard from '@/components/LetterCard';
import TagList from '@/components/TagList';
import { MoreHorizontal, Copy, TrashCan } from '@/assets/icons';
import Dropdown from '@/components/Dropdown';
import COLORS from '@/constants/colors';
import PolaroidModal from '@/components/PolaroidModal';
import { SendLetter } from '@/types/letter';
import letterAPI from '@/api/letter/apis';
import ERROR_RESPONSES from '@/constants/errorMessages';
import letterOptions from '@/api/letter/queryOptions';
import { getTagList } from '../utils/tagUtills';
import StorageContent from './StorageContent';
interface StorageSendLetterProps {
  letters: SendLetter[];
}

const StorageSendLetter = ({ letters }: StorageSendLetterProps) => {
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
                    console.log('복사히기 클릭');
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
          <LetterAccordion
            id={item.letterId.toString()}
            text={item.content}
            date={new Date(item.createdAt)}
            nickname={item.senderNickname}
            isOpen={isOpen[item.letterId]}
            onToggle={() => handleAccordionToggle(item.letterId.toString())}
            line={2}
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
