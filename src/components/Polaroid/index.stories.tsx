import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import useBoolean from '@/hooks/useBoolean';
import LetterCard from '../LetterCard';
import Modal from '../Modal';
import Button from '../Button';
import Polaroid from '.';

const meta = {
  title: 'Components/Polaroid',
  component: Polaroid,
  tags: ['autodocs'],
} satisfies Meta<typeof Polaroid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgUrl:
      'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg',
  },
};

const style = {
  modalContainer: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-inline: 1rem;
    margin-top: 3rem;

    button {
      padding-inline: 40px;
    }
  `,
};

export const 편지지_폴라로이드: StoryObj = {
  render: () => {
    const PolaroidComponent = () => {
      const { value: isOpen, on: open, off: close } = useBoolean(false);

      return (
        <>
          <p>폴라로이드 사진 누르고 위로 스크롤하면 폴라로이드 모달창 보임</p>
          <LetterCard isOpen={true}>
            <Polaroid
              onClick={open}
              topPosition={5.5}
              leftPosition={2}
              imgUrl="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg"
            />
          </LetterCard>
          <Modal close={close} isOpen={isOpen}>
            <div css={style.modalContainer}>
              <Polaroid
                imgUrl="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg"
                size="lg"
              />
              <Button variant="secondary" size="sm" onClick={close}>
                닫기
              </Button>
            </div>
          </Modal>
        </>
      );
    };
    return <PolaroidComponent />;
  },
};

export const 사진_없음: StoryObj = {
  render: () => {
    const PolaroidImage = () => {
      return (
        <>
          <LetterCard isOpen={true}>
            <Polaroid topPosition={5.5} leftPosition={2} />
          </LetterCard>
        </>
      );
    };
    return <PolaroidImage />;
  },
};
