import { CaretLeft, Download } from '@/assets/icons';
import Header from '@/components/Header';
import IconButton from '@/components/IconButton';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import OnboardingLetterImage from '@/assets/images/onboardingLetterImage.jpg';
import Button from '@/components/Button';
import pageStyles from '../../styles';
import styles from './style';

interface PolaroidModalProps extends ReturnType<typeof useBoolean> {}

const PolaroidModal = ({ value, off }: PolaroidModalProps) => {
  return (
    <Modal isOpen={value} close={off}>
      <div css={styles.container}>
        <Header
          css={pageStyles.header}
          leftContent={
            <CaretLeft css={styles.icon} strokeWidth={2.5} onClick={off} />
          }
          rightContent={
            <a href={OnboardingLetterImage} download>
              <IconButton>
                <Download css={styles.icon} />
              </IconButton>
            </a>
          }
        />
        <section css={styles.main}>
          <div css={styles.polaroidFrame}>
            <img
              css={styles.polaroid}
              src={OnboardingLetterImage}
              alt="편지와 함께 보낸 이미지"
            />
          </div>
        </section>
        <Button
          css={styles.button}
          variant="secondary"
          rounded="md"
          size="sm"
          onClick={off}
        >
          닫기
        </Button>
      </div>
    </Modal>
  );
};

export default PolaroidModal;
