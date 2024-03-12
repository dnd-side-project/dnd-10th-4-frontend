import { HttpResponse, http } from 'msw';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { ReplyLetter as ReplyLetterData } from '@/mocks/datas/letter';
import { render, screen } from '@/utils/testing-library';
import { formatDate } from '@/utils/dateUtils';
import { WORRY_DICT } from '@/constants/users';
import SentLetter from '.';

const letter_id = 1;

beforeEach(() => {
  server.use(
    http.get(baseURL(API_PATHS.LETTER_REPLY_DETAIL(letter_id.toString())), () =>
      HttpResponse.json(ReplyLetterData(letter_id)),
    ),
  );
});

describe('렌더링 테스트', () => {
  it('모달이 열리고 내가 보낸 편지가 렌더링 된다.', async () => {
    const { user } = render(<SentLetter letterId={letter_id} />);

    const sentContainer = await screen.findByText('내가 보낸 편지');

    await user.click(sentContainer);

    const worry = await screen.findByText(
      WORRY_DICT[ReplyLetterData(letter_id).worryType],
    );
    const age = await screen.findByText(
      `${ReplyLetterData(letter_id).letterTag?.ageRangeStart}~${ReplyLetterData(letter_id).letterTag?.ageRangeEnd}세`,
    );
    const gender = await screen.findByText(
      ReplyLetterData(letter_id).letterTag?.equalGender
        ? '동성에게'
        : '모두에게',
    );
    const senderNickname = await screen.findByText(
      ReplyLetterData(letter_id).senderNickname,
    );
    const content = await screen.findByText(ReplyLetterData(letter_id).content);
    const createdAt = await screen.findByText(
      formatDate(new Date(ReplyLetterData(letter_id).createdAt)),
    );
    const receiverNickname = await screen.findByText(
      ReplyLetterData(letter_id).receiverNickname,
    );
    const imageElement = (await screen.findByAltText(
      '편지와 함께 보낸 이미지',
    )) as HTMLImageElement;
    const sendImagePath = ReplyLetterData(letter_id).sendImagePath;

    expect(worry).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(senderNickname).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
    expect(receiverNickname).toBeInTheDocument();
    expect(imageElement.src).toContain(sendImagePath);
  });
});

describe('인터랙션 테스트', () => {
  it('폴라로이드 사진을 클릭하면 모달이 열린다.', async () => {
    const { user } = render(<SentLetter letterId={letter_id} />);

    const sentContainer = await screen.findByText('내가 보낸 편지');

    await user.click(sentContainer);

    const imageElement = (await screen.getByAltText(
      '편지와 함께 보낸 이미지',
    )) as HTMLImageElement;

    await user.click(imageElement);

    const modalCloseButton = screen.getByRole('button', { name: '닫기' });

    expect(modalCloseButton).toBeInTheDocument();
  });
});
