import { toast } from 'react-toastify';
import { http } from 'msw';
import { render, screen, renderHook, waitFor } from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import { ROUTER_PATHS, API_PATHS } from '@/constants/routerPaths';
import { server } from '@/mocks/node';
import { letterResolvers } from '@/mocks/resolvers/letter';
import { baseURL } from '@/utils/mswUtils';
import TossBottomSheet from './TossBottomSheet';

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

describe('인터랙션 테스트', () => {
  const letter_id = 2;
  it('취소 버튼을 누르면 바텀시트가 닫힌다.', async () => {
    const { result: bottomSheetProps } = renderHook(() => useBoolean(true));
    const { user } = render(
      <TossBottomSheet {...bottomSheetProps.current} letterId={letter_id} />,
    );

    const cancelButton = screen.getByRole('button', { name: '취소' });
    await user.click(cancelButton);
  });
});

describe('API 테스트', () => {
  const letter_id = 2;
  it('[성공] 흘려보내기 버튼을 클릭하면 API 호출이 발생하고, 요청이 성공하면 루트 페이지로 이동하고 성공 토스트가 나타난다.', async () => {
    const { result: bottomSheetProps } = renderHook(() => useBoolean(true));
    const { user } = render(
      <TossBottomSheet {...bottomSheetProps.current} letterId={letter_id} />,
    );

    const cancelButton = screen.getByRole('button', { name: '흘려보내기' });
    await user.click(cancelButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.success).toHaveBeenCalledTimes(1);
    });
  });
  it('[실패] 흘려보내기 버튼을 클릭하면 API 호출이 발생하고, 요청이 성공하면 루트 페이지로 이동하고 실패 토스트가 나타난다.', async () => {
    server.use(
      http.patch(
        baseURL(API_PATHS.LETTER_RECEPTION_PASS_DETAIL(letter_id.toString())),
        letterResolvers.patchLetterReceptionPassDetail.repliedLetterPass,
      ),
    );

    const { result: bottomSheetProps } = renderHook(() => useBoolean(true));
    const { user } = render(
      <TossBottomSheet {...bottomSheetProps.current} letterId={letter_id} />,
    );

    const cancelButton = screen.getByRole('button', { name: '흘려보내기' });
    await user.click(cancelButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});
