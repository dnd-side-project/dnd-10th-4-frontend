import Slider from '@mui/material/Slider';
import style from '../styles';

const AgeSlider = ({
  value,
  handleChange,
}: {
  value: number[];
  handleChange: (e: Event, newValue: number | number[]) => void;
}) => (
  <div>
    <h3 css={style.label}>나이</h3>
    <Slider
      getAriaLabel={() => 'Minimum distance'}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      disableSwap
      min={15}
      max={50}
      css={style.slider}
    />
    <div css={style.age}>
      <p>{value[0]}세 이상</p>
      <p>{value[1]}세 이하</p>
    </div>
  </div>
);

export default AgeSlider;
