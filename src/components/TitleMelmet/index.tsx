import { Helmet } from 'react-helmet-async';
import { matchPath, useLocation } from 'react-router-dom';
import { ROUTER_PATHS, ROUTER_TITLES } from '@/constants/routerPaths';

const TitleMelmet = () => {
  const location = useLocation();

  const current = Object.entries(ROUTER_PATHS).find((entry) => {
    const value = entry[1];

    if (typeof value === 'string') {
      return value === location.pathname;
    }

    if (typeof value === 'function') {
      const params = Array.from(
        { length: value.length },
        (_, i) => `:param${i}`,
      );

      // @ts-expect-error NOTE: 현재 순회중인 함수의 인자를 그대로 전달할 뿐이지만, 튜플이 아니기에 발생하는 타입 에러를 무시합니다.
      return matchPath(value(...params), location.pathname);
    }

    return false;
  });

  const currentPageTitle =
    ROUTER_TITLES[current?.[0] as keyof typeof ROUTER_TITLES];

  const title = currentPageTitle
    ? `내 마음 속 바다 | ${currentPageTitle}`
    : '내 마음 속 바다';

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default TitleMelmet;
