import { Fragment, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import useModal from '@/hooks/useModal';
import { HourGlass, CaretDown, Siren } from '@/assets/icons';
import COLORS from '@/constants/colors';
import IconButton from '../IconButton';
import Button from '../Button';
import Modal from '.';

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
    color: var(--gray4, #bdbdbd);
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
    color: var(--gray4, #bdbdbd);
    cursor: pointer;
    user-select: none;
  `,
};

const meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '모달 컴포넌트입니다.\nESC 키를 누르거나, 모달 바깥을 클릭하면 모달이 닫힙니다.',
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 편지_작성_모달: Story = {
  render: () => {
    const ModalTestPage = () => {
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
                <div css={styles.card}>
                  <h2>
                    <span css={styles.from}>From.</span>
                    <span css={styles.nickname}>낯선고양이</span>
                  </h2>
                  <p css={styles.paragraph}>
                    {Array.from({ length: 3 }, (_, i) => (
                      <Fragment key={i}>
                        여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지
                        노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말
                        하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려
                        하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로
                        받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한
                        사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운
                        날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안
                        날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오
                        기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까
                        근심은 접어두오 오 사랑한 사람이여
                      </Fragment>
                    ))}
                  </p>
                  <p css={styles.date}>24년 01월 20일</p>
                </div>
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

    return <ModalTestPage />;
  },
};
