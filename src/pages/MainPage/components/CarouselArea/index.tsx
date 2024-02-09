import { useState } from 'react';
import { css } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
// import { useSuspenseQuery } from '@tanstack/react-query';
import { CaretLeft, CaretRight, HourGlass } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
// import letterOptions from '@/api/letter/queryOptions';
import Chip from '@/components/Chip';
import textStyles from '@/styles/textStyles';
import styles from './styles';
import { BOTTLES } from './bottleData';

const CarouselArea = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const [slides] = useState([1, 2, 3, 4, 5]);

  // useSuspenseQuery({ ...letterOptions.reception() });

  return (
    <>
      <section css={styles.viewport} ref={emblaRef}>
        <div css={styles.container}>
          {slides.map((slide) => (
            <div key={slide} css={styles.slide}>
              <p>Slide {slide}</p>
              {BOTTLES.map((bottle, idx) => (
                <div
                  key={idx}
                  css={[css({ position: 'absolute' }), bottle.position]}
                >
                  <img src={bottle.src} alt="물병" css={styles.bottleImage} />
                  {bottle.chipPosition && (
                    <Chip
                      variant="bottle-tag"
                      css={[styles.timeChip, bottle.chipPosition]}
                    >
                      <HourGlass width="1rem" height="1rem" />
                      <p css={textStyles.b4m}>00h</p>
                    </Chip>
                  )}
                </div>
              ))}
            </div>
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
