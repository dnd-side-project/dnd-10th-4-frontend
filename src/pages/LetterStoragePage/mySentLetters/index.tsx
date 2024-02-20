import { ROUTER_PATHS } from '@/router';
import { PencilLine } from '@/assets/icons';
import StorageEmpty from '../components/StorageEmpty';

const MySentLetters = () => {
  return (
    <StorageEmpty
      textTitle="내가 보낸 편지가 없어요"
      text={
        <>
          아무에게도 말하지 못한 당신의 고민을 <br /> 바다에 흘러보내 보아요
        </>
      }
      linkPath={ROUTER_PATHS.ROOT}
      buttonIcon={<PencilLine />}
      buttonText="편지 쓰러 가기"
    />
  );
};

export default MySentLetters;
