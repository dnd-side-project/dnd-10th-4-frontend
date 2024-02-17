import { useRef } from 'react';
import Polaroid from '../Polaroid';
import style from './styles';

interface ImageUploadButtonProps {
  onChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  topPosition: number;
  leftPosition: number;
}

const ImageUploadButton = ({
  onChangeImage,
  topPosition,
  leftPosition,
}: ImageUploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePolaroidClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        css={style.input}
        onChange={onChangeImage}
      />
      <Polaroid
        onClick={handlePolaroidClick}
        topPosition={topPosition}
        leftPosition={leftPosition}
      />
    </>
  );
};

export default ImageUploadButton;
