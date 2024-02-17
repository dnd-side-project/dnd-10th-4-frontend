import axios from 'axios';
import Button from '@/components/Button';
import PolaroidModal from '@/components/PolaroidModal';
import IconButton from '@/components/IconButton';
import { Download } from '@/assets/icons';
interface ReceptionPolaroidProps {
  img?: string;
}

const ReceptionPolaroid = ({
  img = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
}: ReceptionPolaroidProps) => {
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
  };

  return (
    <PolaroidModal
      img={img}
      topPosition={4.2}
      leftPosition={1.2}
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
