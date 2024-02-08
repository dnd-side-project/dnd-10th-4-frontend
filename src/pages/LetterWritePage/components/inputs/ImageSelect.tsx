import { useFormContext } from 'react-hook-form';
import ImageUploadButton from '@/components/ImageUploadButton';
import { Inputs } from '../..';

const ImageSelect = () => {
  const { setValue } = useFormContext<Inputs>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    setValue('image', file);
  };

  return <ImageUploadButton onChangeImage={handleFileChange} />;
};

export default ImageSelect;
