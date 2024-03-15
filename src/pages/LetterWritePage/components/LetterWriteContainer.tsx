import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import useBoolean from '@/hooks/useBoolean';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import { WriteInputs } from '..';
import BackwardBottomSheet from './BackwardBottomSheet';
import WriteBottomSheet from './WriteBottomSheet';
import { LetterPaper } from '.';

const LetterWriteContainer = () => {
  const navigate = useNavigate();
  const WriteBottomSheetProps = useBoolean(false);
  const backwardBottomSheetProps = useBoolean(false);

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext<WriteInputs>();

  const handleBackward = () => {
    if (watch('age').length !== 0 || watch('content') || watch('image')) {
      backwardBottomSheetProps.on();
    } else {
      navigate(ROUTER_PATHS.ROOT);
    }
  };

  const showToast = (message: string | undefined) => {
    toast.warn(message, {
      position: 'bottom-center',
      autoClose: 1500,
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    if (errors.worryType || errors.gender || errors.age) {
      showToast('보낼 사람을 선택하세요');
    } else if (errors.content) {
      const message =
        watch('content').length === 0
          ? '내용을 입력하세요'
          : errors.content.message;
      showToast(message);
    } else if (errors.image) {
      showToast(errors.image.message?.toString());
    }
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit(WriteBottomSheetProps.on)}
      css={style.contentWrapper}
    >
      <LetterPaper />
      <Navbar css={style.navbar}>
        <Button
          onClick={handleBackward}
          type="button"
          variant="secondary"
          size="sm"
        >
          취소
        </Button>
        <Button type="submit" variant="primary" size="sm">
          보내기
        </Button>
      </Navbar>
      <WriteBottomSheet {...WriteBottomSheetProps} />
      <BackwardBottomSheet {...backwardBottomSheetProps} />
    </form>
  );
};

export default LetterWriteContainer;

const style = {
  contentWrapper: css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-inline: 0.5rem;
  `,
  navbar: css`
    padding-inline: 0;
  `,
};
