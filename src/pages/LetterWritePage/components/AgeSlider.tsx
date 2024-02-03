import { useFormContext } from 'react-hook-form';
import Slider from '@mui/material/Slider';
import style from '../styles';

const AgeSlider = () => {
  const { setValue, watch } = useFormContext();

  const handleChange = (_e: Event, newValue: number | number[]) => {
    setValue('age', newValue as number[]);
  };

  return (
    <section>
      <h3 css={style.label}>나이</h3>
      <Slider
        getAriaLabel={() => 'Age range'}
        value={watch('age')}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        min={15}
        max={40}
        css={style.slider}
      />
      <div css={style.age}>
        <span>{watch('age')[0]}세 이상</span>
        <span>{watch('age')[1]}세 이하</span>
      </div>
    </section>
  );
};

export default AgeSlider;
