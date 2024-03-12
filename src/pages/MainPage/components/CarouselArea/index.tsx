import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { CaretLeft, CaretRight } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import useLetterSlides from '../../hooks/useLetterSlides';
import styles from './styles';
import ReceptionBottle from './ReceptionBottle';
import ReplyBottle from './ReplyBottle';

const CarouselArea = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { slides } = useLetterSlides();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <>
      <section css={styles.viewport} ref={emblaRef}>
        <div css={styles.container}>
          {slides.map(({ id: slideId, receptions, replies }) => (
            <article key={slideId} css={styles.slide}>
              {receptions.map(
                (reception, i) =>
                  reception && (
                    <ReceptionBottle
                      key={reception.letterId}
                      constantId={i}
                      reception={reception}
                    />
                  ),
              )}

              {replies.map(
                (reply, i) =>
                  reply && <ReplyBottle key={i} constantId={i} reply={reply} />,
              )}
            </article>
          ))}
        </div>
      </section>

      <section css={styles.dotsSection}>
        {slides.map((slide, idx) => (
          <p
            key={slide.id}
            css={styles.dot(selectedIndex === idx)}
            onClick={() => emblaApi?.scrollTo(idx)}
          />
        ))}
      </section>

      <IconButton
        variant="carousel"
        css={[styles.carouselButton, css({ left: '1rem' })]}
        onClick={() => emblaApi?.scrollPrev()}
      >
        <CaretLeft color={COLORS.gray3} />
      </IconButton>
      <IconButton
        variant="carousel"
        css={[styles.carouselButton, css({ right: '1rem' })]}
        onClick={() => emblaApi?.scrollNext()}
      >
        <CaretRight color={COLORS.gray3} />
      </IconButton>
    </>
  );
};

export default CarouselArea;
