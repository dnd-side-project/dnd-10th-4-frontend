import { useMemo } from 'react';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import Chip from '@/components/Chip';
import IconButton from '@/components/IconButton';
import HourGlass from '@/assets/icons/HourGlass';
import COLORS from '@/constants/colors';
import { formatTimechipDate } from '@/utils/dateUtils';
import useLetterWithTags from '../hooks/useLetterWithTags';

interface ReceptionHeaderProps {
  onClickPrev: () => void;
  letterId: number;
}

const ReceptionHeader = ({ onClickPrev, letterId }: ReceptionHeaderProps) => {
  const { receptionLetter } = useLetterWithTags(letterId);

  const expiredTime = useMemo(() => {
    return formatTimechipDate(
      new Date(),
      new Date(
        new Date(receptionLetter.createdAt).getTime() + 48 * 60 * 60 * 1000,
      ),
    );
  }, [receptionLetter.createdAt]);

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
          <Chip variant="primary">
            <HourGlass height={16} color={COLORS.primary} />
            <span css={{ color: COLORS.primary }}>{expiredTime}</span>
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
  icon: css`
    cursor: pointer;
  `,
};

export default ReceptionHeader;
