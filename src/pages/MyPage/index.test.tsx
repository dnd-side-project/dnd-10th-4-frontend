import { HttpResponse, http } from 'msw';
import { render, screen, within } from '@/utils/testing-library';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { server } from '@/mocks/node';
import { MemberInfo } from '@/mocks/datas/member';
import { WORRY_DICT } from '@/constants/users';
import { memberResolvers } from '@/mocks/resolvers/member';
import MyPage from '.';

describe('렌더링 테스트', () => {
  it('온보딩을 마친 회원이면 사용자의 기존 정보가 렌더링된다', async () => {
    server.use(
      http.get(baseURL(API_PATHS.MEMBER), () => HttpResponse.json(MemberInfo)),
    );
    render(<MyPage />);

    const nickname = await screen.findByText(MemberInfo.nickname);
    const birthDay = await screen.findByText(
      `${MemberInfo.birthDay[0]}년 ${MemberInfo.birthDay[1]}월 ${MemberInfo.birthDay[2]}일`,
    );
    const gender = within(
      (await screen.findByText('성별 변경')).closest('li')!,
    ).getByText('남성');
    const worry = within(
      (await screen.findByText('고민 변경')).closest('li')!,
    ).getByRole('button');
    const worries = within(worry).getAllByRole('listitem');

    expect(nickname).toBeInTheDocument();
    expect(birthDay).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(worries).toHaveLength(MemberInfo.worryTypes.length);

    for (const worryType of MemberInfo.worryTypes) {
      expect(
        within(worry).getByText(WORRY_DICT[worryType]),
      ).toBeInTheDocument();
    }
  });

  it('온보딩을 하지 않은 회원이면 설정되지 않음이라는 문구가 렌더링된다', async () => {
    server.use(
      http.get(baseURL(API_PATHS.MEMBER), memberResolvers.getMember.empty),
    );
    render(<MyPage />);

    const nickname = within(
      (await screen.findByText('닉네임 변경')).closest('li')!,
    ).getByText('설정되지 않음');
    const birthDay = within(
      (await screen.findByText('생년월일 변경')).closest('li')!,
    ).getByText('설정되지 않음');
    const gender = within(
      (await screen.findByText('성별 변경')).closest('li')!,
    ).getByText('설정되지 않음');
    const worry = within(
      (await screen.findByText('고민 변경')).closest('li')!,
    ).getByText('설정되지 않음');

    expect(nickname).toBeInTheDocument();
    expect(birthDay).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(worry).toBeInTheDocument();
  });
});

describe('인터랙션 테스트', () => {
  it('닉네임 클릭시 닉네임 변경 모달이 열려야 한다', async () => {
    const { user } = render(<MyPage />);

    const listitem = (await screen.findByText('닉네임 변경')).closest('li');
    const button = within(listitem!).getByRole('button');
    await user.click(button);

    const modal = screen.getByText('새로운 닉네임을 선택해주세요');
    expect(modal).toBeVisible();
  });

  it('생년월일 클릭시 생년월일 변경 모달이 열려야 한다', async () => {
    const { user } = render(<MyPage />);

    const listitem = (await screen.findByText('생년월일 변경')).closest('li');
    const button = within(listitem!).getByRole('button');
    await user.click(button);

    const modal = screen.getByText('언제로 변경하시겠어요?');
    expect(modal).toBeVisible();
  });

  it('성별 클릭시 성별 변경 모달이 열려야 한다', async () => {
    const { user } = render(<MyPage />);

    const listitem = (await screen.findByText('성별 변경')).closest('li');
    const button = within(listitem!).getByRole('button');
    await user.click(button);

    const modal = screen.getByText('어떤 성별로 변경하시겠어요?');
    expect(modal).toBeVisible();
  });

  it('고민 클릭시 고민 변경 모달이 열려야 한다', async () => {
    const { user } = render(<MyPage />);

    const listitem = (await screen.findByText('고민 변경')).closest('li');
    const button = within(listitem!).getByRole('button');
    await user.click(button);

    const modal = screen.getByText('어떤 고민으로 변경하시겠어요?');
    expect(modal).toBeVisible();
  });

  it('로그아웃 클릭시 로그아웃 모달이 열려야 한다', async () => {
    const { user } = render(<MyPage />);

    const logoutItem = await screen.findByRole('menuitem', {
      name: '로그아웃',
    });
    await user.click(logoutItem);

    const modal = await screen.findByText('로그아웃하시겠어요?');
    expect(modal).toBeVisible();
  });

  it('서비스 탈퇴 클릭시 서비스 탈퇴 모달이 열려야 한다', async () => {
    const { user } = render(<MyPage />);

    const resignItem = await screen.findByRole('menuitem', {
      name: '서비스 탈퇴',
    });
    await user.click(resignItem);

    const modal = await screen.findByText('탈퇴하시겠어요?');
    expect(modal).toBeVisible();
  });
});
