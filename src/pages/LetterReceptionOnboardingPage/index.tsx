import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';
import styles from './styles';

const LetterReceptionOnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.container}>
      <Header
        leftContent={
          <CaretLeft
            css={styles.icon}
            strokeWidth={2.5}
            onClick={() => navigate(-1)}
          />
        }
        rightContent={
          <IconButton>
            <Siren css={styles.icon} height={20} width={20} />
          </IconButton>
        }
      />
      <main css={styles.main}>
        <LetterCard css={styles.card}>
          <LetterHeader title="To" nickname="처음 방문한 너에게" />
          <section css={styles.content}>
            <p>
              안녕, 나는 이곳을 운영하고 있는 낯선 바다라고 해. 찾아와줘서
              고마워. 너가 와주길 기다리고 있었어.
            </p>
            <br />
            <p>
              나는 말 못할 고민이 있거나 힘든 일이 있을 때, 바다를 찾아가곤해.
              내 모든 감정과 생각들을 온전히 이해 받고 공감 받는 기분이
              들더라고.
            </p>
            <br />
            <p>
              혹시 너도 마음 속 고민이 있지만 주변 지인에게 부담을 줄까 봐 쉽게
              털어 놓지 못했던 경험이 있지 않니?
            </p>
            <br />
            <p>
              내 마음 속 바다에서는 다른 사람에게 말하지 못하는 너만의 고민과
              이야기를 물병에 담에 바다에 띄어 보낼 수 있어. 너와 비슷한 고민을
              했을 지도 모르는 낯선이로부터 위로의 답장을 주고 받을 수도 있지.
            </p>
            <br />
            <p>
              너에게 말 못할 고민이 있다면, 물병에 담아 띄어보내봐. 혹시
              모르잖아. 너의 이름도, 얼굴도 모르는 낯선이로부터 그 누구에게도
              받지 못했던 공감과 위로를 받을지.
            </p>
            <br />
            <p>기다리고 있을게, 너의 이야기를 듣고싶어.</p>
            <br />
            <p>P.S. 최근에 갔었던 동해 바다 사진을 동봉해.</p>
            <p>너에게도 위로가 되기를</p>
          </section>
          <div css={styles.date}>
            <span>24년 01월 20일</span>
          </div>
          <LetterHeader
            title="From"
            titlePosition="right"
            nickname="낯선 바다"
          />
          <Tooltip
            side="right"
            delay={10000}
            triggerContent={
              <div css={styles.polaroidContainer}>
                <img
                  css={styles.polaroid}
                  src="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg"
                  alt="폴라로이드"
                />
              </div>
            }
          >
            <p css={textStyles.c1r}>사진을 클릭해 볼 수 있어요</p>
          </Tooltip>
        </LetterCard>
      </main>
      <Navbar css={styles.navbar}>
        <Button variant="secondary" size="sm" rounded="md">
          닫기
        </Button>
        <Button variant="primary" size="sm" rounded="md">
          보관하기
        </Button>
      </Navbar>
    </div>
  );
};

export default LetterReceptionOnboardingPage;
