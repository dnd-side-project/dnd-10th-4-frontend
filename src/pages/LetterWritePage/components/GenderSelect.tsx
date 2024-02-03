import Chip from '@/components/Chip';
import style from '../styles';

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
