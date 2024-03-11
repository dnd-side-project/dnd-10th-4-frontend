import { FormProvider, useForm } from 'react-hook-form';
import { HttpResponse, http } from 'msw';
import { zodResolver } from '@hookform/resolvers/zod';
import { server } from '@/mocks/node';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { ReceptionLetter as ReceptionLetterData } from '@/mocks/datas/letter';
import { render, screen } from '@/utils/testing-library';
import { formatDate } from '@/utils/dateUtils';
import { WORRY_DICT } from '@/constants/users';
import { ReplyInputs, replySchema } from '..';
import ReplyToLetter from '.';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

describe('렌더링 테스트', () => {
  it('흘러온 편지의 답장하기가 렌더링 된다. (아코디언 접혀 있는 상태)', async () => {
    const letter_id = 2;
    server.use(
      http.get(
        baseURL(API_PATHS.LETTER_RECEPTION_DETAIL(letter_id.toString())),
        () => HttpResponse.json(ReceptionLetterData(letter_id)),
      ),
    );

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

describe('인터랙션 테스트', () => {
  const letter_id = 2;

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

  server.use(
    http.get(
      baseURL(API_PATHS.LETTER_RECEPTION_DETAIL(letter_id.toString())),
      () => HttpResponse.json(ReceptionLetterData(letter_id)),
    ),
  );

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
});
