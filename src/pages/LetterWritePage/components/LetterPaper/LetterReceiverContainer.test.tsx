import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserEvent } from '@testing-library/user-event';
import { render, screen, within } from '@/utils/testing-library';
import { LetterReceiverContainer } from '..';
import { WriteInputs, writeSchema } from '../..';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);

const LetterReceiverContainerComponent = () => {
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
      <LetterReceiverContainer />,
    </FormProvider>
  );
};

const LetterReceiverSelectedComponent = () => {
  const methods = useForm<WriteInputs>({
    resolver: zodResolver(writeSchema),
    defaultValues: {
      age: [10, 40],
      content: '',
      gender: '나와 같은 성별에게 보내기',
      worryType: 'LOVE',
    },
  });
  return (
    <FormProvider {...methods}>
      <LetterReceiverContainer />,
    </FormProvider>
  );
};

describe('인터랙션 테스트', () => {
  it('누구에게 보낼까요? 를 누르면 바텀시트가 열린다.', async () => {
    const { user } = render(<LetterReceiverContainerComponent />);

    const receiverContainer = await screen.findByText('누구에게 보낼까요?', {
      selector: 'span',
    });

    await user.click(receiverContainer);

    const bottomSheet = await screen.findByText(
      '고민을 선택을 하면 나와 비슷한 고민을 가진 낯선 친구에게 전달돼요',
    );
    expect(bottomSheet).toBeVisible();
  });
});

describe('편지 받는 사람 선택 완료 후, 렌더링 테스트', () => {
  let user: UserEvent;

  beforeEach(async () => {
    const { user: userEvent } = render(<LetterReceiverContainerComponent />);
    user = userEvent;

    const receiverContainer = await screen.findByText('누구에게 보낼까요?', {
      selector: 'span',
    });

    await user.click(receiverContainer);
  });

  it('바텀시트에서 아무것도 선택하지 않은 상황에서 완료 버튼을 누르면, "10~40"이 화면에 보인다.', async () => {
    const buttonElement = screen.getByRole('button', { name: '완료' });
    await user.click(buttonElement);

    const age = await screen.findByText('10~40');
    expect(age).toBeVisible();
  });
  it('바텀시트에서 받는 사람 성별 선택 후 완료 버튼을 누르면, "모두에게"가 화면에 보인다.', async () => {
    const genderChip = screen.getByRole('button', {
      name: '모두에게 보내기',
    });
    await user.click(genderChip);

    const buttonElement = screen.getByRole('button', { name: '완료' });
    await user.click(buttonElement);

    const gender = await screen.findByText('모두에게');
    expect(gender).toBeVisible();
  });
  it('바텀시트에서 받는 사람 고민 선택 후 완료 버튼을 누르면, "학업"이 화면에 보인다.', async () => {
    const worryChip = screen.getByRole('button', {
      name: '학업',
    });
    await user.click(worryChip);

    const buttonElement = screen.getByRole('button', { name: '완료' });
    await user.click(buttonElement);

    const worry = await screen.getAllByText('학업', {
      selector: 'button',
    });
    const hashSymbol = within(worry[0]).getByText('#');
    expect(hashSymbol).toBeVisible();
  });
});

describe('편지 받는 사람 선택 닫기 후, 렌더링 테스트', () => {
  let user: UserEvent;

  beforeEach(async () => {
    const { user: userEvent } = render(<LetterReceiverContainerComponent />);
    user = userEvent;

    const receiverContainer = await screen.findByText('누구에게 보낼까요?', {
      selector: 'span',
    });

    await user.click(receiverContainer);
  });

  it('성별, 학업 선택 후 닫기 버튼을 누르면, 누구에게 보낼까요? 가 보인다.', async () => {
    const genderChip = screen.getByRole('button', {
      name: '모두에게 보내기',
    });
    await user.click(genderChip);

    const worryChip = screen.getByRole('button', {
      name: '학업',
    });
    await user.click(worryChip);

    const buttonElement = screen.getByRole('button', { name: '닫기' });
    await user.click(buttonElement);

    const receiverContainer = await screen.findByText('누구에게 보낼까요?', {
      selector: 'span',
    });
    expect(receiverContainer).toBeVisible();
  });
});

describe('편지 받는 사람 수정 완료 후, 렌더링 테스트', () => {
  let user: UserEvent;

  beforeEach(async () => {
    const { user: userEvent } = render(<LetterReceiverSelectedComponent />);
    user = userEvent;

    const ageTag = await screen.findByText('동성에게');

    await user.click(ageTag);
  });

  it('나이, 성별, 고민이 정해져 있는 상태에서, 성별을 모두에게 보내기 재선택 후 완료 버튼을 누르면 모두에게가 보인다.', async () => {
    const genderChip = screen.getByRole('button', {
      name: '모두에게 보내기',
    });
    expect(genderChip).toHaveAttribute('aria-selected', 'false');

    await user.click(genderChip);

    expect(genderChip).toHaveAttribute('aria-selected', 'true');

    const buttonElement = screen.getByRole('button', { name: '완료' });
    await user.click(buttonElement);

    const genderTag = await screen.findByText('모두에게');
    expect(genderTag).toBeVisible();
  });

  it('나이, 성별, 고민이 정해져 있는 상태에서, 고민을 학업으로 재선택 후 완료 버튼을 누르면 학업이 보인다.', async () => {
    const worryChip = screen.getByRole('button', {
      name: '학업',
    });
    expect(worryChip).toHaveAttribute('aria-selected', 'false');
    await user.click(worryChip);

    const buttonElement = screen.getByRole('button', { name: '완료' });
    await user.click(buttonElement);

    const worry = await screen.getAllByText('학업', {
      selector: 'button',
    });
    const hashSymbol = within(worry[0]).getByText('#');
    expect(hashSymbol).toBeVisible();
  });
});
