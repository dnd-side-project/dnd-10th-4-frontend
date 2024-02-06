import type { Meta, StoryObj } from '@storybook/react';
import createFunnel from './createFunnel';

const meta = {
  title: 'Components/Funnel',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const { Funnel, Step, useFunnel } = createFunnel([
  '첫화면',
  '닉네임입력',
  '생년월일입력',
  '고민선택',
  '마무리',
] as const);

export const Default: Story = {
  render: () => {
    const DefaultPage = () => {
      const { step, hasNext, hasPrev, setStep, toNext, toPrev } = useFunnel();

      return (
        <main>
          <section>
            <Funnel step={step}>
              <Step name="마무리">
                <div>마무리 페이지</div>
                <button onClick={() => setStep('첫화면')}>
                  처음으로 이동하기
                </button>
              </Step>
              <Step name="고민선택">고민선택 페이지</Step>
              <Step name="생년월일입력">생년월일입력 페이지</Step>
              <Step name="닉네임입력">닉네임입력 페이지</Step>
              <Step name="첫화면">첫화면 페이지</Step>
              <div>Step 컴포넌트가 아닌 요소는 렌더링에서 무시돼요.</div>
              <div>
                children에 순서를 뒤죽박죽으로 등록해도 steps 배열에 들어가있는
                순서로 스텝을 보여줘요.
              </div>
              <div>
                또는 각 스텝에서 다음 스텝으로 넘어가는 로직에 setStep을
                사용하는 핸들러를 전달할 수 있어요.
              </div>
            </Funnel>
          </section>
          <section>
            <div>
              {hasPrev && <button onClick={toPrev}>이전으로</button>}
              {hasNext && <button onClick={toNext}>다음으로</button>}
            </div>
          </section>
        </main>
      );
    };

    return <DefaultPage />;
  },
};
