import { useState } from 'react';
import { css } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { CaretLeft, CaretRight } from '@/assets/icons';
import Bottle from '@/assets/images/bottle.png';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';

const CarouselArea = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const [slides] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <section css={styles.viewport} ref={emblaRef}>
        <div css={styles.container}>
          {slides.map((slide) => (
            <div key={slide} css={styles.slide}>
              <p>Slide {slide}</p>
              <img
                src={Bottle}
                alt="물병"
                css={css({ transform: `rotate(${45 * slide}deg)` })}
              />
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

const styles = {
  viewport: css`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `,
  container: css`
    display: flex;
  `,
  slide: css`
    flex: 0 0 100%;
  `,
  button: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:active {
      transform: translateY(-50%) scale(0.95);
    }
  `,
};

export default CarouselArea;
