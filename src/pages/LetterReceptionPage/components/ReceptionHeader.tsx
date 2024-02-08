import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import Chip from '@/components/Chip';
import IconButton from '@/components/IconButton';
import HourGlass from '@/assets/icons/HourGlass';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import COLORS from '@/constants/colors';
import { ROUTER_PATHS } from '@/router';

interface ReceptionHeaderProps {
  /** 메인페이지로 이동 여부 */
  goHome?: boolean;
}

const ReceptionHeader = ({ goHome = true }: ReceptionHeaderProps) => {
  const navigate = useNavigate();
  const { toPrev } = useFunnelContext();

  return (
    <Header
      css={style.header}
      leftContent={
        <>
          <CaretLeft
            strokeWidth={2.5}
            color="white"
            onClick={goHome ? () => navigate(ROUTER_PATHS.ROOT) : toPrev}
          />
          <Chip variant="primary">
            <HourGlass height={16} color={COLORS.primary} />
            <span css={{ color: COLORS.primary }}>00:00:00</span>
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
