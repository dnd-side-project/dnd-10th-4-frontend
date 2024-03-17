import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import DetailTimeChip from '@/components/DetailTimeChip';
import ReportBottomSheet from '@/components/ReportBottomSheet';
import useBoolean from '@/hooks/useBoolean';
import useLetterWithTags from '../hooks/useLetterWithTags';

interface ReceptionHeaderProps {
  onClickPrev: () => void;
  letterId: number;
}

const ReceptionHeader = ({ onClickPrev, letterId }: ReceptionHeaderProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);
  const reportBottomSheetProps = useBoolean(false);

  return (
    <Header css={style.header}>
      <Header.Left css={style.leftHeader}>
        <CaretLeft
          css={style.icon}
          strokeWidth={2.5}
          color="white"
          onClick={onClickPrev}
        />
        <DetailTimeChip createdAt={receptionLetter.createdAt} />
      </Header.Left>
      <Header.Right>
        <IconButton onClick={reportBottomSheetProps.on}>
          <Siren color="white" height={20} width={20} />
        </IconButton>
      </Header.Right>
      <ReportBottomSheet {...reportBottomSheetProps} />
    </Header>
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
