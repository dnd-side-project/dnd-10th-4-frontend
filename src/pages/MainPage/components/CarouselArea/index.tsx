import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { CaretLeft, CaretRight } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import { ROUTER_PATHS } from '@/router';
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

  const navigate = useNavigate();

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
              {letters.map((letter, letterIdx) => (
                <div
                  key={letter.letterId}
                  css={BOTTLES_LETTER[letterIdx]?.container.position}
                >
                  <div
                    css={styles.bottleAnimation(
                      BOTTLES_LETTER[letterIdx]?.container.animation,
                    )}
                    onClick={() =>
                      navigate(
                        ROUTER_PATHS.LETTER_RECEPTION(`${letter.letterId}`),
                      )
                    }
                  >
                    <img
                      src={BOTTLES_LETTER[letterIdx]?.bottle.src}
                      alt="물병"
                    />
                    {BOTTLES_LETTER[letterIdx].sparkles?.map(
                      (sparkle, sparkleIdx) => (
                        <img
                          key={sparkleIdx}
                          src={sparkle.src}
                          alt="반짝이"
                          css={[styles.sparkleAnimation, sparkle.position]}
                        />
                      ),
                    )}
                  </div>
                  <TimeChip
                    css={[
                      BOTTLES_LETTER[letterIdx]?.chip.position,
                      css({ zIndex: 10 }),
                    ]}
                    createdAt={letter.createdAt}
                  />
                </div>
              ))}

              {replies.map((reply, replyIdx) => (
                <div
                  key={reply.letterId}
                  css={[
                    BOTTLES_REPLY[replyIdx]?.container.position,
                    styles.bottleAnimation(),
                  ]}
                  onClick={() =>
                    navigate(ROUTER_PATHS.LETTER_REPLY(`${reply.letterId}`))
                  }
                >
                  <img src={BOTTLES_REPLY[replyIdx]?.bottle.src} alt="물병" />
                  {BOTTLES_REPLY[replyIdx].sparkles?.map(
                    (sparkle, sparkleIdx) => (
                      <img
                        key={sparkleIdx}
                        src={sparkle.src}
                        alt="반짝이"
                        css={[styles.sparkleAnimation, sparkle.position]}
                      />
                    ),
                  )}
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
