import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { ImageSquare } from '@/assets/icons';
import style from '../styles';

const LetterWriteBottom = () => {
  return (
    <Navbar css={style.navbar}>
      <Button variant="secondary" size="sm">
        뒤로
      </Button>
      <Button variant="primary" size="sm">
        답장 보내기
      </Button>
      <Button css={style.iconContainer} variant="semi-transparent" size="sm">
        <ImageSquare />
      </Button>
    </Navbar>
  );
};

export default LetterWriteBottom;
