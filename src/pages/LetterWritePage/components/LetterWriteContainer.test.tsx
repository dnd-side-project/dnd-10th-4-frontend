import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen } from '@/utils/testing-library';
import { WriteInputs, writeSchema } from '..';
import LetterWriteContainer from './LetterWriteContainer';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

const LetterPaperComponent = () => {
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
      <LetterWriteContainer />,
    </FormProvider>
  );
};

describe('보내기 버튼 토스트 테스트', () => {
  it('아무것도 입력하지 않은 상태에서 경고 토스트가 뜬다.', async () => {
    const { user } = render(<LetterPaperComponent />);

    const sendButton = await screen.findByRole('button', { name: '보내기' });
    await user.click(sendButton);

    expect(toast.warn).toHaveBeenCalledTimes(1);
  });
});
