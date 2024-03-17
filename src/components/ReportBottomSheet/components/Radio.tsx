import { ChangeEvent } from 'react';
import style from './styles';

interface RadioProps {
  value: string;
  text: string;
  selectedValue: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({ value, text, selectedValue, onChange }: RadioProps) => {
  return (
    <label css={style.radio}>
      <input
        css={style.radioButton}
        type="radio"
        name="report"
        value={value}
        onChange={onChange}
        checked={value === selectedValue}
      />
      <span css={style.radioSpan(value, selectedValue)}>{text}</span>
    </label>
  );
};

export default Radio;
