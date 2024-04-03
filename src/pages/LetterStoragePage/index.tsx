import { Suspense } from 'react';
import { css } from '@emotion/react';
import Tabs from '@/components/Tabs';
import LoadingSpinner from '@/components/LoadingSpinner';
import StorageHeader from './components/StorageHeader';
import ReplyStorage from './ReplyStorage';
import SentStorage from './SentStorage';

const LetterStoragePage = () => {
  return (
    <div css={style.container}>
      <StorageHeader />
      <div css={style.content}>
        <Tabs variant="primary" defaultValue="1">
          <Tabs.List>
            <Tabs.Trigger value="1">보관한 편지</Tabs.Trigger>
            <Tabs.Trigger value="2">내가 보낸 편지</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="1">
            <Suspense
              fallback={
                <div css={style.loadingSpinner}>
                  <LoadingSpinner size="4rem" />
                  <p>보관한 편지 가져오는 중...</p>
                </div>
              }
            >
              <ReplyStorage />
            </Suspense>
          </Tabs.Content>
          <Tabs.Content value="2">
            <Suspense
              fallback={
                <div css={style.loadingSpinner}>
                  <LoadingSpinner size="4rem" />
                  <p>내가 쓴 편지 가져오는 중...</p>
                </div>
              }
            >
              <SentStorage />
            </Suspense>
          </Tabs.Content>
        </Tabs>
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
    backdrop-filter: blur(10px);
  `,
  content: css`
    margin-top: 4.5rem;
    padding-inline: 1rem;
  `,
  loadingSpinner: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    height: calc(100svh - 15rem);
    margin-top: 7rem;
  `,
};
