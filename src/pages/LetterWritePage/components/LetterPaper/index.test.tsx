import { FormProvider, useForm } from 'react-hook-form';
import { HttpResponse, http } from 'msw';
import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen } from '@/utils/testing-library';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { server } from '@/mocks/node';
import { MemberInfo } from '@/mocks/datas/member';
import { formatDate } from '@/utils/dateUtils';
import { LetterPaper } from '..';
import { WriteInputs, writeSchema } from '../..';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

beforeEach(() => {
  server.use(
    http.get(baseURL(API_PATHS.MEMBER), () => HttpResponse.json(MemberInfo)),
  );
});

const LetterPaperComponent = () => {
  const methods = useForm<WriteInputs>({
    resolver: zodResolver(writeSchema),
    defaultValues: {
      age: [],
      content: '',
      gender: '',
      worryType: '',
    },
  });
  return (
    <FormProvider {...methods}>
      <LetterPaper
        isBottomSheetOpen={false}
        toggleBottomSheet={() => () => {}}
      />
      ,
    </FormProvider>
  );
};

describe('렌더링 테스트', () => {
  it('편지쓰기 페이지가 렌더링 된다.', async () => {
    render(<LetterPaperComponent />);

    const receivername = await screen.findByText('누구에게 보낼까요?');
    const textarea =
      await screen.findByPlaceholderText('하고싶은 이야기를 적어보세요.');
    const date = await screen.findByText(formatDate(new Date()));
    const username = await screen.findByText(MemberInfo.nickname);
    const imageUploader = await screen.getByLabelText('이미지 업로드');

    expect(receivername).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(imageUploader).toBeInTheDocument();
  });
});
