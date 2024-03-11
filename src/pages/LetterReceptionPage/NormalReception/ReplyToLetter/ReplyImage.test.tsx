import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen } from '@/utils/testing-library';
import { ReplyInputs, replySchema } from '..';
import ReplyImage from './ReplyImage';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

describe('이미지 첨부 테스트', () => {
  const imageFile = new File(
    ['ocean'],
    'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
    {
      type: 'image/jpg',
    },
  );

  const ReplyImageComponent = () => {
    const methods = useForm<ReplyInputs>({
      resolver: zodResolver(replySchema),
      defaultValues: {
        replyContent: '',
      },
    });

    return (
      <FormProvider {...methods}>
        <ReplyImage />
      </FormProvider>
    );
  };

  it.skip('이미지 업로드 테스트', async () => {
    const { user } = render(<ReplyImageComponent />);

    const imageUploader = await screen.getByLabelText('이미지 업로드');

    expect(imageUploader.files.length).toBe(0);

    await user.upload(imageUploader, [imageFile]);

    expect(imageUploader.files.length).toBe(1);
  });
});
