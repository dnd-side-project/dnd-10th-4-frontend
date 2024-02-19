import { useMemo } from 'react';
import { HourGlass } from '@/assets/icons';
import { formatDetailTimechipDate, formatTimechipDay } from '@/utils/dateUtils';
import Chip from '../Chip';
import style from './styles';

interface DetailTimeChipProps {
  createdAt: string;
  type?: 'time' | 'day';
}

const DetailTimeChip = ({
  createdAt,
  type = 'time',
  ...props
}: DetailTimeChipProps) => {
  const expiredAt = useMemo(
    () => new Date(new Date(createdAt).getTime() + 48 * 60 * 60 * 1000),
    [createdAt],
  );

  let timeText;
  let isAlmostExpired;

  if (type === 'time') {
    ({ timeText, isAlmostExpired } = formatDetailTimechipDate(
      new Date(),
      expiredAt,
    ));
  } else {
    ({ timeText, isAlmostExpired } = formatTimechipDay(new Date(), expiredAt));
  }

  return (
    <Chip variant="bottle-tag" {...props} css={style.chip(isAlmostExpired)}>
      <HourGlass width={16} height={16} />
      <span css={style.text}>{timeText}</span>
    </Chip>
  );
};

export default DetailTimeChip;
