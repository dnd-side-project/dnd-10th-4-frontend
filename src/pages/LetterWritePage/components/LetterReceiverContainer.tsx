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
    <p>To.</p>
    <div onClick={onClick} css={style.ReceiverBox}>
      <p>누구에게 보낼까요?</p>
      <CaretDown css={style.caretDown(isOpen)} />
    </div>
  </div>
);

export default ReceiverContainer;
