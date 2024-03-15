import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import useBoolean from '@/hooks/useBoolean';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import { WriteInputs } from '..';
import BackwardBottomSheet from './BackwardBottomSheet';
import { LetterPaper } from '.';

const LetterWriteContainer = () => {
  const navigate = useNavigate();
  const backwardBottomSheetProps = useBoolean(false);

  const { watch } = useFormContext<WriteInputs>();

  const handleBackward = () => {
    if (watch('age').length !== 0 || watch('content') || watch('image')) {
      backwardBottomSheetProps.on();
    } else {
      navigate(ROUTER_PATHS.ROOT);
    }
  };

  return (
    <>
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
      <BackwardBottomSheet {...backwardBottomSheetProps} />
    </>
  );
};

export default LetterWriteContainer;

const style = {
  navbar: css`
    padding-inline: 0;
  `,
};
