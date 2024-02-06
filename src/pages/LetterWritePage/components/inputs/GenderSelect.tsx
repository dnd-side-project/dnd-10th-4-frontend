import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import Chip from '@/components/Chip';
import { EQUAL_GENDER_DICT, EQUAL_GENDER } from '@/constants/letters';

interface genderSelectProps {
  gender: EQUAL_GENDER;
  setGender: (gender: EQUAL_GENDER) => void;
}

const GenderSelect = ({ gender, setGender }: genderSelectProps) => {
  return (
    <section>
      <h3 css={style.label}>성별</h3>
      <div css={style.genderChip}>
        {Object.keys(EQUAL_GENDER_DICT).map((key) => (
          <Chip
            key={key}
            variant={gender === key ? 'form-selected' : 'form'}
            onClick={() => setGender(key as EQUAL_GENDER)}
          >
            {key}
          </Chip>
        ))}
      </div>
    </section>
  );
};

export default GenderSelect;

const style = {
  label: css`
    padding-block: 0.5rem;
    ${textStyles.t3};
  `,
  genderChip: css`
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    button {
      flex: 1;
      color: ${COLORS.gray1};
      font-weight: 700;
      font-style: normal;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  `,
};
