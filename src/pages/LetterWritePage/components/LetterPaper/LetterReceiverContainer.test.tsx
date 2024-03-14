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
      <LetterReceiverContainer isOpen={false} onClick={() => {}} />,
    </FormProvider>
  );
};

describe('인터랙션 테스트', () => {
  it('다시 흘려보내기 버튼을 누르면 바텀시트가 열린다.', async () => {
    const { user } = render(<LetterReceiverContainerComponent />);

    const receiverContainer = await screen.findByText('누구에게 보낼까요?');

    user.click(receiverContainer);
  });
});
