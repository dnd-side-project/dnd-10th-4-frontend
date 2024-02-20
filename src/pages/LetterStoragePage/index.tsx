import { css } from '@emotion/react';
import Tabs from '@/components/Tabs';
import StorageHeader from './components/StorageHeader';

const LetterStoragePage = () => {
  return (
    <div css={style.container}>
      <StorageHeader />
      <Tabs
        tabItems={[
          {
            content: <div>보관한 편지</div>,
            key: '1',
            label: '보관한 편지',
          },
          {
            content: <div>내가 보낸 편지</div>,
            key: '2',
            label: '내가 보낸 편지',
          },
        ]}
      />
    </div>
  );
};

export default LetterStoragePage;

const style = {
  container: css`
    width: 100%;
  `,
};
