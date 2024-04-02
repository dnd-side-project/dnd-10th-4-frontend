import { useState } from 'react';
import { css } from '@emotion/react';
import { ScrolLetter } from '@/assets/icons';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import PaginationBar from '@/components/PaginationBar';
import StorageEmpty from '../components/StorageEmpty';
import StorageLetter from '../components/StorageLetter';
import useLetterStorage from '../hooks/useLetterStorage';

const ArchiveLetters = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const data = useLetterStorage(currentPage);

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
          textTitle="보관함에 보관된 편지가 없어요"
          text={
            <>
              나에게 온 답장을 보관하면 사라지지 않고 <br /> 언제든 다시 읽어볼
              수 있어요
            </>
          }
          linkPath={ROUTER_PATHS.ROOT}
          buttonIcon={<ScrolLetter />}
          buttonText="내게 온 답장 보러가기"
        />
      )}
    </>
  );
};

export default ArchiveLetters;

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: calc(100svh - 8rem);
  `,
};
