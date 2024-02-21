import { css } from '@emotion/react';
import Tabs from '@/components/Tabs';
import StorageHeader from './components/StorageHeader';
import ArchiveLetters from './archiveLetters';
import MySentLetters from './mySentLetters';

const LetterStoragePage = () => {
  return (
    <div css={style.container}>
      <StorageHeader />
      <div css={style.content}>
        <Tabs
          tabItems={[
            {
              content: <ArchiveLetters />,
              key: '1',
              label: '보관한 편지',
            },
            {
              content: <MySentLetters />,
              key: '2',
              label: '내가 보낸 편지',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default LetterStoragePage;

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  content: css`
    margin-top: 4.5rem;
    padding-inline: 1.25rem;
  `,
};
