import Slider from '@mui/material/Slider';
import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import { letterWrite } from '@/constants/schemaLiteral';

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
        min={letterWrite.age.min}
        max={letterWrite.age.max}
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

const style = {
  label: css`
    padding-block: 0.5rem;
    ${textStyles.t3};
  `,
  slider: css`
    height: 0.5rem;
    color: ${COLORS.primary};

    .MuiSlider-rail {
      color: ${COLORS.gray5};
    }

    .MuiSlider-thumb {
      width: 1.25rem;
      height: 1.25rem;
      background: white;
      box-shadow:
        0 0.125rem 0.25rem 0 rgb(0 0 0 / 0.12),
        0 0.0313rem 0.125rem 0 rgb(0 0 0 / 0.12);
    }

    .MuiSlider-valueLabel {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0;
      border-radius: 50% 50% 50% 0;
      background: unset;
      background-color: ${COLORS.primary};
      font-size: 0.8rem;
      line-height: 1.5;
      transform: translate(50%, -100%) rotate(-45deg) scale(0);
      transform-origin: bottom left;

      &::before {
        display: none;
      }

      &.MuiSlider-valueLabelOpen {
        transform: translate(50%, -100%) rotate(-45deg) scale(1);
      }

      & > * {
        transform: rotate(45deg);
      }
    }
  `,
  age: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${COLORS.gray3};
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.5rem;
  `,
};
