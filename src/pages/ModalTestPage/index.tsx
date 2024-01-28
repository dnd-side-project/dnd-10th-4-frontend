import { Fragment, useRef } from 'react';
import Modal from '@/components/Modal';
import { HourGlass, CaretDown, Siren } from '@/assets/icons';
import useModal from '@/hooks/useModal';
import IconButton from '@/components/IconButton';
import Button from '@/components/Button';
import styles from './styles';

/** TODO: 모달 확인용 페이지입니다. 추후 제거해도 좋습니다. */
const ModalTestPage = () => {
  const modal = useModal();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { open, close } = modal;

  return (
    <div>
      <Button onClick={open}>모달 열기</Button>

      <Modal {...modal}>
        <section css={styles.container}>
          <div css={styles.header}>
            <div css={styles.glassLabel}>
              <HourGlass color="#828282" />
              <span>26h</span>
            </div>
            <IconButton variant="header">
              <Siren color="white" />
            </IconButton>
          </div>
          <section
            css={styles.mainSection}
            ref={backgroundRef}
            onClick={(e) => e.target === backgroundRef.current && close()}
          >
            <div css={styles.card}>
              <h2>
                <span css={styles.from}>From.</span>
                <span css={styles.nickname}>낯선고양이</span>
              </h2>
              <p css={styles.paragraph}>
                {Array.from({ length: 3 }, (_, i) => (
                  <Fragment key={i}>
                    여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로
                    인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말
                    이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디
                    잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘
                    다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도
                    사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은
                    사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소
                    이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여
                    이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여
                  </Fragment>
                ))}
              </p>
              <p css={styles.date}>24년 01월 20일</p>
            </div>
          </section>
          <div css={styles.bottomCard} onClick={close}>
            <span>접기</span>
            <CaretDown />
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default ModalTestPage;
