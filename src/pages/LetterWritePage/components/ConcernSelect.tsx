import Chip from '@/components/Chip';
import textStyles from '@/styles/textStyles';
import style from '../styles';

const ConcernSelect = ({ chipLabels }: { chipLabels: string[] }) => (
  <section>
    <h3 css={[style.label, { paddingBottom: '4px' }]}>고민</h3>
    <p css={textStyles.description}>
      고민을 선택을 하면 나와 비슷한 고민을 가진 낯선 친구에게 전달돼요
    </p>
    <div css={style.concernChip}>
      {chipLabels.map((label) => (
        <Chip key={label} variant="form">
          {label}
        </Chip>
      ))}
    </div>
  </section>
);

export default ConcernSelect;
