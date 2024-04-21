import { css } from '@emotion/react';
import PolaroidModal from '@/components/PolaroidModal';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { Download } from '@/assets/icons';
import { downloadImage } from '@/utils/downloadUtils';

interface ReplyPolaroidModalProps {
  imagePath: string;
}

const ReplyPolaroidModal = ({ imagePath }: ReplyPolaroidModalProps) => {
  return (
    <PolaroidModal
      img={imagePath}
      headerRightContent={
        <IconButton
          css={style.download}
          onClick={() => downloadImage(imagePath)}
        >
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
