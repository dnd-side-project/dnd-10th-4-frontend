import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import { ImageSquare } from '@/assets/icons';
import { Inputs } from '../..';

const ImageSelect = () => {
  const { setValue } = useFormContext<Inputs>();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    const isImage = file.type.startsWith('image/');
    if (isImage) {
      setValue('image', file);
      event.target.value = '';
    }
  };

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
        css={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button
        type="button"
        css={style.iconContainer}
        variant="semi-transparent"
        size="sm"
        onClick={handleButtonClick}
      >
        <ImageSquare />
      </Button>
    </>
  );
};

export default ImageSelect;

const style = {
  iconContainer: css`
    flex-grow: 0;
    margin-left: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  `,
};
