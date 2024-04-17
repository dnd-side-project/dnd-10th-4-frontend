import { toast } from 'react-toastify';
import axios from 'axios';
import Button from '@/components/Button';
import PolaroidModal from '@/components/PolaroidModal';
import IconButton from '@/components/IconButton';
import { Download } from '@/assets/icons';

interface ReceptionPolaroidProps {
  img: string;
  bottomPosition?: number;
}

const ReceptionPolaroid = ({ img, bottomPosition }: ReceptionPolaroidProps) => {
  const handleDownload = async () => {
    const response = await axios.get(img, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();

    window.URL.revokeObjectURL(url);

    toast.success('사진이 저장됐어요', {
      position: 'bottom-center',
    });
  };

  return (
    <PolaroidModal
      img={img}
      bottomPosition={bottomPosition}
      headerRightContent={
        <IconButton onClick={handleDownload}>
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
