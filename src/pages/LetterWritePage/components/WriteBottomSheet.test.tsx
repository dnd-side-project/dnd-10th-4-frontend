import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { http } from 'msw';
import { render, screen, waitFor } from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import { ROUTER_PATHS, API_PATHS } from '@/constants/routerPaths';
import { server } from '@/mocks/node';
import { letterResolvers } from '@/mocks/resolvers/letter';
import { baseURL } from '@/utils/mswUtils';
import { WriteInputs, writeSchema } from '..';
import WriteBottomSheet from './WriteBottomSheet';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

const BottomSheetComponent = () => {
  const BottomSheetProps = useBoolean(true);

  const methods = useForm<WriteInputs>({
    resolver: zodResolver(writeSchema),
    defaultValues: {
      age: [10, 40],
      content: '편지에 들어갈 내용입니다.',
      gender: '모두에게 보내기',
      worryType: 'COURSE',
    },
  });

  return (
    <FormProvider {...methods}>
      <WriteBottomSheet {...BottomSheetProps} />,
    </FormProvider>
  );
};

describe('편지 쓰기 API 테스트', () => {
  it('[성공] 답장 보내기 버튼을 클릭하면 API 호출이 발생하고, 요청이 성공하면 루트 페이지로 이동하고 성공 토스트가 나타난다.', async () => {
    const { user } = render(<BottomSheetComponent />);

    const sendButton = await screen.findByRole('button', { name: '보내기' });
    await user.click(sendButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.success).toHaveBeenCalledTimes(1);
    });
  });
  it('[실패 - 5개 초과] 답장 보내기 버튼을 클릭하면 API 호출이 발생하고, 요청이 실패하면 루트 페이지로 이동하고 실패 토스트가 나타난다.', async () => {
    server.use(
      http.post(
        baseURL(API_PATHS.LETTER),
        letterResolvers.postLetter.exceedSendLimit,
      ),
    );

    const { user } = render(<BottomSheetComponent />);

    const sendButton = await screen.findByRole('button', { name: '보내기' });
    await user.click(sendButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
  it('[실패 - 이미지 확장자] 답장 보내기 버튼을 클릭하면 API 호출이 발생하고, 요청이 실패하면 실패 토스트가 나타난다.', async () => {
    server.use(
      http.post(baseURL(API_PATHS.LETTER), letterResolvers.postLetter.noExt),
    );

    const { user } = render(<BottomSheetComponent />);

    const sendButton = await screen.findByRole('button', { name: '보내기' });
    await user.click(sendButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});
