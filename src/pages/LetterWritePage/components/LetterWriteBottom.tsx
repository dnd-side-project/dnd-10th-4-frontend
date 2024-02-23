import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import LoadingSpinner from '@/components/LoadingSpinner';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import { WriteInputs } from '..';

interface LetterWriteBottomProps {
  isPending: boolean;
}

const LetterWriteBottom = ({ isPending }: LetterWriteBottomProps) => {
  const navigate = useNavigate();
  const { value, on, off } = useBoolean(false);

  const { watch } = useFormContext<WriteInputs>();

  const handleBackward = () => {
    if (watch('age').length !== 0 || watch('content')) {
      on();
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <Navbar css={style.navbar}>
        <Button
          onClick={handleBackward}
          type="button"
          variant="secondary"
          size="sm"
        >
          취소
        </Button>
        <Button disabled={isPending} type="submit" variant="primary" size="sm">
          {isPending ? <LoadingSpinner /> : '보내기'}
        </Button>
      </Navbar>
      <BottomSheet open={value} onOpen={on} onClose={off}>
        <BottomSheet.Title>편지쓰기를 취소할까요?</BottomSheet.Title>
        <BottomSheet.Description>
          편지 작성 취소시, <br /> 작성중인 글과 사진은 저장되지 않아요.
        </BottomSheet.Description>
        <BottomSheet.ButtonSection>
          <Button variant="cancel" onClick={off}>
            계속 쓰기
          </Button>
          <Button variant="danger" onClick={() => navigate(-1)}>
            작성 취소
          </Button>
        </BottomSheet.ButtonSection>
      </BottomSheet>
    </>
  );
};

export default LetterWriteBottom;

const style = {
  navbar: css`
    padding-inline: 0;
  `,
};
