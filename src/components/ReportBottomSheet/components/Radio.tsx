import { ChangeEvent, forwardRef } from 'react';
import style from './styles';

interface RadioProps {
  value: string;
  text: string;
  selectedValue: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, name, text, selectedValue, onChange }, ref) => {
    return (
      <label css={style.radio}>
        <input
          css={style.radioButton}
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          ref={ref}
        />
        <span css={style.radioSpan(value, selectedValue)}>{text}</span>
      </label>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
