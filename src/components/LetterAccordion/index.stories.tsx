import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LetterCard from '../LetterCard';
import LetterAccordion from '.';

const meta = {
  title: 'Components/Letter/LetterAccordion',
  component: LetterAccordion,
  tags: ['autodocs'],
} satisfies Meta<typeof LetterAccordion>;

export default meta;

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
        },
        {
          id: '2',
          text: '여기까지가 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오',
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
                nickname="낯선 고양이"
                line={2}
                type="send"
              />
            </LetterCard>
          ))}
        </div>
      );
    };

    return <CardAccordionComponent />;
  },
};
