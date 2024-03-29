import { useRef } from 'react';
import Polaroid from '../Polaroid';
import style from './styles';

interface ImageUploadButtonProps {
  onChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  topPosition?: number;
  leftPosition?: number;
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
      <label htmlFor="image-uploader" css={style.input}>
        이미지 업로드
      </label>
      <input
        id="image-uploader"
        ref={fileInputRef}
        type="file"
        accept=".jpg, .jpeg, .gif, .bmp, .png"
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
