import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import { type ReplyInputs } from '..';

interface ReplyButtonProps {
  onPrev: () => void;
}

const ReplyButton = ({ onPrev }: ReplyButtonProps) => {
  const { value, on, off } = useBoolean(false);

  const { watch, reset } = useFormContext<ReplyInputs>();

  const handleBackward = () => {
    if (watch('replyContent') || watch('image')) {
      on();
    } else {
      onPrev();
    }
  };

  return (
    <>
      <Navbar css={style.navbar}>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={handleBackward}
        >
          취소
        </Button>
        <Button type="submit" variant="primary" size="sm">
          답장 보내기
        </Button>
      </Navbar>
      <BottomSheet open={value} onOpen={on} onClose={off}>
        <BottomSheet.Title>답장 쓰기를 취소할까요?</BottomSheet.Title>
        <BottomSheet.Description>
          답장 작성 취소시, <br /> 작성중인 글과 사진은 저장되지 않아요.
        </BottomSheet.Description>
        <BottomSheet.ButtonSection>
          <Button variant="cancel" onClick={off}>
            계속 쓰기
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              onPrev();
              off();
              reset();
            }}
          >
            작성 취소
          </Button>
        </BottomSheet.ButtonSection>
      </BottomSheet>
    </>
  );
};

export default ReplyButton;

const style = {
  navbar: css`
    position: fixed;
    bottom: 0;
    width: 96vw;
    max-width: 580px;
    padding-inline: 0;
  `,
};
