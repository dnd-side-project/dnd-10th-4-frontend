import { useMemo } from 'react';
import { css } from '@emotion/react';
import { HourGlass } from '@/assets/icons';
import Chip from '@/components/Chip';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { formatTimechipDate } from '@/utils/dateUtils';
import styles from './styles';

interface TimeChipProps {
  createdAt: string;
}

const TimeChip = ({ createdAt, ...props }: TimeChipProps) => {
  const expiredAt = useMemo(
    () => new Date(new Date(createdAt).getTime() + 48 * 60 * 60 * 1000),
    [createdAt],
  );

  const timeText = formatTimechipDate(new Date(), expiredAt);
  const isAlmostExpired = timeText.at(-1) !== 'h';

  return (
    <Chip variant="bottle-tag" css={styles.timeChip} {...props}>
      <HourGlass
        width="1rem"
        height="1rem"
        color={isAlmostExpired ? COLORS.danger : COLORS.gray3}
      />
      <p
        css={[
          textStyles.b4m,
          css({ color: isAlmostExpired ? COLORS.danger : COLORS.gray1 }),
        ]}
      >
        {timeText}
      </p>
    </Chip>
  );
};

export default TimeChip;
