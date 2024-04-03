import { useState } from 'react';
import { css } from '@emotion/react';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import { PencilLine } from '@/assets/icons';
import PaginationBar from '@/components/PaginationBar';
import StorageEmpty from '../components/StorageEmpty';
import useLetterSend from '../hooks/useLetterSend';
import StorageLetter from '../components/StorageLetter';

const MySentLetters = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const data = useLetterSend(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {data.letters.length > 0 ? (
        <div css={style.container}>
          <StorageLetter letters={data.letters} />
          {data.totalPage > 1 && (
            <PaginationBar
              count={data.totalPage}
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
    justify-content: space-around;
    height: calc(100svh - 8rem);
  `,
};
