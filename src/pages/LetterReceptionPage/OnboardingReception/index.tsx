import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';
import useBoolean from '@/hooks/useBoolean';
import OnboardingLetterImage from '@/assets/images/onboardingLetterImage.jpg';
import { formatDate } from '@/utils/dateUtils';
import { ROUTER_PATHS } from '@/router';
import PolaroidModal from './components/PolaroidModal';
import styles from './styles';

const OnboardingReception = () => {
  const navigate = useNavigate();
  const modalProps = useBoolean(false);
  const storageTooltipKey = useRef(0);

  const handleCloseModal = () => {
    storageTooltipKey.current = storageTooltipKey.current + 1;
    modalProps.off();
  };

  const handleNavigateToRoot = () => {
    navigate(ROUTER_PATHS.ROOT, {
      replace: true,
      state: { from: ROUTER_PATHS.LETTER_RECEPTION_ONBOARDING },
    });
  };

  return (
    <div css={styles.container}>
      <PolaroidModal {...modalProps} off={handleCloseModal} />
      <Header
        css={styles.header}
        leftContent={
          <CaretLeft
            css={styles.icon}
            strokeWidth={2.5}
            onClick={handleNavigateToRoot}
          />
        }
        rightContent={
          <IconButton>
            <Siren css={styles.icon} />
          </IconButton>
        }
      />
      <motion.main
        css={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
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
            <span>{formatDate(new Date())}</span>
          </div>
          <LetterHeader
            title="From"
            titlePosition="right"
            nickname="낯선 바다"
          />
          <Tooltip
            side="right"
            delay={300000}
            triggerContent={
              <div css={styles.polaroidContainer}>
                <img
                  css={styles.polaroid}
                  src={OnboardingLetterImage}
                  alt="폴라로이드"
                  onClick={() => modalProps.on()}
                />
              </div>
            }
          >
            <p css={textStyles.c1r}>사진을 클릭해 볼 수 있어요</p>
          </Tooltip>
        </LetterCard>
      </motion.main>
      <Navbar css={styles.navbar}>
        <Button
          variant="secondary"
          size="sm"
          rounded="md"
          onClick={handleNavigateToRoot}
        >
          닫기
        </Button>
        <Tooltip
          key={storageTooltipKey.current}
          delay={storageTooltipKey.current > 0 ? 300000 : 0}
          side="top"
          triggerContent={
            <Button variant="primary" size="sm" rounded="md">
              보관하기
            </Button>
          }
        >
          <p css={textStyles.c1r}>보관하기를 눌러 편지를 간직하세요</p>
        </Tooltip>
      </Navbar>
    </div>
  );
};

export default OnboardingReception;
