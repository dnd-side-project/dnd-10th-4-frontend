import { ROUTER_PATHS } from '@/router';
import { ScrolLetter } from '@/assets/icons';
import StorageEmpty from '../components/StorageEmpty';

const ArchiveLetters = () => {
  return (
    <StorageEmpty
      textTitle="보관함에 보관된 편지가 없어요"
      text={
        <>
          나에게 온 답장을 보관하면 사라지지 않고 <br /> 언제든 다시 읽어볼 수
          있어요
        </>
      }
      linkPath={ROUTER_PATHS.ROOT}
      buttonIcon={<ScrolLetter />}
      buttonText="내게 온 답장 보러가기"
    />
  );
};

export default ArchiveLetters;
