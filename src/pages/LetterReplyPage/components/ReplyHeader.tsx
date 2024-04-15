import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, Siren, TrashCan } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import DetailTimeChip from '@/components/DetailTimeChip';
import Tooltip from '@/components/Tooltip';
import ReportBottomSheet from '@/components/ReportBottomSheet';
import useBoolean from '@/hooks/useBoolean';
import useLetterReplyWithTag from '../hooks/useLetterReplyWithTag';
import DeleteBottomSheet from './DeleteBottomSheet';

interface ReplyHeaderProps {
  letterId: number;
}

const ReplyHeader = ({ letterId }: ReplyHeaderProps) => {
  const navigate = useNavigate();

  const { replyLetter } = useLetterReplyWithTag(letterId);
  const reportBottomSheetProps = useBoolean(false);
  const deleteBottomSheetProps = useBoolean(false);

  return (
    <Header css={style.header}>
      <Header.Left>
        <CaretLeft
          css={style.icon}
          strokeWidth={2.5}
          color="white"
          onClick={() => navigate(ROUTER_PATHS.ROOT)}
        />
        <Tooltip delay={3000}>
          <Tooltip.Trigger>
            <div>
              <DetailTimeChip type="day" createdAt={replyLetter.createdAt} />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content align="start">
            내게 온 답장은 7일이 지나면 사라져요
          </Tooltip.Content>
        </Tooltip>
      </Header.Left>
      <Header.Right>
        <div css={style.rightHeader}>
          <IconButton onClick={deleteBottomSheetProps.on}>
            <TrashCan color="white" height={20} width={20} />
          </IconButton>
          <IconButton onClick={reportBottomSheetProps.on}>
            <Siren color="white" height={20} width={20} />
          </IconButton>
        </div>
      </Header.Right>
      <ReportBottomSheet {...reportBottomSheetProps} />
      <DeleteBottomSheet {...deleteBottomSheetProps} letterId={letterId} />
    </Header>
  );
};

export default ReplyHeader;

const style = {
  header: css`
    height: 2.5rem;
    margin-bottom: 0.5rem;
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
  `,
  icon: css`
    cursor: pointer;
  `,
  rightHeader: css`
    display: flex;
    gap: 0.625rem;
  `,
};
