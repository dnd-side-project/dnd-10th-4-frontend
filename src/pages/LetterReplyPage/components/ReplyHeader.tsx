import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import { ROUTER_PATHS } from '@/router';
import DetailTimeChip from '@/components/DetailTimeChip';
import useLetterReplyWithTag from '../hooks/useLetterReplyWithTag';

interface ReplyHeaderProps {
  letterId: number;
}

const ReplyHeader = ({ letterId }: ReplyHeaderProps) => {
  const naviage = useNavigate();

  const { replyLetter } = useLetterReplyWithTag(letterId);

  return (
    <Header
      css={style.header}
      leftContent={
        <>
          <CaretLeft
            css={style.icon}
            strokeWidth={2.5}
            color="white"
            onClick={() => naviage(ROUTER_PATHS.ROOT)}
          />
          <DetailTimeChip createdAt={replyLetter.createdAt} />
        </>
      }
      rightContent={
        <IconButton>
          <Siren color="white" height={20} width={20} />
        </IconButton>
      }
    />
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
