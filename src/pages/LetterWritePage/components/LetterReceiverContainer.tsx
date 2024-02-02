import { CaretDown } from '@/assets/icons';
import style from '../styles';

const ReceiverContainer = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => (
  <div css={style.ReceiverContainer}>
    <span>To.</span>
    <div onClick={onClick} css={style.ReceiverBox}>
      <span>누구에게 보낼까요?</span>
      <CaretDown css={style.caretDown(isOpen)} />
    </div>
  </div>
);

export default ReceiverContainer;
