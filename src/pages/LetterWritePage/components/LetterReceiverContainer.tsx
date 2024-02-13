import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import { CaretDown } from '@/assets/icons';
import {
  WORRY_DICT,
  type Worry,
  EQUAL_GENDER_DICT,
  type EqualGender,
} from '@/constants/letters';
import Chip from '@/components/Chip';
import { type WriteInputs } from '..';

interface ReceiverContainerProps {
  onClick: () => void;
  isOpen: boolean;
}

const ReceiverContainer = ({ onClick, isOpen }: ReceiverContainerProps) => {
  const { watch } = useFormContext<WriteInputs>();

  const age = watch('age');
  const gender = watch('gender') as '' | EqualGender;
  const worryType = watch('worryType') as '' | Worry;

  return (
    <div css={style.ReceiverContainer}>
      <span>To.</span>
      {age.length !== 0 ? (
        <div onClick={onClick} css={style.ReceiverBoxSelect}>
          <div>
            <Chip variant="form-selected">
              <span>#</span>
              {age[0]}~{age[1]}
            </Chip>
            {gender !== '' && (
              <Chip variant="form-selected">
                <span>#</span>
                {EQUAL_GENDER_DICT[0] === gender ? '모두에게' : '동성에게'}
              </Chip>
            )}
            {worryType !== '' && (
              <Chip variant="form-selected">
                <span>#</span>
                {WORRY_DICT[worryType]}
              </Chip>
            )}
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
    border-radius: 0.5rem;
    background: rgb(204 199 190 / 0.3);
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
    border-radius: 0.5rem;
    background: rgb(204 199 190 / 0.3);
    letter-spacing: -0.0035rem;
    cursor: pointer;

    div {
      display: flex;
      gap: 0.625rem;
    }

    button {
      padding-block: 0;
      padding-inline: 0.5rem;
      color: black;

      ${textStyles.b4m};
      span {
        color: ${COLORS.gray2};
      }
    }
  `,
  caretDown: (isOpen: boolean) => css`
    color: ${COLORS.gray2};
    transition: transform 0.5s;
    transform: ${isOpen ? 'rotate(180deg)' : 'none'};
  `,
};
