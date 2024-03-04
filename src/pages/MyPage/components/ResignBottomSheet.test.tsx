import { toast } from 'react-toastify';
import { http } from 'msw';
import { screen, render, renderHook, waitFor } from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import STORAGE_KEYS from '@/constants/storageKeys';
import { API_PATHS, ROUTER_PATHS } from '@/constants/routerPaths';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import { memberResolvers } from '@/mocks/resolvers/member';
import ResignBottomSheet from './ResignBottomSheet';

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

it('취소 버튼을 누르면 모달이 닫힌다', async () => {
  const { result: modalProps } = renderHook(() => useBoolean(true));
  const { user } = render(<ResignBottomSheet {...modalProps.current} />);

  const cancelButton = screen.getByRole('button', { name: '취소' });
  await user.click(cancelButton);

  expect(modalProps.current.value).toBe(false);
});

it('[성공] 탈퇴 버튼을 누르면 API 호출이 발생하고, 로그인 페이지로 이동한다.', async () => {
  const { result: modalProps } = renderHook(() => useBoolean(true));
  const { user } = render(<ResignBottomSheet {...modalProps.current} />);

  const resignButton = screen.getByRole('button', { name: '탈퇴하기' });
  await user.click(resignButton);

  await waitFor(() => {
    expect(modalProps.current.value).toBe(false);
    expect(localStorage.getItem(STORAGE_KEYS.accessToken)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEYS.refreshToken)).toBeNull();
    expect(navigateFn).toHaveBeenNthCalledWith(1, ROUTER_PATHS.SIGNIN);
  });
});

it('[실패] 요청이 실패하면 실패 토스트가 나타난다.', async () => {
  server.use(
    http.delete(
      baseURL(API_PATHS.MEMBER_SIGN_OUT),
      memberResolvers.deleteMember.notFound,
    ),
  );

  const { result: modalProps } = renderHook(() => useBoolean(true));
  const { user } = render(<ResignBottomSheet {...modalProps.current} />);

  const resignButton = screen.getByRole('button', { name: '탈퇴하기' });
  await user.click(resignButton);

  await waitFor(() => {
    expect(modalProps.current.value).toBe(true);
    expect(toast.error).toBeCalledTimes(1);
  });
});
