import { useState } from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import GenderCard from '@/components/GenderCard';
import { GENDER_DICT, type Gender } from '@/constants/users';
import memberOptions from '@/api/member/queryOptions';
import memberAPI from '@/api/member/apis';
import LoadingSpinner from '@/components/LoadingSpinner';

interface GenderBottomSheetProps extends ReturnType<typeof useBoolean> {}

const GenderBottomSheet = ({ value, on, off }: GenderBottomSheetProps) => {
  const [gender, setGender] = useState<Gender>();

  const { mutate, isPending } = useMutation({
    mutationFn: memberAPI.patchGender,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: memberOptions.detail().queryKey,
      });
    },
  });
  const queryClient = useQueryClient();

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Gender;

    if (value in GENDER_DICT) {
      setGender(value);
    }
  };

  const handleSubmit = () => {
    if (!gender) {
      return;
    }

    mutate(
      { gender },
      {
        onSuccess: () => {
          toast.success('성별이 변경되었어요', {
            position: 'bottom-center',
          });

          off();
        },
      },
    );
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title>어떤 성별로 변경하시겠어요?</BottomSheet.Title>
      <BottomSheet.Content>
        <section css={styles.genderSection}>
          <GenderCard
            value="MALE"
            variant="secondary"
            name="gender"
            selectedValue={gender}
            onChange={handleSelect}
          />
          <GenderCard
            value="FEMALE"
            variant="secondary"
            name="gender"
            selectedValue={gender}
            onChange={handleSelect}
          />
        </section>
      </BottomSheet.Content>
      <BottomSheet.Description>
        성별은 한 번만 수정할 수 있어요
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
          disabled={isPending || !gender}
        >
          {!gender ? (
            '선택해주세요'
          ) : isPending ? (
            <LoadingSpinner />
          ) : (
            '변경하기'
          )}
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default GenderBottomSheet;

const styles = {
  genderSection: css`
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    max-width: 15rem;
  `,
};
