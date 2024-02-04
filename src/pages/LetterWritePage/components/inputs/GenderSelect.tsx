import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import Chip from '@/components/Chip';

interface genderSelectProps {
  gender: string | undefined;
  setGender: (gender: string) => void;
}

const GenderSelect = ({ gender, setGender }: genderSelectProps) => {
  const chipLabels: string[] = ['모두에게 보내기', '나와 같은 성별에게 보내기'];

  return (
    <section>
      <h3 css={style.label}>성별</h3>
      <div css={style.genderChip}>
        {chipLabels.map((label) => (
          <Chip
            key={label}
            variant={gender === label ? 'form-selected' : 'form'}
            onClick={() => setGender(label)}
          >
            {label}
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
