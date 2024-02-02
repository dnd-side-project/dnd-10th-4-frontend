import { CaretLeft } from '@/assets/icons';
import Header from '@/components/Header';
import style from './styles';
import { LetterWriteContent, LetterWriteBottom } from './components';

const LetterWritePage = () => {
  return (
    <div css={style.container}>
      <Header
        css={style.header}
        leftContent={<CaretLeft strokeWidth={2.5} color="white" />}
      />
      <main css={style.contentWrapper}>
        <LetterWriteContent />
        <LetterWriteBottom />
      </main>
    </div>
  );
};
export default LetterWritePage;
