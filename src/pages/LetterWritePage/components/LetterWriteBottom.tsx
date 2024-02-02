import Navbar from '@/components/Navbar';
import Button, { buttonStyles } from '@/components/Button';
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
      <button
        css={[
          buttonStyles.button('semi-transparent', 'sm'),
          style.iconContainer,
        ]}
      >
        <ImageSquare />
      </button>
    </Navbar>
  );
};

export default LetterWriteBottom;
