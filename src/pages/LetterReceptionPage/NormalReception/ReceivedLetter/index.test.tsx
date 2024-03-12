import { HttpResponse, http } from 'msw';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { ReceptionLetter as ReceptionLetterData } from '@/mocks/datas/letter';
import { render, screen } from '@/utils/testing-library';
import { formatDate } from '@/utils/dateUtils';
import { WORRY_DICT } from '@/constants/users';
import ReceivedLetter from '.';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

describe('렌더링 테스트', () => {
  it('흘러온 편지가 렌더링 된다.', async () => {
    const letter_id = 2;
    server.use(
      http.get(
        baseURL(API_PATHS.LETTER_RECEPTION_DETAIL(letter_id.toString())),
        () => HttpResponse.json(ReceptionLetterData(letter_id)),
      ),
    );
    render(<ReceivedLetter letterId={letter_id} onNext={() => {}} />);

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

    const receiverNickname = await screen.findByText(
      ReceptionLetterData(letter_id).receiverNickname!,
    );

    const content = await screen.findByText(
      ReceptionLetterData(letter_id).content,
    );

    const createdAt = await screen.findByText(
      formatDate(new Date(ReceptionLetterData(letter_id).createdAt)),
    );

    const senderNickname = await screen.findByText(
      ReceptionLetterData(letter_id).senderNickname,
    );

    const imageElement = (await screen.findByAltText(
      '편지와 함께 보낸 이미지',
    )) as HTMLImageElement;
    const sendImagePath = ReceptionLetterData(letter_id).sendImagePath;

    expect(worry).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(receiverNickname).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
    expect(senderNickname).toBeInTheDocument();
    expect(imageElement.src).toContain(sendImagePath);
  });
});

describe('인터랙션 테스트', () => {
  const letter_id = 2;
  it('폴라로이드 사진을 클릭하면 모달이 열린다.', async () => {
    server.use(
      http.get(
        baseURL(API_PATHS.LETTER_RECEPTION_DETAIL(letter_id.toString())),
        () => HttpResponse.json(ReceptionLetterData(letter_id)),
      ),
    );

    const { user } = render(
      <ReceivedLetter letterId={letter_id} onNext={() => {}} />,
    );

    const imageElement = await screen.findByAltText('편지와 함께 보낸 이미지');
    await user.click(imageElement);

    const modalCloseButton = screen.getByRole('button', { name: '닫기' });

    expect(modalCloseButton).toBeInTheDocument();
  });
  it('다시 흘려보내기 버튼을 누르면 바텀시트가 열린다.', async () => {
    const { user } = render(
      <ReceivedLetter letterId={letter_id} onNext={() => {}} />,
    );

    const tossButton = await screen.findByRole('button', {
      name: '다시 흘려보내기',
    });
    await user.click(tossButton);

    const bottomSheet = screen.getByText('편지를 바다에 흘려보낼까요?');
    expect(bottomSheet).toBeVisible();
  });
});
