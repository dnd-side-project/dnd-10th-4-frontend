import { FormProvider, useForm } from 'react-hook-form';
import { HttpResponse, http } from 'msw';
import { zodResolver } from '@hookform/resolvers/zod';
import { render } from '@/utils/testing-library';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { server } from '@/mocks/node';
import { MemberInfo } from '@/mocks/datas/member';
import { WriteInputs, writeSchema } from '..';
import LetterWriteContainer from './LetterWriteContainer';

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
      <LetterWriteContainer />,
    </FormProvider>
  );
};

describe('렌더링 테스트', () => {
  it('편지쓰기 페이지가 렌더링 된다.', async () => {
    render(<LetterPaperComponent />);
  });
});
