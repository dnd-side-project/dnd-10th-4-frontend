import { toast } from 'react-toastify';
import { http } from 'msw';
import { render, renderHook, screen, waitFor } from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import * as arrayUtils from '@/utils/arrayUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { memberResolvers } from '@/mocks/resolvers/member';
import NicknameBottomSheet from './NicknameBottomSheet';

it('닉네임 변경 아이콘을 클릭하면 getRandomItem 함수가 실행된다', async () => {
  const getRandomItem = vi.spyOn(arrayUtils, 'getRandomItem');
  const { result: modalProps } = renderHook(() => useBoolean(true));
  const { user } = render(<NicknameBottomSheet {...modalProps.current} />);

  const changeNickname = await screen.findByTestId('change-nickname');
  await user.click(changeNickname);

  expect(getRandomItem).toHaveBeenCalledTimes(1);
});

describe('닉네임 변경 API 호출', () => {
  it('[성공] 변경 완료 버튼을 클릭하면 API 호출이 발생하고 처리 중에는 버튼이 비활성화된다. 요청이 성공하면 성공 토스트가 나타난다.', async () => {
    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<NicknameBottomSheet {...modalProps.current} />);

    const submitButton = await screen.findByText('변경 완료');
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(toast.success).toHaveBeenCalledTimes(1);
    });
  });

  it('[실패] 요청이 실패하면 실패 토스트가 나타난다.', async () => {
    server.use(
      http.patch(
        baseURL(API_PATHS.MEMBER_NICKNAME),
        memberResolvers.patchNickname.notFound,
      ),
    );

    const { result: modalProps } = renderHook(() => useBoolean(true));
    const { user } = render(<NicknameBottomSheet {...modalProps.current} />);

    const submitButton = await screen.findByText('변경 완료');
    await user.click(submitButton);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});

it('닫기 버튼을 클릭하면 모달이 닫힌다', async () => {
  const { result: modalProps } = renderHook(() => useBoolean(true));
  const { user } = render(<NicknameBottomSheet {...modalProps.current} />);

  const closeButton = await screen.findByText('닫기');
  await user.click(closeButton);

  expect(modalProps.current.value).toBe(false);
});
