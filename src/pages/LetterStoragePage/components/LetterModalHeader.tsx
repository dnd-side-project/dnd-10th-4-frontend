import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, TrashCan, Copy } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import useBoolean from '@/hooks/useBoolean';
import DeleteBottomSheet from './DeleteBottomSheet';

interface letterModalHeaderProps {
  headerText: string;
  copyContent: string;
  letterId: number;
  off: () => void;
  type?: 'reply' | 'sent';
}

const LetterModalHeader = ({
  headerText,
  copyContent,
  letterId,
  off,
  type = 'sent',
}: letterModalHeaderProps) => {
  const deleteBottomSheetProps = useBoolean(false);

  const handleContentCopy = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast.success('편지가 복사되었어요.', {
          autoClose: 1500,
          position: 'bottom-center',
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error('편지 복사를 실패했어요', {
          autoClose: 1500,
          position: 'bottom-center',
        });
      });
  };

  return (
    <>
      <Header css={style.header}>
        <Header.Left>
          <div css={style.leftHeader}>
            <CaretLeft
              css={style.icon}
              strokeWidth={2.5}
              color="white"
              onClick={off}
            />
            <span css={style.headerText}>{headerText}</span>
          </div>
        </Header.Left>
        <Header.Right>
          <div css={style.rightHeader}>
            <IconButton
              onClick={() => {
                handleContentCopy(copyContent);
              }}
            >
              <Copy stroke="white" />
            </IconButton>
            <IconButton onClick={deleteBottomSheetProps.on}>
              <TrashCan fill="white" />
            </IconButton>
          </div>
        </Header.Right>
      </Header>
      <DeleteBottomSheet
        letterId={letterId}
        offModal={off}
        {...deleteBottomSheetProps}
        type={type}
      />
    </>
  );
};

export default LetterModalHeader;

const style = {
  header: css`
    height: 2.5rem;
    margin-bottom: 0.5rem;
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
  `,
  leftHeader: css`
    display: flex;
    gap: 0.625rem;
    align-items: center;
  `,
  rightHeader: css`
    display: flex;
    gap: 0.625rem;
  `,
  icon: css`
    cursor: pointer;
  `,
  headerText: css`
    color: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
  `,
};
