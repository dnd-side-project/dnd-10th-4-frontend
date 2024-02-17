import { useFormContext } from 'react-hook-form';
import ImageUploadButton from '@/components/ImageUploadButton';
import { type WriteInputs } from '../..';

const ImageSelect = () => {
  const { setValue } = useFormContext<WriteInputs>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    setValue('image', file);
  };

  return (
    <ImageUploadButton
      onChangeImage={handleFileChange}
      topPosition={5.2}
      leftPosition={1}
    />
  );
};

export default ImageSelect;
