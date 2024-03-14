import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen } from '@/utils/testing-library';
import { LetterReceiverContainer } from '..';
import { WriteInputs, writeSchema } from '../..';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

const LetterReceiverContainerComponent = () => {
  const methods = useForm<WriteInputs>({
    resolver: zodResolver(writeSchema),
    defaultValues: {
      age: [],
      content: '',
      gender: '',
      worryType: '',
    },
  });
  return (
    <FormProvider {...methods}>
      <LetterReceiverContainer />,
    </FormProvider>
  );
};

describe('인터랙션 테스트', () => {
  it('누구에게 보낼까요? 를 누르면 바텀시트가 열린다.', async () => {
    const { user } = render(<LetterReceiverContainerComponent />);

    const receiverContainer = await screen.findByText('누구에게 보낼까요?', {
      selector: 'span',
    });

    await user.click(receiverContainer);

    const bottomSheet = await screen.findByText(
      '고민을 선택을 하면 나와 비슷한 고민을 가진 낯선 친구에게 전달돼요',
    );
    expect(bottomSheet).toBeVisible();
  });
});
