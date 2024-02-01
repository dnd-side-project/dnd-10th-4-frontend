import { useEffect } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ROUTER_PATHS } from '@/router';
import oauth2API from '@/api/oauth2/apis';

const SigninKakaoPage = () => {
  const [searchParams] = useSearchParams();
  const { mutateAsync } = useMutation({ mutationFn: oauth2API.postKakaoCode });
  const navigate = useNavigate();
  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      if (!code) {
        return;
      }

      try {
        await mutateAsync(code);
        navigate(ROUTER_PATHS.ONBOARDING);
      } catch (error) {
        console.error(error);
        navigate(ROUTER_PATHS.SIGNIN);
      }
    })();
  }, []);

  if (!code) {
    return <Navigate to={ROUTER_PATHS.SIGNIN} />;
  }

  return <div>Loading...</div>;
};

export default SigninKakaoPage;
