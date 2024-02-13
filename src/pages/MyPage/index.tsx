import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { css } from '@emotion/react';
import { Switch } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import { CaretLeft, CaretRight } from '@/assets/icons';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { ROUTER_PATHS } from '@/router';
import useBoolean from '@/hooks/useBoolean';
import memberOptions from '@/api/member/queryOptions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { GENDER_DICT, WORRY_DICT } from '@/constants/users';
import useMusicStore from '@/stores/useMusicStore';
import styles from './style';
import NicknameBottomSheet from './components/NicknameBottomSheet';
import BirthdayBottomSheet from './components/BirthdayBottomSheet';
import GenderBottomSheet from './components/GenderBottomSheet';
import WorryBottomSheet from './components/WorryBottomSheet';

const SuspendedPage = () => {
  const { data: member } = useSuspenseQuery(memberOptions.detail());

  const nicknameBottomSheetProps = useBoolean(false);
  const birthdayBottomSheetProps = useBoolean(false);
  const genderBottomSheetProps = useBoolean(false);
  const worryBottomSheetProps = useBoolean(false);

  const isMusicPlaying = useMusicStore((s) => s.isPlaying);
  const toggleMusicPlaying = useMusicStore((s) => s.togglePlaying);

  return (
    <main css={styles.main}>
      <NicknameBottomSheet {...nicknameBottomSheetProps} />
      <BirthdayBottomSheet {...birthdayBottomSheetProps} />
      <GenderBottomSheet {...genderBottomSheetProps} />
      <WorryBottomSheet {...worryBottomSheetProps} />
      <ul css={styles.list}>
        <li css={styles.item}>
          <p>닉네임 변경</p>
          <div css={styles.value} onClick={nicknameBottomSheetProps.on}>
            <span>{member.nickname}</span>
            <CaretRight color={COLORS.gray3} />
          </div>
        </li>
        <li css={styles.item}>
          <p>생년월일 변경</p>
          <div css={styles.value} onClick={birthdayBottomSheetProps.on}>
            {/* TODO: API 명세에 생년월일 추가 요청해야함 */}
            <span>1997년 1월 1일</span>
            <CaretRight color={COLORS.gray3} />
          </div>
        </li>
        <li css={styles.item}>
          <p>성별 변경</p>
          <div css={styles.value} onClick={genderBottomSheetProps.on}>
            <span>{GENDER_DICT[member.gender]}</span>
            <CaretRight color={COLORS.gray3} />
          </div>
        </li>
        <li css={styles.item}>
          <p>고민 변경</p>
          <div css={styles.value} onClick={worryBottomSheetProps.on}>
            {member.worryTypes.map((worryType) => (
              <span css={styles.chip} key={worryType}>
                {WORRY_DICT[worryType]}
              </span>
            ))}
            <CaretRight color={COLORS.gray3} />
          </div>
        </li>
      </ul>
      <div css={styles.divider} />
      <ul css={styles.list}>
        <div css={[styles.item, css({ margin: '-0.5rem 0' })]}>
          <p>배경음악</p>
          <Switch checked={isMusicPlaying} onChange={toggleMusicPlaying} />
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
  );
};

const MyPage = () => {
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
      <Suspense
        fallback={
          <section css={styles.loadingSection}>
            <LoadingSpinner size="4rem" />
          </section>
        }
      >
        <SuspendedPage />
      </Suspense>
    </div>
  );
};

export default MyPage;
