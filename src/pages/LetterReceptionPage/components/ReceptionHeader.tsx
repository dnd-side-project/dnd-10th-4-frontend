import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import DetailTimeChip from '@/components/DetailTimeChip';
import useLetterWithTags from '../hooks/useLetterWithTags';

interface ReceptionHeaderProps {
  onClickPrev: () => void;
  letterId: number;
}

const ReceptionHeader = ({ onClickPrev, letterId }: ReceptionHeaderProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);

  return (
    <Header
      css={style.header}
      leftContent={
        <>
          <CaretLeft
            css={style.icon}
            strokeWidth={2.5}
            color="white"
            onClick={onClickPrev}
          />
          <DetailTimeChip createdAt={receptionLetter.createdAt} />
        </>
      }
      leftStyle={style.leftHeader}
      rightContent={
        <IconButton>
          <Siren color="white" height={20} width={20} />
        </IconButton>
      }
    />
  );
};

const style = {
  header: css`
    height: 2.5rem;
    margin-bottom: 0.5rem;
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
  `,
  leftHeader: css`
    display: flex;
    gap: 0.5rem;
  `,
  icon: css`
    cursor: pointer;
  `,
};

export default ReceptionHeader;
