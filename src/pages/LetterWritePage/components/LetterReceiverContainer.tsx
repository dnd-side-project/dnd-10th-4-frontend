import { useFormContext } from 'react-hook-form';
import { CaretDown } from '@/assets/icons';
import style from '../styles';

const ReceiverContainer = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  const { watch } = useFormContext();

  const age = watch('age');
  const gender = watch('gender');
  const concern = watch('concern');

  return (
    <div css={style.ReceiverContainer}>
      <span>To.</span>
      {age !== undefined ? (
        <div onClick={onClick} css={style.ReceiverBoxSelect}>
          <div>
            <span>
              {age[0]}~{age[1]}
            </span>
            {gender !== undefined && (
              <span>
                {gender === '모두에게 보내기' ? '모두에게' : '동성에게'}
              </span>
            )}
            {concern !== undefined && <span>{concern}</span>}
          </div>
          <CaretDown css={style.caretDown(isOpen)} />
        </div>
      ) : (
        <div onClick={onClick} css={style.ReceiverBoxUnSelect}>
          <span>누구에게 보낼까요?</span>
          <CaretDown css={style.caretDown(isOpen)} />
        </div>
      )}
    </div>
  );
};

export default ReceiverContainer;
