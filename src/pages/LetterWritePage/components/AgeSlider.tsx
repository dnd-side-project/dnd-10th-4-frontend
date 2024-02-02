import Slider from '@mui/material/Slider';
import style from '../styles';

const AgeSlider = ({
  value,
  onChange,
}: {
  value: number[];
  onChange: (e: Event, newValue: number | number[]) => void;
}) => (
  <section>
    <h3 css={style.label}>나이</h3>
    <Slider
      getAriaLabel={() => 'Age range'}
      value={value}
      onChange={onChange}
      valueLabelDisplay="auto"
      disableSwap
      min={15}
      max={40}
      css={style.slider}
    />
    <div css={style.age}>
      <span>{value[0]}세 이상</span>
      <span>{value[1]}세 이하</span>
    </div>
  </section>
);

export default AgeSlider;
