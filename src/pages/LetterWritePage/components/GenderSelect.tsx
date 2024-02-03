import { useFormContext } from 'react-hook-form';
import Chip from '@/components/Chip';
import style from '../styles';

const GenderSelect = () => {
  const { setValue, watch } = useFormContext();

  const chipLabels: string[] = ['모두에게 보내기', '나와 같은 성별에게 보내기'];

  return (
    <section>
      <h3 css={style.label}>성별</h3>
      <div css={style.genderChip}>
        {chipLabels.map((label) => (
          <Chip
            key={label}
            variant={watch('gender') === label ? 'form-selected' : 'form'}
            onClick={() => setValue('gender', label)}
          >
            {label}
          </Chip>
        ))}
      </div>
    </section>
  );
};

export default GenderSelect;
