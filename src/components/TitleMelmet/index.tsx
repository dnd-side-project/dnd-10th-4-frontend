import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getCurrentPageTitle } from '@/utils/routeUtils';

const TitleMelmet = () => {
  const location = useLocation();
  const currentPageTitle = getCurrentPageTitle(location.pathname);

  return (
    <Helmet>
      <title>
        {currentPageTitle
          ? `내 마음 속 바다 | ${currentPageTitle}`
          : '내 마음 속 바다'}
      </title>
    </Helmet>
  );
};

export default TitleMelmet;
