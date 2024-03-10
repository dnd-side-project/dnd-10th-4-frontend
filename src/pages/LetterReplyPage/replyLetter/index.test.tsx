import { HttpResponse, http } from 'msw';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { ReplyLetter as ReplyLetterData } from '@/mocks/datas/letter';
import { render, screen } from '@/utils/testing-library';
import { formatDate } from '@/utils/dateUtils';
import ReplyLetter from '.';

describe('렌더링 테스트', () => {
  it('답장 받은 편지가 렌더링 된다.', async () => {
    const letter_id = 1;
    server.use(
      http.get(
        baseURL(API_PATHS.LETTER_REPLY_DETAIL(letter_id.toString())),
        () => HttpResponse.json(ReplyLetterData(letter_id)),
      ),
    );
    render(<ReplyLetter letterId={letter_id} />);

    const receiverNickname = await screen.findByText(
      ReplyLetterData(letter_id).receiverNickname,
    );
    const repliedContent = await screen.findByText(
      ReplyLetterData(letter_id).repliedContent,
    );
    const repliedAt = await screen.findByText(
      formatDate(new Date(ReplyLetterData(letter_id).repliedAt)),
    );
    const senderNickname = await screen.findByText(
      ReplyLetterData(letter_id).senderNickname,
    );
    const imageElement = (await screen.getByAltText(
      '편지와 함께 보낸 이미지',
    )) as HTMLImageElement;
    const replyImagePath = ReplyLetterData(letter_id).replyImagePath;

    expect(receiverNickname).toBeInTheDocument();
    expect(repliedContent).toBeInTheDocument();
    expect(repliedAt).toBeInTheDocument();
    expect(senderNickname).toBeInTheDocument();
    expect(imageElement.src).toContain(replyImagePath);
  });
});

describe('인터랙션 테스트', () => {
  it('폴라로이드 사진을 클릭하면 모달이 열린다.', async () => {
    const letter_id = 1;

    server.use(
      http.get(
        baseURL(API_PATHS.LETTER_REPLY_DETAIL(letter_id.toString())),
        () => HttpResponse.json(ReplyLetterData(letter_id)),
      ),
    );

    const { user } = render(<ReplyLetter letterId={letter_id} />);

    const imageElement = await screen.findByAltText('편지와 함께 보낸 이미지');
    await user.click(imageElement);

    const imageDownButton = document.querySelector('#download-button');

    expect(imageDownButton).toBeInTheDocument();
  });
});
