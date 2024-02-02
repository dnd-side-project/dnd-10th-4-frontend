import Chip from '@/components/Chip';
import style from '../styles';

interface GenderSelectProps {
  selectGender: string;
  setSelectGender: (gender: string) => void;
}

const GenderSelect = ({ selectGender, setSelectGender }: GenderSelectProps) => {
  const chipLabels: string[] = ['모두에게 보내기', '나와 같은 성별에게 보내기'];

  const handleChipClick = (label: string) => {
    setSelectGender(label === selectGender ? '' : label);
  };

  return (
    <section>
      <h3 css={style.label}>성별</h3>
      <div css={style.genderChip}>
        {chipLabels.map((label) => (
          <Chip
            key={label}
            variant={label === selectGender ? 'form-selected' : 'form'}
            onClick={() => handleChipClick(label)}
          >
            {label}
          </Chip>
        ))}
      </div>
    </section>
  );
};

export default GenderSelect;
