import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import DetailTimeChip from '@/components/DetailTimeChip';
import Tooltip from '@/components/Tooltip';
import useLetterReplyWithTag from '../hooks/useLetterReplyWithTag';

interface ReplyHeaderProps {
  letterId: number;
}

const ReplyHeader = ({ letterId }: ReplyHeaderProps) => {
  const navigate = useNavigate();

  const { replyLetter } = useLetterReplyWithTag(letterId);

  return (
    <Header css={style.header}>
      <Header.Left>
        <CaretLeft
          css={style.icon}
          strokeWidth={2.5}
          color="white"
          onClick={() => navigate(ROUTER_PATHS.ROOT)}
        />
        <Tooltip
          delay={3000}
          align="start"
          triggerContent={
            <div>
              <DetailTimeChip type="day" createdAt={replyLetter.createdAt} />
            </div>
          }
        >
          내게 온 답장은 7일이 지나면 사라져요
        </Tooltip>
      </Header.Left>
      <Header.Right>
        <IconButton>
          <Siren color="white" height={20} width={20} />
        </IconButton>
      </Header.Right>
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
};
