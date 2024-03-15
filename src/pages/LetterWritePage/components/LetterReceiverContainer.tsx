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
import TagList from '@/components/TagList';
import Tooltip from '@/components/Tooltip';
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

  const tags = [];

  if (age.length !== 0) {
    const ageLabel = `${age[0]}~${age[1]}`;
    tags.push(ageLabel);
  }
  if (gender !== '') {
    const genderLabel =
      EQUAL_GENDER_DICT[0] === gender ? '모두에게' : '동성에게';
    tags.push(genderLabel);
  }
  if (worryType !== '') {
    const worryLabel = WORRY_DICT[worryType];
    tags.push(worryLabel);
  }

  return (
    <div css={style.ReceiverContainer}>
      <span>To.</span>
      {tags.length !== 0 ? (
        <div onClick={onClick} css={style.ReceiverBoxSelect}>
          <TagList tags={tags} variant="filter" />
          <CaretDown
            css={style.caretDown(isOpen)}
            stroke={COLORS.gray3}
            strokeWidth={2}
          />
        </div>
      ) : (
        <div onClick={onClick} css={style.ReceiverBoxUnSelect}>
          <span>누구에게 보낼까요?</span>
          <Tooltip delay={2000}>
            <Tooltip.Trigger>
              <div>
                <CaretDown
                  css={style.caretDown(isOpen)}
                  stroke={COLORS.gray3}
                  strokeWidth={2}
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content align="end">
              편지를 누구에게 보낼지 선택해 주세요.
            </Tooltip.Content>
          </Tooltip>
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
