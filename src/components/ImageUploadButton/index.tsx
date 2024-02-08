import { useRef } from 'react';
import Button from '@/components/Button';
import { ImageSquare } from '@/assets/icons';
import style from './styles';

interface ImageUploadButtonProps {
  onChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploadButton = ({ onChangeImage }: ImageUploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
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
      <Button
        type="button"
        css={style.iconContainer}
        variant="semi-transparent"
        size="sm"
        onClick={handleButtonClick}
      >
        <ImageSquare width={24} />
      </Button>
    </>
  );
};

export default ImageUploadButton;
