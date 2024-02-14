import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { CaretLeft, CaretRight } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import useLetterSlides from '../../hooks/useLetterSlides';
import TimeChip from '../TimeChip';
import styles from './styles';
import { BOTTLES_LETTER, BOTTLES_REPLY } from './bottleData';

const CarouselArea = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const { slides } = useLetterSlides();

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
          {slides.map(({ id: slideId, letters, replies }) => (
            <article key={slideId} css={styles.slide}>
              {letters.map((letter, idx) => (
                <div key={idx} css={BOTTLES_LETTER[idx]?.container.position}>
                  <div
                    css={styles.bottleAnimation(
                      BOTTLES_LETTER[idx]?.container.animation,
                    )}
                    onClick={() =>
                      console.log(
                        `TODO: ${letter.letterId} 번 편지 답장 보러가기`,
                      )
                    }
                  >
                    <img src={BOTTLES_LETTER[idx]?.bottle.src} alt="물병" />
                    {BOTTLES_LETTER[idx].sparkles?.map((sparkle, idx) => (
                      <img
                        key={idx}
                        src={sparkle.src}
                        alt="반짝이"
                        css={[styles.sparkleAnimation, sparkle.position]}
                      />
                    ))}
                  </div>
                  <TimeChip
                    css={[
                      BOTTLES_LETTER[idx]?.chip.position,
                      css({ zIndex: 10 }),
                    ]}
                    createdAt={letter.createdAt}
                  />
                </div>
              ))}

              {replies.map((reply, idx) => (
                <div
                  key={idx}
                  css={[
                    BOTTLES_REPLY[idx]?.container.position,
                    styles.bottleAnimation(),
                  ]}
                  onClick={() =>
                    console.log(`TODO: ${reply.letterId} 번 편지 답장 보러가기`)
                  }
                >
                  <img src={BOTTLES_REPLY[idx]?.bottle.src} alt="물병" />
                  {BOTTLES_REPLY[idx].sparkles?.map((sparkle, idx) => (
                    <img
                      key={idx}
                      src={sparkle.src}
                      alt="반짝이"
                      css={[styles.sparkleAnimation, sparkle.position]}
                    />
                  ))}
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      {slides.length > 1 && (
        <>
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
      )}
    </>
  );
};

export default CarouselArea;
