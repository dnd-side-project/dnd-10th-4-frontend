import { useNavigate, useSearchParams } from 'react-router-dom';
import { css } from '@emotion/react';
import PaginationBar from '@/components/PaginationBar';
import Tabs from '@/components/Tabs';
import Header from '@/components/Header';
import STORAGE_KEYS from '@/constants/storageKeys';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import useAdminPageStore from '@/stores/useAdminPageStore';
import styles from './style';
import UserTab from './tabs/UserTab';
import ReportTab from './tabs/ReportTab';

const AdminMainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const navigate = useNavigate();
  const totalPage = useAdminPageStore((s) => s.totalPage);

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.refreshToken);
    navigate(ROUTER_PATHS.SIGNIN);
  };

  const handleTabChange = () => {
    setSearchParams({ ...searchParams, page: '1' });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({ ...searchParams, page: page.toString() });
  };

  return (
    <div css={styles.container}>
      <Header>
        <Header.Center>관리자 페이지</Header.Center>
        <Header.Right>
          <p css={css({ cursor: 'pointer' })} onClick={handleLogout}>
            로그아웃
          </p>
        </Header.Right>
      </Header>
      <main css={styles.main}>
        <Tabs defaultValue="user" onValueChange={handleTabChange}>
          <Tabs.List>
            <Tabs.Trigger value="user">사용자 관리</Tabs.Trigger>
            <Tabs.Trigger value="report">신고 관리</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="user">
            <UserTab />
          </Tabs.Content>
          <Tabs.Content value="report">
            <ReportTab />
          </Tabs.Content>
        </Tabs>
      </main>
      <PaginationBar
        count={totalPage}
        page={Number(page)}
        defaultPage={1}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default AdminMainPage;
