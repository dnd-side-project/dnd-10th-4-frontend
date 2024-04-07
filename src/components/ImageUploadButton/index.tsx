import { useRef } from 'react';
import Polaroid from '../Polaroid';
import style from './styles';

interface ImageUploadButtonProps {
  /** 폴라로이드 이미지 업로드 이벤트입니다. */
  onChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** 폴라로이드 bottom 위치 입니다. */
  bottomPosition?: number;
  /** 폴라로이드 left 위치 입니다. */
  leftPosition?: number;
}

const ImageUploadButton = ({
  onChangeImage,
  bottomPosition,
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
        bottomPosition={bottomPosition}
        leftPosition={leftPosition}
      />
    </>
  );
};

export default ImageUploadButton;
