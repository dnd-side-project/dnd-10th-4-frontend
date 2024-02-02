import Chip from '@/components/Chip';
import style from '../styles';

const GenderSelect = () => (
  <div>
    <h3 css={style.label}>성별</h3>
    <div css={style.genderChip}>
      <Chip variant="form">모두에게 보내기</Chip>
      <Chip variant="form">나와 같은 성별에게 보내기</Chip>
    </div>
  </div>
);

export default GenderSelect;
