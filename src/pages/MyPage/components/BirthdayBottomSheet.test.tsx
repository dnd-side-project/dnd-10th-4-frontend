import { toast } from 'react-toastify';
import { http } from 'msw';
import { server } from '@/mocks/node';
import { render, renderHook, screen, waitFor } from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { memberResolvers } from '@/mocks/resolvers/member';
import BirthdayBottomSheet from './BirthdayBottomSheet';

describe('인터랙션 테스트', () => {
  it('최초에는 연, 월, 일에 대한 input이 렌더링되고, 아무 것도 입력되지 않은 상태이다', () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    render(<BirthdayBottomSheet {...modalProps.current} />);

    const year = screen.getByPlaceholderText('YYYY');
    const month = screen.getByPlaceholderText('MM');
    const day = screen.getByPlaceholderText('DD');
    const submitButton = screen.getByRole('button', { name: '입력해주세요' });

    expect(year).toHaveValue('');
    expect(month).toHaveValue('');
    expect(day).toHaveValue('');
    expect(submitButton).toBeDisabled();
  });

  it('year input에는 현재 연도까지만 입력된다.', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<BirthdayBottomSheet {...modalProps.current} />);
    const fullYear = new Date().getFullYear();

    const year = screen.getByPlaceholderText('YYYY');
    await user.type(year, (fullYear + 1).toString());

    expect(year).toHaveValue(fullYear.toString());
  });

  it('month input에는 12까지만 입력된다.', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<BirthdayBottomSheet {...modalProps.current} />);

    const month = screen.getByPlaceholderText('MM');
    await user.type(month, '13');

    expect(month).toHaveValue('12');
  });

  it('day input에는 31까지만 입력된다.', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<BirthdayBottomSheet {...modalProps.current} />);

    const day = screen.getByPlaceholderText('DD');
    await user.type(day, '32');

    expect(day).toHaveValue('31');
  });

  it('닫기 버튼을 누르면 모달이 닫힌다', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<BirthdayBottomSheet {...modalProps.current} />);

    const closeButton = screen.getByRole('button', { name: '닫기' });
    await user.click(closeButton);

    expect(modalProps.current.value).toBe(false);
  });
});

describe('API 테스트', () => {
  it('[성공] 변경 완료 버튼을 클릭하면 API 호출이 발생하고 처리 중에는 버튼이 비활성화된다. 요청이 성공하면 성공 토스트가 나타난다.', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<BirthdayBottomSheet {...modalProps.current} />);
    const fullYear = new Date().getFullYear();

    const year = screen.getByPlaceholderText('YYYY');
    const month = screen.getByPlaceholderText('MM');
    const day = screen.getByPlaceholderText('DD');
    const submitButton = screen.getByRole('button', { name: '입력해주세요' });
    await user.type(year, fullYear.toString());
    await user.type(month, '12');
    await user.type(day, '31');
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(modalProps.current.value).toBe(false);
      expect(toast.success).toHaveBeenCalledTimes(1);
    });
  });

  it('[실패] 요청이 실패하면 실패 토스트가 나타난다.', async () => {
    server.use(
      http.patch(
        baseURL(API_PATHS.MEMBER_BIRTHDAY),
        memberResolvers.patchBirthday.notFound,
      ),
    );

    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<BirthdayBottomSheet {...modalProps.current} />);
    const fullYear = new Date().getFullYear();

    const year = screen.getByPlaceholderText('YYYY');
    const month = screen.getByPlaceholderText('MM');
    const day = screen.getByPlaceholderText('DD');
    const submitButton = screen.getByRole('button', { name: '입력해주세요' });
    await user.type(year, fullYear.toString());
    await user.type(month, '12');
    await user.type(day, '31');
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(modalProps.current.value).toBe(true);
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});
