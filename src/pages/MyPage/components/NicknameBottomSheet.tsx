import { useState } from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import { Shuffle } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import { getRandomItem } from '@/utils/arrayUtils';
import { NICKNAMES } from '@/constants/users';
import memberOptions from '@/api/member/queryOptions';
import memberAPI from '@/api/member/apis';
import LoadingSpinner from '@/components/LoadingSpinner';

interface NicknameBottomSheetProps extends ReturnType<typeof useBoolean> {}

const NicknameBottomSheet = ({ value, on, off }: NicknameBottomSheetProps) => {
  const queryClient = useQueryClient();
  const { data: member } = useSuspenseQuery({
    ...memberOptions.detail(),
    staleTime: Infinity,
  });
  const { mutate, isPending } = useMutation({
    mutationFn: memberAPI.patchNickname,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: memberOptions.detail().queryKey,
      });
    },
  });

  const [nickname, setNickname] = useState(
    member.nickname ? member.nickname.replace('낯선 ', '') : NICKNAMES[0],
  );

  const handleChangeNickname = () => {
    setNickname(getRandomItem(NICKNAMES));
  };

  const handleSubmit = async () => {
    mutate(
      { nickname },
      {
        onSuccess: () => {
          toast.success('닉네임이 변경되었어요', {
            position: 'bottom-center',
          });
          off();
        },
      },
    );
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>새로운 닉네임을 선택해주세요</BottomSheet.Title>
      <BottomSheet.Content>
        <div css={styles.input}>
          <p css={textStyles.t3}>
            <span>낯선 </span>
            <span css={{ color: COLORS.primaryHover }}>{nickname}</span>
          </p>
          <IconButton
            type="button"
            css={styles.icon}
            onClick={handleChangeNickname}
          >
            <Shuffle width={18} height={18} />
          </IconButton>
        </div>
      </BottomSheet.Content>
      <BottomSheet.Description>
        언제든지 다시 바꿀 수 있어요
      </BottomSheet.Description>
      <BottomSheet.Divider />
      <BottomSheet.ButtonSection>
        <Button variant="cancel" size="sm" onClick={off}>
          닫기
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={handleSubmit}
          disabled={isPending}
        >
          {isPending ? <LoadingSpinner /> : '변경 완료'}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

const styles = {
  input: css`
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 3.125rem;
    padding: 0.4375rem 0.875rem;
    border: 1px solid var(--gray-gray5, #e0e0e0);
    border-radius: 0.75rem;
    background: #fff;
  `,
  icon: css`
    position: absolute;
    top: 50%;
    right: 0.375rem;
    background-color: ${COLORS.primaryLight};
    transform: translateY(-50%);

    &:active {
      transform: translateY(-50%);
    }
  `,
};

export default NicknameBottomSheet;
