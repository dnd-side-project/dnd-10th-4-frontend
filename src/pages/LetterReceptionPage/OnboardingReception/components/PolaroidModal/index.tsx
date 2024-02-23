import axios from 'axios';
import { CaretLeft, Download } from '@/assets/icons';
import Header from '@/components/Header';
import IconButton from '@/components/IconButton';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import pageStyles from '../../styles';
import styles from './style';

interface PolaroidModalProps extends ReturnType<typeof useBoolean> {
  imagePath: string | null;
}

const PolaroidModal = ({ imagePath, value, off }: PolaroidModalProps) => {
  const handleDownload = async () => {
    if (!imagePath) {
      return;
    }

    const response = await axios.get(imagePath, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <Modal isOpen={value} close={off}>
      <div css={styles.container}>
        <Header
          css={pageStyles.header}
          leftContent={
            <CaretLeft css={styles.icon} strokeWidth={2.5} onClick={off} />
          }
          rightContent={
            <IconButton onClick={handleDownload}>
              <Download css={styles.icon} />
            </IconButton>
          }
        />
        <section css={styles.main}>
          <div css={styles.polaroidFrame}>
            <img
              css={styles.polaroid}
              src={imagePath ?? undefined}
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
