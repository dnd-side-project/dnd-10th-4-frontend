import { useMemo } from 'react';
import { HourGlass } from '@/assets/icons';
import { formatDetailTimechipDate } from '@/utils/dateUtils';
import Chip from '../Chip';
import style from './styles';

interface DetailTimeChipProps {
  createdAt: string;
}

const DetailTimeChip = ({ createdAt, ...props }: DetailTimeChipProps) => {
  const expiredAt = useMemo(
    () => new Date(new Date(createdAt).getTime() + 48 * 60 * 60 * 1000),
    [createdAt],
  );

  const { timeText, isAlmostExpired } = formatDetailTimechipDate(
    new Date(),
    expiredAt,
  );

  return (
    <Chip variant="bottle-tag" {...props} css={style.chip(isAlmostExpired)}>
      <HourGlass width={16} height={16} />
      <span css={style.text}>{timeText}</span>
    </Chip>
  );
};

export default DetailTimeChip;
