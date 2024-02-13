import { useFormContext } from 'react-hook-form';
import ImageUploadButton from '@/components/ImageUploadButton';
import { WriteInputs } from '../..';

const ImageSelect = () => {
  const { setValue } = useFormContext<WriteInputs>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    setValue('image', file);
  };

  return <ImageUploadButton onChangeImage={handleFileChange} />;
};

export default ImageSelect;
