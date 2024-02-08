import { css } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
import IconButton from '@/components/IconButton';
import Header from '@/components/Header';
import Button from '@/components/Button';
import {
  CaretLeft,
  CaretRight,
  PencilLine,
  TreasureChest,
  User,
} from '@/assets/icons';
import MusicButton from '@/components/MusicButton';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import styles, { carouselStyles } from './styles';

const MainPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div css={styles.page}>
      <Header
        variant="primary"
        leftContent={
          <IconButton variant="header" rounded="r8" css={styles.headerButton}>
            <PencilLine color="white" />
            <p css={[textStyles.b4m, css({ color: COLORS.gray1 })]}>4장</p>
          </IconButton>
        }
        rightStyle={css({ gap: '0.5rem' })}
        rightContent={
          <>
            <MusicButton css={css({ marginRight: '0.75rem' })} />
            <IconButton variant="header" rounded="r8">
              <TreasureChest color="white" />
            </IconButton>
            <IconButton variant="header" rounded="r8">
              <User color="white" />
            </IconButton>
          </>
        }
      />

      <main css={styles.main}>
        <section css={carouselStyles.viewport} ref={emblaRef}>
          <div css={carouselStyles.container}>
            <div css={carouselStyles.slide}>Slide 1</div>
            <div css={carouselStyles.slide}>Slide 2</div>
            <div css={carouselStyles.slide}>Slide 3</div>
          </div>
        </section>

        <IconButton
          variant="carousel"
          css={[carouselStyles.button, css({ left: '1rem' })]}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <CaretLeft color={COLORS.gray3} />
        </IconButton>
        <IconButton
          variant="carousel"
          css={[carouselStyles.button, css({ right: '1rem' })]}
          onClick={() => emblaApi?.scrollNext()}
        >
          <CaretRight color={COLORS.gray3} />
        </IconButton>
      </main>

      <section css={styles.buttonSection}>
        <Button css={styles.button}>
          <PencilLine />
          편지 쓰기
        </Button>
      </section>
    </div>
  );
};

export default MainPage;
