import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import { WriteInputs } from '..';

const LetteWriteHeader = () => {
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
      <Header
        css={style.header}
        leftContent={
          <CaretLeft
            strokeWidth={2.5}
            stroke="white"
            onClick={handleBackward}
          />
        }
      />
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
