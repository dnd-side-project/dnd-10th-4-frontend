import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { HttpResponse, http } from 'msw';
import { zodResolver } from '@hookform/resolvers/zod';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS, ROUTER_PATHS } from '@/constants/routerPaths';
import { ReceptionLetter as ReceptionLetterData } from '@/mocks/datas/letter';
import { render, screen, waitFor, renderHook } from '@/utils/testing-library';
import { formatDate } from '@/utils/dateUtils';
import { WORRY_DICT } from '@/constants/users';
import useBoolean from '@/hooks/useBoolean';
import { letterResolvers } from '@/mocks/resolvers/letter';
import { ReplyInputs, replySchema } from '..';
import ReplyBottomSheet from './ReplyBottomSheet';
import ReplyToLetter from '.';

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

const letter_id = 2;

beforeEach(() => {
  server.use(
    http.get(
      baseURL(API_PATHS.LETTER_RECEPTION_DETAIL(letter_id.toString())),
      () => HttpResponse.json(ReceptionLetterData(letter_id)),
    ),
  );
});

const ReplyToLetterComponent = () => {
  const methods = useForm<ReplyInputs>({
    resolver: zodResolver(replySchema),
    defaultValues: {
      replyContent: '',
    },
  });
  return (
    <FormProvider {...methods}>
      <ReplyToLetter letterId={letter_id} onPrev={() => {}} />
    </FormProvider>
  );
};

describe('렌더링 테스트', () => {
  it('흘러온 편지의 답장하기가 렌더링 된다. (아코디언 접혀 있는 상태)', async () => {
    render(<ReplyToLetterComponent />);

    const worry = await screen.findByText(
      WORRY_DICT[ReceptionLetterData(letter_id).worryType!],
    );
    const age = await screen.findByText(
      `${ReceptionLetterData(letter_id).letterTag?.ageRangeStart}~${ReceptionLetterData(letter_id).letterTag?.ageRangeEnd}세`,
    );
    const gender = await screen.findByText(
      ReceptionLetterData(letter_id).letterTag?.equalGender
        ? '동성에게'
        : '모두에게',
    );
    const receiverNicknameElements = await screen.findAllByText(
      ReceptionLetterData(letter_id).receiverNickname!,
    );
    const senderNickname = await screen.findByText(
      ReceptionLetterData(letter_id).senderNickname,
    );
    const createdAt = await screen.findByText(
      formatDate(new Date(ReceptionLetterData(letter_id).createdAt)),
    );
    const content = await screen.findByText(
      ReceptionLetterData(letter_id).content,
    );
    const imageElement = (await screen.getByAltText(
      '편지와 함께 보낸 이미지',
    )) as HTMLImageElement;
    const sendImagePath = ReceptionLetterData(letter_id).sendImagePath;

    expect(worry).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(receiverNicknameElements).toHaveLength(2);
    expect(senderNickname).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(imageElement.src).toContain(sendImagePath);
  });
});

describe('아코디언 테스트', () => {
  it('펼치기를 누르면 아코디언이 펼쳐진다.', async () => {
    const { user } = render(<ReplyToLetterComponent />);

    const expandButton = await screen.findByRole('button', { name: '펼치기' });
    await user.click(expandButton);

    const senderNicknameElements = await screen.findAllByText(
      ReceptionLetterData(letter_id).senderNickname,
    );

    expect(expandButton).toHaveAttribute('aria-expanded', 'true');
    expect(senderNicknameElements).toHaveLength(2);
  });
  it('접기를 누르면 아코디언이 접힌다.', async () => {
    const { user } = render(<ReplyToLetterComponent />);

    const expandButton = await screen.findByRole('button', { name: '펼치기' });
    await user.click(expandButton);

    expect(expandButton).toHaveAttribute('aria-expanded', 'true');

    await user.click(expandButton);

    const senderNicknameElements = await screen.findAllByText(
      ReceptionLetterData(letter_id).senderNickname,
    );

    expect(expandButton).toHaveAttribute('aria-expanded', 'false');
    expect(senderNicknameElements).toHaveLength(1);
  });
  it('아코디언 폴라로이드 사진을 클릭하면 모달이 열린다.', async () => {
    const { user } = render(<ReplyToLetterComponent />);

    const expandButton = await screen.findByRole('button', { name: '펼치기' });
    await user.click(expandButton);

    const imageElement = await screen.findByAltText('편지와 함께 보낸 이미지');
    await user.click(imageElement);

    const modalCloseButton = screen.getByRole('button', { name: '닫기' });

    expect(modalCloseButton).toBeInTheDocument();
  });
});

describe('편지 작성 테스트', () => {
  it('아무 것도 입력되지 않은 상태에서 답장 보내기 버튼을 누르면 경고 토스트가 뜬다.', async () => {
    const { user } = render(<ReplyToLetterComponent />);

    const content = await screen.findByPlaceholderText(
      '하고싶은 이야기를 답장으로 적어보세요. (10자 이상)',
    );
    const sendButton = screen.getByRole('button', { name: '답장 보내기' });
    await user.click(sendButton);

    expect(content).toHaveValue('');
    expect(toast.warn).toHaveBeenCalledTimes(1);
  });
  it('10자 미만 입력하고 답장 보내기 버튼을 누르면 경고 토스트가 뜬다.', async () => {
    const { user } = render(<ReplyToLetterComponent />);

    const content = await screen.findByPlaceholderText(
      '하고싶은 이야기를 답장으로 적어보세요. (10자 이상)',
    );

    await user.type(content, '10자 미만 내용');

    const sendButton = screen.getByRole('button', { name: '답장 보내기' });
    await user.click(sendButton);

    expect(toast.warn).toHaveBeenCalledTimes(1);
  });
  it('10자 이상 입력하면 답장보내기 바텀시트가 나타난다,', async () => {
    const { user } = render(<ReplyToLetterComponent />);

    const content = await screen.findByPlaceholderText(
      '하고싶은 이야기를 답장으로 적어보세요. (10자 이상)',
    );

    await user.type(content, '10자 이상 내용입니다.');

    const sendButton = screen.getByRole('button', { name: '답장 보내기' });
    await user.click(sendButton);

    const bottomSheet = screen.getByText('답장을 보낼까요?');
    expect(bottomSheet).toBeVisible();
  });
});

describe('답장 보내기 API 테스트', () => {
  const letter_id = 2;
  const { result: bottomSheetProps } = renderHook(() => useBoolean(true));

  const ReplyToLetterComponent = () => {
    const methods = useForm<ReplyInputs>({
      resolver: zodResolver(replySchema),
      defaultValues: {
        replyContent: '답장을 보낼 편지 내용입니다.',
      },
    });
    return (
      <FormProvider {...methods}>
        <ReplyBottomSheet {...bottomSheetProps.current} letterId={letter_id} />
      </FormProvider>
    );
  };

  it('[성공] 답장 보내기 버튼을 클릭하면 API 호출이 발생하고, 요청이 성공하면 루트 페이지로 이동하고 성공 토스트가 나타난다.', async () => {
    const { user } = render(<ReplyToLetterComponent />);

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

    const { user } = render(<ReplyToLetterComponent />);

    const sendButton = screen.getByRole('button', { name: '보내기' });
    await user.click(sendButton);

    await waitFor(() => {
      expect(navigateFn).toHaveBeenCalledWith(ROUTER_PATHS.ROOT);
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});
