import { toast } from 'react-toastify';
import { http } from 'msw';
import {
  screen,
  render,
  renderHook,
  within,
  waitFor,
} from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import { server } from '@/mocks/node';
import { API_PATHS } from '@/constants/routerPaths';
import { memberResolvers } from '@/mocks/resolvers/member';
import { baseURL } from '@/utils/mswUtils';
import GenderBottomSheet from './GenderBottomSheet';

describe('인터랙션 테스트', () => {
  it('최초에는 두 가지의 성별에 대한 input이 렌더링되고, 아무 것도 선택되지 않은 상태이다', () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    render(<GenderBottomSheet {...modalProps.current} />);

    const male = screen.getByLabelText('남성');
    const female = screen.getByLabelText('여성');
    const submitButton = screen.getByRole('button', { name: '선택해주세요' });

    expect(male).toBeInTheDocument();
    expect(male).not.toBeChecked();
    expect(female).toBeInTheDocument();
    expect(female).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });

  it('남성 input을 클릭하면 남성이 선택되고 확인 버튼이 활성화된다', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<GenderBottomSheet {...modalProps.current} />);

    const male = screen.getByLabelText('남성');
    const submitButton = screen.getByRole('button', { name: '선택해주세요' });
    await user.click(male);

    expect(male).toBeChecked();
    expect(submitButton).not.toBeDisabled();
    expect(within(submitButton).getByText('변경하기')).toBeInTheDocument();
  });

  it('여성 input을 클릭하면 여성이 선택되고 확인 버튼이 활성화된다', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<GenderBottomSheet {...modalProps.current} />);

    const female = screen.getByLabelText('여성');
    const submitButton = screen.getByRole('button', { name: '선택해주세요' });
    await user.click(female);

    expect(female).toBeChecked();
    expect(submitButton).not.toBeDisabled();
    expect(within(submitButton).getByText('변경하기')).toBeInTheDocument();
  });

  it('닫기 버튼을 클릭하면 모달이 닫힌다', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<GenderBottomSheet {...modalProps.current} />);

    const closeButton = screen.getByRole('button', { name: '닫기' });
    await user.click(closeButton);

    expect(modalProps.current.value).toBe(false);
  });
});

describe('API 테스트', () => {
  it('[성공] 변경하기 버튼을 클릭하면 API 호출이 발생하고 처리 중에는 버튼이 비활성화된다. 요청이 성공하면 성공 토스트가 나타난다.', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<GenderBottomSheet {...modalProps.current} />);

    const male = screen.getByLabelText('남성');
    const submitButton = screen.getByRole('button', { name: '선택해주세요' });

    await user.click(male);
    await user.click(submitButton);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(modalProps.current.value).toBe(false);
      expect(toast.success).toHaveBeenCalledTimes(1);
    });
  });

  it('[실패] 요청이 실패하면 실패 토스트가 나타난다.', async () => {
    server.use(
      http.patch(
        baseURL(API_PATHS.MEMBER_GENDER),
        memberResolvers.patchGender.notFound,
      ),
    );

    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<GenderBottomSheet {...modalProps.current} />);

    const male = screen.getByLabelText('남성');
    const submitButton = screen.getByRole('button', { name: '선택해주세요' });

    await user.click(male);
    await user.click(submitButton);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(modalProps.current.value).toBe(true);
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});
