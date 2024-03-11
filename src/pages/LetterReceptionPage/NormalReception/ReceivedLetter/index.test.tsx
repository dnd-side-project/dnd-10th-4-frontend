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
    const letter_id = 1;
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

    const imageElement = (await screen.getByAltText(
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
