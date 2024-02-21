import { ROUTER_PATHS } from '@/router';
import { PencilLine } from '@/assets/icons';
import PaginationBar from '@/components/PaginationBar';
import StorageEmpty from '../components/StorageEmpty';
import StorageLetter from '../components/StorageLetter';
import { testData } from '../testData';

const MySentLetters = () => {
  return (
    <>
      {testData.letters.length > 0 ? (
        <div css={{ marginBottom: '1rem' }}>
          <StorageLetter letters={testData.letters} />
          {testData.totalPage > 1 && (
            <PaginationBar
              count={testData.totalPage}
              defaultPage={1}
              onChange={() => console.log('페이지')}
            />
          )}
        </div>
      ) : (
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
      )}
    </>
  );
};

export default MySentLetters;
