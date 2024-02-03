import Slider from '@mui/material/Slider';
import style from '../styles';

interface ageSliderProps {
  age: number[];
  setAge: (age: number[]) => void;
}

const AgeSlider = ({ age, setAge }: ageSliderProps) => {
  const handleChange = (_e: Event, newValue: number | number[]) => {
    setAge(newValue as number[]);
  };

  return (
    <section>
      <h3 css={style.label}>나이</h3>
      <Slider
        getAriaLabel={() => 'Age range'}
        value={age}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        min={15}
        max={40}
        css={style.slider}
      />
      <div css={style.age}>
        <span>{age[0]}세 이상</span>
        <span>{age[1]}세 이하</span>
      </div>
    </section>
  );
};

export default AgeSlider;
