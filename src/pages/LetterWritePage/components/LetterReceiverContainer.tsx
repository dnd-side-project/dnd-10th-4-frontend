import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import { CaretDown } from '@/assets/icons';

interface ReceiverContainerProps {
  onClick: () => void;
  isOpen: boolean;
}

const ReceiverContainer = ({ onClick, isOpen }: ReceiverContainerProps) => {
  const { watch } = useFormContext();

  const age = watch('age');
  const gender = watch('gender');
  const concern = watch('concern');

  return (
    <div css={style.ReceiverContainer}>
      <span>To.</span>
      {age.length !== 0 ? (
        <div onClick={onClick} css={style.ReceiverBoxSelect}>
          <div>
            <span>
              {age[0]}~{age[1]}
            </span>
            {gender !== '' && (
              <span>
                {gender === '모두에게 보내기' ? '모두에게' : '동성에게'}
              </span>
            )}
            {concern !== '' && <span>{concern}</span>}
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

const style = {
  ReceiverContainer: css`
    display: flex;
    align-items: center;

    span {
      ${textStyles.t4};
    }
  `,
  ReceiverBoxUnSelect: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid white;
    border-radius: 0.5rem;
    background: rgb(255 255 255 / 0.38);
    letter-spacing: -0.0035rem;
    cursor: pointer;

    span {
      color: ${COLORS.gray3};
      ${textStyles.b4m};
    }
  `,
  ReceiverBoxSelect: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 0.5rem;
    padding: 0.4375rem 0.75rem;
    border: 1px solid white;
    border-radius: 0.5rem;
    background: ${COLORS.gray6};
    letter-spacing: -0.0035rem;
    cursor: pointer;

    div {
      display: flex;
      gap: 0.625rem;
    }

    span {
      padding-inline: 0.5rem;
      border: 1px solid ${COLORS.gray4};
      border-radius: 1.25rem;
      background: ${COLORS.gray5};
      color: ${COLORS.gray1};
      font-weight: 500;
      font-size: 14px;
    }
  `,
  caretDown: (isOpen: boolean) => css`
    color: ${COLORS.gray2};
    transition: transform 0.5s;
    transform: ${isOpen ? 'rotate(180deg)' : 'none'};
  `,
};
