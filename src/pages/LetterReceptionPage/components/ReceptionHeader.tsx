import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import Chip from '@/components/Chip';
import IconButton from '@/components/IconButton';
import HourGlass from '@/assets/icons/HourGlass';

interface ReceptionHeaderProps {
  onClickBackIcon: () => void;
}

const ReceptionHeader = ({ onClickBackIcon }: ReceptionHeaderProps) => {
  return (
    <Header
      css={style.header}
      leftContent={
        <>
          <CaretLeft
            strokeWidth={2.5}
            color="white"
            onClick={onClickBackIcon}
          />
          <Chip>
            <HourGlass height={16} />
            00:00:00
          </Chip>
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
    margin-block: 0.5rem;
  `,
  leftHeader: css`
    display: flex;
    gap: 0.5rem;
  `,
};

export default ReceptionHeader;
