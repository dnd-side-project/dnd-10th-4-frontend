import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { Switch } from '@mui/material';
import Header from '@/components/Header';
import { CaretLeft, CaretRight } from '@/assets/icons';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { ROUTER_PATHS } from '@/router';
import useBoolean from '@/hooks/useBoolean';
import styles from './style';
import NicknameBottomSheet from './components/NicknameBottomSheet';

const MyPage = () => {
  const nicknameBottomSheetProps = useBoolean(false);

  return (
    <div css={styles.page}>
      <Header
        leftContent={
          <Link to={ROUTER_PATHS.ROOT}>
            <CaretLeft />
          </Link>
        }
        centerContent={<h1 css={textStyles.b4m}>마이페이지</h1>}
      />
      <main css={styles.main}>
        <ul css={styles.list}>
          <li css={styles.item}>
            <p>닉네임 변경</p>
            <div css={styles.value} onClick={nicknameBottomSheetProps.on}>
              <span>낯선 거북이</span>
              <CaretRight color={COLORS.gray3} />
            </div>
          </li>
          <li css={styles.item}>
            <p>생년월일 변경</p>
            <div css={styles.value}>
              <span>1997년 1월 1일</span>
              <CaretRight color={COLORS.gray3} />
            </div>
          </li>
          <li css={styles.item}>
            <p>성별 변경</p>
            <div css={styles.value}>
              <span>여성</span>
              <CaretRight color={COLORS.gray3} />
            </div>
          </li>
          <li css={styles.item}>
            <p>고민 변경</p>
            <div css={styles.value}>
              <span css={styles.chip}>진로</span>
              <span css={styles.chip}>학업</span>
              <span css={styles.chip}>인간관계</span>
              <CaretRight color={COLORS.gray3} />
            </div>
          </li>
        </ul>
        <div css={styles.divider} />
        <ul css={styles.list}>
          <div css={[styles.item, css({ margin: '-0.5rem 0' })]}>
            <p>배경음악</p>
            <Switch />
          </div>
        </ul>
        <div css={styles.divider} />
        <ul css={styles.list}>
          <li css={[styles.item, css({ cursor: 'pointer' })]}>
            <p>로그아웃</p>
          </li>
          <li css={[styles.item, css({ cursor: 'pointer' })]}>
            <p css={css({ color: COLORS.red })}>서비스 탈퇴</p>
          </li>
        </ul>
      </main>
      <NicknameBottomSheet {...nicknameBottomSheetProps} />
    </div>
  );
};

export default MyPage;
