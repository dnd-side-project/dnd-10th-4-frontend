import { useState } from 'react';
import { css } from '@emotion/react';
import { ROUTER_PATHS } from '@/router';
import { PencilLine } from '@/assets/icons';
import PaginationBar from '@/components/PaginationBar';
import StorageEmpty from '../components/StorageEmpty';
import { testData } from '../testData';
import useLetterSend from '../hooks/useLetterSend';
import StorageSendLetter from '../components/StorageSendLetter';

const MySentLetters = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const data = useLetterSend(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {testData.letters.length > 0 ? (
        <div css={style.container}>
          <StorageSendLetter letters={data.postList} />
          {testData.totalPage > 1 && (
            <PaginationBar
              count={testData.totalPage}
              defaultPage={1}
              onChange={handlePageChange}
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

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100svh - 72px - 50px - 1rem);
    margin-bottom: 1rem;
  `,
};
