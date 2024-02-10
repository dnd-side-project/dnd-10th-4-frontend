import Button from '@/components/Button';
import PolaroidModal from '@/components/PolaroidModal';

interface ReceptionPolaroidProps {
  img?: string;
}

const ReceptionPolaroid = ({
  img = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
}: ReceptionPolaroidProps) => {
  return (
    <PolaroidModal img={img} topPosition={2} leftPosition={1.2}>
      <Button variant="secondary" size="sm">
        닫기
      </Button>
    </PolaroidModal>
  );
};

export default ReceptionPolaroid;
