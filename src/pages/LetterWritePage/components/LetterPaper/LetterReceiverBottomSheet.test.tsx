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
      expect(genderChip).toBeVisible();
    });

    worryList.forEach(async (worry) => {
      const worryChip = screen.getByRole('button', { name: worry });
      expect(worryChip).toBeVisible();
    });

    buttonList.forEach(async (button) => {
      const buttonElement = screen.getByRole('button', { name: button });
      expect(buttonElement).toBeVisible();
    });
  });
});

describe('바텀시트 내용 초기화 테스트', () => {
  it('받는 사람 성별 선택 후, 초기화 버튼을 누르면 초기화 된다.', async () => {
    const { user } = render(<BottomSheetComponent />);

    const genderchip = screen.getByRole('button', {
      name: '모두에게 보내기',
    });
    await user.click(genderchip);

    expect(genderchip).toHaveAttribute('aria-selected', 'true');

    const refreshIcon = await screen.findByTestId('refresh-icon');
    await user.click(refreshIcon);

    expect(genderchip).toHaveAttribute('aria-selected', 'false');
  });
  it('받는 사람 고민 선택 후, 초기화 버튼을 누르면 초기화 된다.', async () => {
    const { user } = render(<BottomSheetComponent />);

    const worrychip = screen.getByRole('button', {
      name: '인간관계',
    });
    await user.click(worrychip);

    expect(worrychip).toHaveAttribute('aria-selected', 'true');

    const refreshIcon = await screen.findByTestId('refresh-icon');
    await user.click(refreshIcon);

    expect(worrychip).toHaveAttribute('aria-selected', 'false');
  });
  it('받는 사람 성별, 고민 선택 후, 초기화 버튼을 누르면 초기화 된다.', async () => {
    const { user } = render(<BottomSheetComponent />);

    const genderchip = screen.getByRole('button', {
      name: '나와 같은 성별에게 보내기',
    });
    await user.click(genderchip);

    const worrychip = screen.getByRole('button', {
      name: '가족',
    });
    await user.click(worrychip);

    expect(genderchip).toHaveAttribute('aria-selected', 'true');
    expect(worrychip).toHaveAttribute('aria-selected', 'true');

    const refreshIcon = await screen.findByTestId('refresh-icon');
    await user.click(refreshIcon);

    expect(genderchip).toHaveAttribute('aria-selected', 'false');
    expect(worrychip).toHaveAttribute('aria-selected', 'false');
  });
});
