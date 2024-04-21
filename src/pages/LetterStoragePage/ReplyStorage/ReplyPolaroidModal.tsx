import axios from 'axios';
import { css } from '@emotion/react';
import PolaroidModal from '@/components/PolaroidModal';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { Download } from '@/assets/icons';

interface ReplyPolaroidModalProps {
  imagePath: string;
}

const ReplyPolaroidModal = ({ imagePath }: ReplyPolaroidModalProps) => {
  const handleDownload = async () => {
    console.log('다운로드');
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
    <PolaroidModal
      img={imagePath}
      headerRightContent={
        <IconButton css={style.download} onClick={handleDownload}>
          <Download color="white" height={20} width={20} />
        </IconButton>
      }
    >
      <Button variant="secondary" size="sm">
        닫기
      </Button>
    </PolaroidModal>
  );
};

export default ReplyPolaroidModal;

const style = {
  download: css`
    margin-right: 2px;
  `,
};
