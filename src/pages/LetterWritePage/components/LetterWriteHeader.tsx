import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';
import useBoolean from '@/hooks/useBoolean';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import { WriteInputs } from '..';
import BackwardBottomSheet from './BackwardBottomSheet';

const LetteWriteHeader = () => {
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
      <Header css={style.header}>
        <Header.Left>
          <CaretLeft
            strokeWidth={2.5}
            stroke="white"
            onClick={handleBackward}
          />
        </Header.Left>
      </Header>
      <BackwardBottomSheet {...backwardBottomSheetProps} />
    </>
  );
};

export default LetteWriteHeader;

const style = {
  header: css`
    height: 2.5rem;
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;

    & > div:nth-of-type(1) {
      cursor: pointer;
    }
  `,
};
