import { css } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { CaretLeft, CaretRight, HourGlass } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import Chip from '@/components/Chip';
import textStyles from '@/styles/textStyles';
import useLetterSlides from '../../hooks/useLetterSlides';
import styles from './styles';
import { BOTTLES_LETTER, BOTTLES_REPLY } from './bottleData';

const CarouselArea = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const { slides } = useLetterSlides();

  return (
    <>
      <section css={styles.viewport} ref={emblaRef}>
        <div css={styles.container}>
          {slides.map((slide) => (
            <article key={slide.id} css={styles.slide}>
              <p>Slide {slide.id}</p>
              {BOTTLES_LETTER.slice(0, slide.letters.length).map(
                (bottle, idx) => (
                  <div
                    key={idx}
                    css={[css({ position: 'absolute' }), bottle.position]}
                  >
                    <img src={bottle.src} alt="물병" css={styles.bottleImage} />
                    <Chip
                      variant="bottle-tag"
                      css={[styles.timeChip, bottle.chipPosition]}
                    >
                      <HourGlass width="1rem" height="1rem" />
                      <p css={textStyles.b4m}>00h</p>
                    </Chip>
                  </div>
                ),
              )}
              {BOTTLES_REPLY.slice(0, slide.replies.length).map(
                (bottle, idx) => (
                  <div
                    key={idx}
                    css={[css({ position: 'absolute' }), bottle.position]}
                  >
                    <img src={bottle.src} alt="물병" css={styles.bottleImage} />
                  </div>
                ),
              )}
            </article>
          ))}
        </div>
      </section>

      <IconButton
        variant="carousel"
        css={[styles.button, css({ left: '1rem' })]}
        onClick={() => emblaApi?.scrollPrev()}
      >
        <CaretLeft color={COLORS.gray3} />
      </IconButton>
      <IconButton
        variant="carousel"
        css={[styles.button, css({ right: '1rem' })]}
        onClick={() => emblaApi?.scrollNext()}
      >
        <CaretRight color={COLORS.gray3} />
      </IconButton>
    </>
  );
};

export default CarouselArea;
