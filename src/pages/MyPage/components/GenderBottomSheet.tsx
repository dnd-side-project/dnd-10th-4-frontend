import { useState } from 'react';
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
import { bottomSheetStyles } from '../style';

interface GenderBottomSheetProps extends ReturnType<typeof useBoolean> {}

const GenderBottomSheet = ({ value, on, off }: GenderBottomSheetProps) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: memberAPI.patchGender,
  });
  const queryClient = useQueryClient();

  const [gender, setGender] = useState<Gender>();

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Gender;

    if (value in GENDER_DICT) {
      setGender(value);
    }
  };

  const handleSubmit = async () => {
    if (!gender) {
      return;
    }

    await mutateAsync({ gender });
    queryClient.invalidateQueries({
      queryKey: memberOptions.detail().queryKey,
    });
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <section css={bottomSheetStyles.mainSection}>
        <h2 css={bottomSheetStyles.title}>어떤 성별로 변경하시겠어요?</h2>
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
        <p css={bottomSheetStyles.description}>
          성별은 한 번만 수정할 수 있어요
        </p>
      </section>
      <section css={bottomSheetStyles.buttonSection}>
        <Button variant="cancel" rounded="none" size="sm" onClick={off}>
          닫기
        </Button>
        <Button
          variant="primary"
          rounded="none"
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
      </section>
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
