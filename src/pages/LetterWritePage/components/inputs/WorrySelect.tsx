import { css } from '@emotion/react';
import Chip from '@/components/Chip';
import textStyles from '@/styles/textStyles';
import { WORRY_DICT, Worry } from '@/constants/users';

interface WorrySelectProps {
  worryType: Worry;
  setWorryType: (worryType: Worry) => void;
}

const WorrySelect = ({ worryType, setWorryType }: WorrySelectProps) => {
  return (
    <section>
      <h3 css={[style.label, { paddingBottom: '0.25rem' }]}>고민</h3>
      <p css={textStyles.description}>
        고민을 선택을 하면 나와 비슷한 고민을 가진 낯선 친구에게 전달돼요
      </p>
      <div css={style.worryChip}>
        {Object.entries(WORRY_DICT).map(([key, value]) => (
          <Chip
            key={value}
            variant={worryType === key ? 'form-selected' : 'form'}
            onClick={() => setWorryType(key)}
          >
            {value}
          </Chip>
        ))}
      </div>
    </section>
  );
};

export default WorrySelect;

const style = {
  label: css`
    padding-block: 0.5rem;
    ${textStyles.t3};
  `,
  worryChip: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-block: 1rem;
  `,
};
