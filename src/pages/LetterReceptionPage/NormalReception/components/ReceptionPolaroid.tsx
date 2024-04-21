import Button from '@/components/Button';
import PolaroidModal from '@/components/PolaroidModal';
import IconButton from '@/components/IconButton';
import { Download } from '@/assets/icons';
import { downloadImage } from '@/utils/downloadUtils';

interface ReceptionPolaroidProps {
  img: string;
  bottomPosition?: number;
}

const ReceptionPolaroid = ({ img, bottomPosition }: ReceptionPolaroidProps) => {
  return (
    <PolaroidModal
      img={img}
      bottomPosition={bottomPosition}
      headerRightContent={
        <IconButton onClick={() => downloadImage(img)}>
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

export default ReceptionPolaroid;
