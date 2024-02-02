import Slider from '@mui/material/Slider';
import style from '../styles';

interface AgeSliderProps {
  selectAge: number[];
  setSelectAge: (age: number[]) => void;
}

const AgeSlider = ({ selectAge, setSelectAge }: AgeSliderProps) => {
  const handleChange = (_e: Event, newValue: number | number[]) => {
    setSelectAge(newValue as number[]);
  };

  return (
    <section>
      <h3 css={style.label}>나이</h3>
      <Slider
        getAriaLabel={() => 'Age range'}
        value={selectAge}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        min={15}
        max={40}
        css={style.slider}
      />
      <div css={style.age}>
        <span>{selectAge[0]}세 이상</span>
        <span>{selectAge[1]}세 이하</span>
      </div>
    </section>
  );
};

export default AgeSlider;
