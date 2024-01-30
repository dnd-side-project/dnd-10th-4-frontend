import { useState, Fragment, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import Modal from '@/components/Modal';
import useModal from '@/hooks/useModal';
import { HourGlass, CaretDown, Siren } from '@/assets/icons';
import COLORS from '@/constants/colors';
import LetterAccordion from '../LetterAccordion';
import IconButton from '../IconButton';
import Button from '../Button';
import LetterCard from '.';

const meta = {
  title: 'Components/LetterCard',
  component: LetterCard,
  tags: ['autodocs'],
} satisfies Meta<typeof LetterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <p>안녕하세요</p>,
    isOpen: true,
  },
};

export const 편지_보관함_카드: StoryObj = {
  render: () => {
    const CardAccordionComponent = () => {
      const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

      const handleAccordionToggle = (id: string) => {
        setIsOpen((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };

      const accordionData = [
        {
          id: '1',
          text: '여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만라겠소 이 맘만 가져가오',
          imgUrl:
            'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg',
        },
        {
          id: '2',
          text: '여기까지가 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오',
        },
        {
          id: '3',
          text: '안녕하세요~~~안녕하세요~~~안녕하세요~~~안녕하세요~~~안녕하세요~~~',
        },
      ];

      return (
        <div css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {accordionData.map((data) => (
            <LetterCard key={data.id} isOpen={isOpen[data.id]}>
              <p>To. 익명</p>
              <LetterAccordion
                isOpen={isOpen[data.id]}
                onToggle={() => handleAccordionToggle(data.id)}
                id={data.id}
                text={data.text}
                date={new Date()}
                line={2}
                type="send"
                imgUrl={data.imgUrl}
              />
            </LetterCard>
          ))}
        </div>
      );
    };

    return <CardAccordionComponent />;
  },
};

export const 편지_보내기_카드: StoryObj = {
  render: () => {
    const CardAccordionComponent = () => {
      const [isOpen, setIsOpen] = useState(false);

      const handleAccordionToggle = () => {
        setIsOpen(!isOpen);
      };

      return (
        <div css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <LetterCard isOpen={isOpen}>
            <p>To. 익명</p>
            <LetterAccordion
              isOpen={isOpen}
              onToggle={handleAccordionToggle}
              id="4"
              text="여기까지가 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오"
              date={new Date()}
              line={2}
              type="send"
            />
          </LetterCard>
          <LetterCard isOpen={true}>여기에 편지쓰기</LetterCard>
        </div>
      );
    };
    return <CardAccordionComponent />;
  },
};

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    min-height: 100svh;
    padding: 1rem;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.25rem 0 0;
    color: white;
  `,
  from: css`
    display: inline-block;
    margin-right: 0.5rem;
    color: ${COLORS.gray1};
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  nickname: css`
    color: ${COLORS.gray2};
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
  `,
  glassLabel: css`
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 6.25rem;
    background-color: white;
    color: black;
  `,
  mainSection: css`
    flex-grow: 1;
  `,
  card: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    padding: 1.25rem 1.25rem 2.5rem;
    border-radius: 0.5rem;
    background-color: white;
  `,
  paragraph: css`
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  date: css`
    color: ${COLORS.gray4};
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: right;
  `,
  bottomCard: css`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: white;
    color: ${COLORS.gray4};
    cursor: pointer;
    user-select: none;
  `,
};

export const 모달_카드: StoryObj = {
  render: () => {
    const ModalCard = () => {
      const modal = useModal();
      const backgroundRef = useRef<HTMLDivElement>(null);
      const { open, close } = modal;

      return (
        <div>
          <Button onClick={open}>모달 열기</Button>
          <Modal {...modal}>
            <section css={styles.container}>
              <div css={styles.header}>
                <div css={styles.glassLabel}>
                  <HourGlass color={COLORS.gray3} />
                  <span>26h</span>
                </div>
                <IconButton variant="header">
                  <Siren color="white" />
                </IconButton>
              </div>
              <section
                css={styles.mainSection}
                ref={backgroundRef}
                onClick={(e) => e.target === backgroundRef.current && close()}
              >
                <LetterCard isOpen={true} background="white">
                  <h2>
                    <span css={styles.from}>From.</span>
                    <span css={styles.nickname}>낯선고양이</span>
                  </h2>
                  <p css={styles.paragraph}>
                    <Fragment>
                      여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로
                      인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말
                      이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디
                      잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이
                      맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상
                      못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에
                      감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정
                      행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을
                      이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오
                      사랑한 사람이여
                    </Fragment>
                  </p>
                  <p css={styles.date}>24년 01월 20일</p>
                </LetterCard>
              </section>
              <div css={styles.bottomCard} onClick={close}>
                <span>접기</span>
                <CaretDown />
              </div>
            </section>
          </Modal>
        </div>
      );
    };

    return <ModalCard />;
  },
};
