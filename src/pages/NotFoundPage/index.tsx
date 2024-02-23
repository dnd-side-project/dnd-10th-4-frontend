import { useNavigate } from 'react-router-dom';
import ErrorImage from '@/assets/images/error.svg';
import Button from '@/components/Button';
import { ROUTER_PATHS } from '@/router';
import styles from './style';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main css={styles.container}>
      <img css={styles.image} src={ErrorImage} alt="오류" />
      <h2 css={styles.title}>잘못된 경로</h2>
      <h2 css={styles.description}>존재하지 않는 페이지에요</h2>
      <Button
        css={styles.button}
        variant="primary"
        size="sm"
        type="button"
        onClick={() => navigate(ROUTER_PATHS.ROOT)}
      >
        홈으로
      </Button>
    </main>
  );
};

export default NotFoundPage;
