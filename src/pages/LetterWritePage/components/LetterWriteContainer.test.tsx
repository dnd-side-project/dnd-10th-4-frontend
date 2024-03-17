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

interface DefaultValues {
  age: number[];
  content: string;
  gender: string;
  worryType: string;
}

const WriteComponent = ({
  defaultValues,
}: {
  defaultValues: DefaultValues;
}) => {
  const methods = useForm<WriteInputs>({
    resolver: zodResolver(writeSchema),
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <LetterWriteContainer />,
    </FormProvider>
  );
};

const ReceiverSelectedComponent = () => {
  const defaultValues: DefaultValues = {
    age: [10, 40],
    content: '',
    gender: '모두에게 보내기',
    worryType: 'COURSE',
  };

  return <WriteComponent defaultValues={defaultValues} />;
};

const ReceiverEmptyComponent = () => {
  const defaultValues: DefaultValues = {
    age: [],
    content: '',
    gender: '',
    worryType: '',
  };

  return <WriteComponent defaultValues={defaultValues} />;
};

describe('보내기 버튼 토스트 테스트', () => {
  it('아무것도 입력하지 않은 상태에서 보내기 버튼을 누르면 경고 토스트가 뜬다.', async () => {
    const { user } = render(<ReceiverEmptyComponent />);

    const sendButton = await screen.findByRole('button', { name: '보내기' });
    await user.click(sendButton);

    expect(toast.warn).toHaveBeenCalledTimes(1);
  });
  it('받을 사람만 선택하고 보내기 버튼을 누르면 경고 토스트가 뜬다.', async () => {
    const { user } = render(<ReceiverSelectedComponent />);

    const sendButton = await screen.findByRole('button', { name: '보내기' });
    await user.click(sendButton);

    expect(toast.warn).toHaveBeenCalledTimes(1);
  });
  it('받을 사람만 선택 후 편지 내용이 10자 미만일 때, 보내기 버튼을 누르면 경고 토스트가 뜬다.', async () => {
    const { user } = render(<ReceiverSelectedComponent />);

    const content =
      await screen.findByPlaceholderText('하고싶은 이야기를 적어보세요.');
    await user.type(content, '10자 미만 내용');

    const sendButton = await screen.findByRole('button', { name: '보내기' });
    await user.click(sendButton);

    expect(toast.warn).toHaveBeenCalledTimes(1);
  });
  it('받을 사람만 선택 후 편지 내용이 10자 이상일 때, 보내기 버튼을 누르면 보내기 바텀시트가 뜬다.', async () => {
    const { user } = render(<ReceiverSelectedComponent />);

    const content =
      await screen.findByPlaceholderText('하고싶은 이야기를 적어보세요.');
    await user.type(content, '10자 이상 내용입니다.');

    const sendButton = await screen.findByRole('button', { name: '보내기' });
    await user.click(sendButton);

    const bottomSheet = screen.getByText('편지를 보낼까요?');
    expect(bottomSheet).toBeVisible();
  });
});
