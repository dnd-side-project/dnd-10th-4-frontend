import { render, screen } from '@/utils/testing-library';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import BottomButton from './BottomButton';

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

describe('인터랙션 테스트', () => {
  const letter_id = 1;
  it('보관하기 버튼을 누르면 바텀시트가 열린다.', async () => {
    const { user } = render(<BottomButton letterId={letter_id} />);

    const storageButton = screen.getByRole('button', { name: '보관하기' });
    await user.click(storageButton);

    const bottomSheet = screen.getByText('편지를 보관함에 저장할까요?');
    expect(bottomSheet).toBeVisible();
  });
  it('닫기 버튼을 누르면 루트 페이지로 간다.', async () => {
    const { user } = render(<BottomButton letterId={letter_id} />);

    const cancelButton = screen.getByRole('button', { name: '닫기' });
    await user.click(cancelButton);

    expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
  });
});
