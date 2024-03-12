import { toast } from 'react-toastify';
import { http } from 'msw';
import { render, screen, renderHook, waitFor } from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import { ROUTER_PATHS, API_PATHS } from '@/constants/routerPaths';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import { letterResolvers } from '@/mocks/resolvers/letter';
import StorageBottomSheet from './StorageBottomSheet';

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

const letter_id = 1;

describe('인터랙션 테스트', () => {
  it('취소 버튼을 누르면 바텀시트가 닫힌다.', async () => {
    const { result: bottomSheetProps } = renderHook(() => useBoolean(true));
    const { user } = render(
      <StorageBottomSheet {...bottomSheetProps.current} letterId={letter_id} />,
    );

    const cancelButton = screen.getByRole('button', { name: '취소' });
    await user.click(cancelButton);

    expect(bottomSheetProps.current.value).toBe(false);
  });
});

describe('API 테스트', () => {
  it('[성공] 보관하기 버튼을 클릭하면 API 호출이 발생하고, 요청이 성공하면 루트 페이지로 이동하고 성공 토스트가 나타난다.', async () => {
    const { result: bottomSheetProps } = renderHook(() => useBoolean(true));
    const { user } = render(
      <StorageBottomSheet {...bottomSheetProps.current} letterId={letter_id} />,
    );

    const storageButton = screen.getByRole('button', { name: '보관하기' });
    await user.click(storageButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.success).toHaveBeenCalledTimes(1);
    });
  });
  it('[실패] 요청이 실패하면 루트 페이지로 이동하고 실패 토스트가 나타난다.', async () => {
    server.use(
      http.patch(
        baseURL(API_PATHS.LETTER_REPLY_STORAGE_DETAIL(letter_id.toString())),
        letterResolvers.patchLetterReplyStorageDetail.unAnsweredLetterStore,
      ),
    );

    const { result: bottomSheetProps } = renderHook(() => useBoolean(true));
    const { user } = render(
      <StorageBottomSheet {...bottomSheetProps.current} letterId={letter_id} />,
    );

    const storageButton = screen.getByRole('button', { name: '보관하기' });
    await user.click(storageButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});
