import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { http } from 'msw';
import { zodResolver } from '@hookform/resolvers/zod';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS, ROUTER_PATHS } from '@/constants/routerPaths';
import { render, screen, waitFor } from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import { letterResolvers } from '@/mocks/resolvers/letter';
import { ReplyInputs, replySchema } from '..';
import ReplyBottomSheet from './ReplyBottomSheet';

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

const letter_id = 2;

const ReplyBottomSheetComponent = () => {
  const replyBottomSheetProps = useBoolean(true);

  const methods = useForm<ReplyInputs>({
    resolver: zodResolver(replySchema),
    defaultValues: {
      replyContent: '답장을 보낼 편지 내용입니다.',
    },
  });

  return (
    <FormProvider {...methods}>
      <ReplyBottomSheet {...replyBottomSheetProps} letterId={letter_id} />
    </FormProvider>
  );
};

describe('답장 보내기 API 테스트', () => {
  it('[성공] 답장 보내기 버튼을 클릭하면 API 호출이 발생하고, 요청이 성공하면 루트 페이지로 이동하고 성공 토스트가 나타난다.', async () => {
    const { user } = render(<ReplyBottomSheetComponent />);

    const sendButton = screen.getByRole('button', { name: '보내기' });
    await user.click(sendButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.success).toHaveBeenCalledTimes(1);
    });
  });
  it('[실패] 답장 보내기 버튼을 클릭하면 API 호출이 발생하고, 요청이 실패하면 루트 페이지로 이동하고 실패 토스트가 나타난다.', async () => {
    server.use(
      http.patch(
        baseURL(API_PATHS.LETTER_RECEPTION_REPLY_DETAIL(letter_id.toString())),
        letterResolvers.patchLetterReceptionReplyDetail.alreadyReplyExist,
      ),
    );

    const { user } = render(<ReplyBottomSheetComponent />);

    const sendButton = screen.getByRole('button', { name: '보내기' });
    await user.click(sendButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});
