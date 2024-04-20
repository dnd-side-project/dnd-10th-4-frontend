import { matchPath } from 'react-router-dom';
import { ROUTER_PATHS, ROUTER_TITLES } from '@/constants/routerPaths';

/**
 * pathname을 기준으로 보여줘야 할 페이지의 상세 타이틀을 반환합니다.
 * @param pathname 현재 페이지의 경로
 * @returns 페이지 타이틀
 */
export const getCurrentPageTitle = (pathname: string) => {
  const currentRoute = Object.entries(ROUTER_PATHS).find((entry) => {
    const value = entry[1];

    if (typeof value === 'string') {
      return value === pathname;
    }

    if (typeof value === 'function') {
      const params = Array.from(
        { length: value.length },
        (_, i) => `:param${i}`,
      );

      // @ts-expect-error NOTE: 현재 순회중인 함수의 인자를 그대로 전달할 뿐이지만, 튜플이 아니기에 발생하는 타입 에러를 무시합니다.
      return matchPath(value(...params), pathname);
    }

    return false;
  });

  const currentRouteKey = currentRoute?.[0];
  const title = ROUTER_TITLES[currentRouteKey as keyof typeof ROUTER_TITLES];

  return title;
};
