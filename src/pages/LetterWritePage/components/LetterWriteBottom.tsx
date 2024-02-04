import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { ImageSquare } from '@/assets/icons';
import { ROUTER_PATHS } from '@/router';
import style from '../styles';

const LetterWriteBottom = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const { setValue } = useFormContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setValue('image', file);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Navbar css={style.navbar}>
      <Button
        onClick={() => navigate(ROUTER_PATHS.ROOT)}
        type="button"
        variant="secondary"
        size="sm"
      >
        뒤로
      </Button>
      <Button type="submit" variant="primary" size="sm">
        답장 보내기
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
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
    </Navbar>
  );
};

export default LetterWriteBottom;
