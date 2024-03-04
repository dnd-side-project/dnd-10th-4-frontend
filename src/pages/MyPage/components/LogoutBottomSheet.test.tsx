import useBoolean from '@/hooks/useBoolean';
import { screen, render, renderHook } from '@/utils/testing-library';
import STORAGE_KEYS from '@/constants/storageKeys';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import LogoutBottomSheet from './LogoutBottomSheet';

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
  const { user } = render(<LogoutBottomSheet {...modalProps.current} />);

  const cancelButton = screen.getByRole('button', { name: '취소' });
  await user.click(cancelButton);

  expect(modalProps.current.value).toBe(false);
});

it('로그아웃 버튼을 누르면 로그아웃 처리가 되고, 로그인 페이지로 이동한다.', async () => {
  const { result: modalProps } = renderHook(() => useBoolean(true));
  const { user } = render(<LogoutBottomSheet {...modalProps.current} />);

  const logoutButton = screen.getByRole('button', { name: '로그아웃' });
  await user.click(logoutButton);

  expect(localStorage.getItem(STORAGE_KEYS.accessToken)).toBeNull();
  expect(localStorage.getItem(STORAGE_KEYS.refreshToken)).toBeNull();
  expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.SIGNIN);
});
