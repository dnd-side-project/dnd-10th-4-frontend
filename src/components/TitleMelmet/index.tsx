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
      return matchPath(value(':a'), location.pathname);
    }

    return false;
  });

  const pageTitle = current
    ? ROUTER_TITLES[current[0] as keyof typeof ROUTER_TITLES]
    : null;

  const title = pageTitle
    ? `내 마음 속 바다 | ${pageTitle}`
    : '내 마음 속 바다';

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default TitleMelmet;
