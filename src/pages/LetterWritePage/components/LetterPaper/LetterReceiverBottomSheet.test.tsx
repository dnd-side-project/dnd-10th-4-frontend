import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen } from '@/utils/testing-library';
import useBoolean from '@/hooks/useBoolean';
import { WORRY_DICT } from '@/constants/users';
import { WriteInputs, writeSchema } from '../..';
import { LetterReceiverBottomSheet } from '..';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

const BottomSheetComponent = () => {
  const letterReceiverBottomSheetProps = useBoolean(true);

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
      <LetterReceiverBottomSheet {...letterReceiverBottomSheetProps} />,
    </FormProvider>
  );
};

describe('렌더링 테스트', () => {
  const genderList = ['모두에게 보내기', '나와 같은 성별에게 보내기'];
  const worryList = Object.values(WORRY_DICT);
  const buttonList = ['닫기', '완료'];

  it('바텀시트 내용이 렌더링 된다.', async () => {
    render(<BottomSheetComponent />);

    genderList.forEach(async (gender) => {
      const genderChip = screen.getByRole('button', { name: gender });
      expect(genderChip).toBeInTheDocument();
    });

    worryList.forEach(async (worry) => {
      const worryChip = screen.getByRole('button', { name: worry });
      expect(worryChip).toBeInTheDocument();
    });

    buttonList.forEach(async (button) => {
      const buttonElement = screen.getByRole('button', { name: button });
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
